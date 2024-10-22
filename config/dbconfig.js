const mongoose = require('mongoose');


async function connectDB() {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("connected to DB")
    } catch (error) {
        console.log("Something went wrong while connecting to MongoDB")
        console.log(error)
    }
}

module.exports = connectDB;