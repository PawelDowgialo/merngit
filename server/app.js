const express = require("express")
const cors = require("cors")
const usersRoutes = require("./routes/users")
const connectionToMongoDB = require("./config/database")
const path = require("path")

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/users", usersRoutes)
app.use(express.static(path.join(__dirname, "public")))

const myDataBase = "myDB"
const url = `mongodb://localhost:27017/${myDataBase}`
connectionToMongoDB(url)

module.exports = app