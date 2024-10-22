const mongoose = require ('mongoose');

const userScheema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
        trim:true,
        maxLength: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }
})

module.exports = mongoose.model("user", userScheema);