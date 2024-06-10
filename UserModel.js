const mongoose = require('mongoose');
mongoose.pluralize(null);

const bcrypt = require('bcrypt');
const saltround = 10;


var Schema = mongoose.Schema;
var userSchema = new Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});


userSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, saltround);
    next();
});


var UsersModel = mongoose.model('Users', userSchema);
module.exports = UsersModel;