const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_SVR)
    } catch (error) {
        console.log(`error: ${error.message}`)
    }
}

module.exports = connectDB