// PACKAGES INSTALLINGS
const mongoose = require ('mongoose')
const multer = require('multer')
const express = require('express')
const router = express.Router()
// connecting the file's "categoryModel" in "FileUplods"
var categoryModel = require('../App/Apis/Models/categoryModel')


// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage });

// Route to handle file upload
router.post("/", upload.single('file'), (req, res, next) => {
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg", "video/mp4"];
    if (allowedMimeTypes.includes(req.file.mimetype)) {
        const Category = new categoryModel({
            _id: new mongoose.Types.ObjectId(),
            title: req.body.title,
            path: req.file.path,
            name: req.file.filename,
            type: req.file.mimetype,
        });

        Category.save()
            .then(result => {
                console.log(result);
                res.status(201).send(req.file.filename);
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({ error: err.message });
            });
    } else {
        res.status(400).json({ message: 'Invalid file type' });
    }
});




module.exports = router