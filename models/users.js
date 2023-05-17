const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nama harus di isi']
    },
    email: {
        type: String,
        required: [true, 'Email harus di isi']
    },
    password: {
        type: String,
        required: [true, 'Password harus di isi']
    }
})

const user = mongoose.model('user', userSchema)

module.exports = user