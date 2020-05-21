const express = require('express')
const mysql = require("mysql")
const bodyParser = require("body-parser")
const mysqlConnection = require("./connection.js")
const usersRoutes = require("./routes/users.js") 
const app = express()

app.use(bodyParser.json())
app.use(express.json())
app.use("/users",usersRoutes)


app.listen(3000)