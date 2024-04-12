const mongoose = require("mongoose")

async function connectionToMongoDB(url){
    try {
        await mongoose.connect(url)
        console.log(`Connected to MongoDb`)
    } catch (error) {
        console.log(`Connection error: ${error.message}`)
    }
}

module.exports = connectionToMongoDB