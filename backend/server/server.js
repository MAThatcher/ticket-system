const express = require('express')
const mysql = require("mysql")
const bodyParser = require("body-parser")
const mysqlConnection = require("./connection.js")
const usersRoutes = require("./routes/users.js") 
const app = express()

app.use(bodyParser.json())
app.use(express.json())
app.use("/users",usersRoutes)
app.get("/", (req,res) => res.send("Hello World!"))

app.listen(5000, ()=> {
    console.log(`Server listening on port 5000`)
})