const express = require('express')
const app = express()
require('./connection')


// this line is copyed from the npm packesd
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//till here.


// know linking the Routers folder & files with server.js
const studroute = require('./Routers/Student')
// ".use" is for when I want to call only students its will call all the student from Routes path of studroute.
app.use('/student', studroute)



// add the "userRouter" to connect the folders:
const userRouter = require('../node/Routers/userRouter')
app.use('/user',userRouter)

// "secretkey"its coming from the "userController"
app.set('secretkey',"I am a developer 12332100")

app.get("/", (req, res)=>{
    res.send("hello node.js")
})


app.listen(4562, ()=> {
    console.log("localhost: is on port- 4562")
})