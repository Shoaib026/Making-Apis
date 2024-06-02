// first we make model section then controller section then routes section
// Routes will connect with controller:

const express = require('express')
const router = express.Router()
var StudController = require('../App/Apis/Controllers/StudControllers')
const StudControllers = require('../App/Apis/Controllers/StudControllers')
const studentModel = require('../App/Apis/Models/StudModel')

//post mean insert the data:
router.post('/addStudent',StudController.create)

//get means we retrieve data:
router.get('/getStudent',StudController.getAll)

// Single is for id Students: for this we need a single ID for it:
router.get('/singleStudent/:studid',StudController.getSingle)

// "put" is used to "update" :  for this we need a single ID for it :
router.put('/updateStudent/:studid',StudController.updatestudsingle)

// "delete" is used to vanised the record : for this we need a single ID for it:
router.delete('/deleteStudent/:studid',StudController   .deleteStudent)
module.exports = router