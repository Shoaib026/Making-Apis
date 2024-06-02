// first we make model section then controller section then routes section
// Controller will connect with the models


// I  have connected "model" with controller 
var studentModel = require('../Models/StudModel')

// I want that every model I make, should be export.
module.exports = {
    // Create function to handle creating a new student
    create: function (req, res) {
         // what it to be called function in function?
         // it is Known as Call-back 

        // Create a new student document using the request body
        studentModel.create(req.body)
            .then(success => {
                res.send("Now your data is saved into the database");
            })
            .catch(err => {
                res.send("Something went wrong!! " + err);
            });
    }


// the mistake I was doing of curly brackets  }in the end side 
// the secound mistake was "studentModel" & i was writing "studModel"
,
    getAll: function (req,res) { 
    studentModel.find().then(results=>{
        res.send(results)
    }).catch(err=>{
        res.send("something went wrong"+err)
    })
}

,

    getSingle: function (req,res) {
         // findById : is to find out only one person.
        studentModel.findById(req.params.studid).then(results=>{
            res.send(results)    
            }).catch(err=>{
                res.send("something went wrong"+err)
            })
    }
    ,
    updatestudsingle:function (req,res) {
        studentModel.findByIdAndUpdate(req.params.studid,req.body).then(success=>{
            res.send("Your Data is updated ")
        }).catch(err=>{
            res.send("some3thing is wrong"+err)
        })
    }
    ,
    deleteStudent: function (req,res) {
        studentModel.findByIdAndDelete(req.params.studid).then(success=>{
            res.send("Data is deleted")
        }).catch(err=>{
            res.send("Somethig went wrong!!"+err)
        })
        
    }
}


