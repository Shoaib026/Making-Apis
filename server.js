const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
require('./connection')


//This line is copied from the npm packages
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//till here.


// know linking the Routers folder & files with server.js
const studroute = require('./Routers/Student')
// ".use" is for when I want to call only students it will call all the student from Routes path of studroute.
app.use('/student', validateUser , studroute)

function validateUser(req, res, next) {
    const secretKey = req.app.get('secretKey');
    console.log('Secret Key:', secretKey); // Log the secret key to verify it is retrieved

    jwt.verify(req.headers['x-access-token'], secretKey, function(err, decoded) {
         // req.headers['x-access-token']  This is just the path to enter in the header section  
         // req.app.get('secretKey') This is the secret key  that we had made it before & it should be secured.
        if (err) {
            return res.json({ 'Status': "authenticate", message: err.message });
        } else {
            req.body.id = decoded.id; // Assuming the token payload has an 'id' field
            next();
        }
    });
}



// "secretkey" is coming from the "userController"
// "set" is a method used to store a value
app.set('secretKey', "I am a developer 12332100");



//Add the "userRouter" to connect the folders:
const userRouter = require('../node/Routers/userRouter')
app.use('/user',userRouter)


//add the "FileUploads" to connect the folders:
const FileUplods = require('../node/Routers/FileUploads')
app.use('/upload', FileUplods )



app.get("/", (req, res)=>{
    res.send("hello node.js")
})


app.listen(4562, ()=> {
    console.log("localhost: is on port- 4562")
})
