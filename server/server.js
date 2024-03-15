const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
const PORT = 8000

app.use(express.json())
app.use(cors())

const myDataBase = "myDB"
const url = `mongodb://localhost:27017/${myDataBase}`
mongoose.connect(url)
    .then(()=>console.log("Connected"))
    .catch((err)=>console.log("Connection Error", err.message))

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const user = mongoose.model("User", userSchema)

app.get("/api/users", async(req, res)=>{
    try{
       const users = await UserActivation.find({})
       res.json(users)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})

app.listen(PORT, ()=>console.log("Server wydupcyło na porcie", PORT))

process.on("SIGINT", ()=>{
    console.log("Closing MongoDB")
    mongoose.disconnect()
        .then(()=>console.log("MongoDB connection closed"))
        .finally(()=>process.exit())
})