// first we make model section then controller section then routes section
//what does a model do ?
// model work is to deals with connections
// Schema is a structure of doucments

// install the mongoose package
const mongoose = require('mongoose')
// this is writen for 'Student' to not plural itself. 
mongoose.pluralize(null)



//Going to make doucments
var studSchema = new mongoose.Schema({
    rollno: { type: Number, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    address: { type: String }
})



// make variable name it "studentModel" `, the collection will be made of "Student" & it follow the "studSchema"  
var studentModel = mongoose.model('Student', studSchema)

// we can call it out of file also , So export it 
module.exports = studentModel

// "studSchema" -> "studentModel"