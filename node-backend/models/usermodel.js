const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
    firstName : String,
    lastName: String,
    mobileNumber: String,
    userName: String,
    email: String,
    role:String,
    password: String
})

const FormDataModel = mongoose.model('users', FormDataSchema);

module.exports = FormDataModel;