
const app = require("./app")
const mongoose = require("mongoose")


const PORT = 8000

app.listen(PORT, ()=>console.log(`Server express is running ${PORT}`))

process.on('SIGINT', async ()=>{
    console.log("Closing MongoDB")
    try {
        await mongoose.disconnect()
        console.log("MongoDB connection closed")
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }finally{
        process.exit()
    }
})

// const express = require("express")
// const mongoose = require("mongoose")
// const cors = require("cors")


// const app = express()
// const PORT = 8000

// app.use(express.json())
// app.use(cors())

// const myDataBase= "myDB"
// const url = `mongodb://localhost:27017/${myDataBase}`
// mongoose.connect(url)
//     .then(()=>console.log("Connected to MongoDB"))
//     .catch((err)=>console.log("Connection error: ", err.message))

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     age: Number
// })

// const User = mongoose.model("User",userSchema)

// app.get("/api/users", async (req,res)=>{
//     try{
//         const users = await User.find({})
//         res.json(users)
        
//     }catch(err){
//         res.status(500).json({message: err.message})
//     }
// })

// app.delete("/api/users/:id", async (req, res)=>{
//     const userId = req.params.id
//     try{
//         const deletedUser = await User.findByIdAndDelete(userId)
//         if(!deletedUser){
//             return res.status(404).json({message:"User not found"})
//         }
//         res.json({message:"User deleted hurrraaa!"})
//     }catch(err){
//         res.status(500).json({message: err.message})
//     }
// })

// <<<<<<< HEAD
// app.post("/api/users", async (req, res)=>{
//     try{
//         const newUser = await User.find({})
//         await newUser.save()
//         res.json({message:"User deleted hurrraaa!"})
//     }catch(err){
//         res.status(500).json({message: err.message})
//     }
// })

// =======
// >>>>>>> 5e86f63aeb3e4745045548f8093464927c381bb0
// app.listen(PORT, ()=>console.log(`Server express is running ${PORT}`))

// process.on('SIGINT', ()=>{
//     console.log("Closing MongoDB")
//     mongoose.disconnect()
//         .then(()=>console.log("MongoDB connection closed"))
//         .finally(()=>process.exit())
// })
