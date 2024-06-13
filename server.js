const express = require('express')
const app = express()
require('./connection')


//This line is copied from the npm packed
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//till here.


// know linking the Routers folder & files with server.js
const studroute = require('./Routers/Student')
// ".use" is for when I want to call only students it will call all the students from Routes path of studroute.
app.use('/student', validateUser , studroute)


// "secretkey" is coming from the "userController"
app.set('secretkey',"I am a developer 12332100")



// add the "userRouter" to connect the folders:
const userRouter = require('../node/Routers/userRouter')
app.use('/user',userRouter)





app.get("/", (req, res)=>{
    res.send("hello node.js")
})


app.listen(4562, ()=> {
    console.log("localhost: is on port- 4562")
})
