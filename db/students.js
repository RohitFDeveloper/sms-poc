const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    gender: String,
    email: String,
    password: String
})

module.exports = mongoose.model('students', studentSchema)