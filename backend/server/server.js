const express = require('express')
const mysql = require("mysql")
const bodyParser = require("body-parser")
const mysqlConnection = require("./connection.js")
const loginRoute = require("./routes/loginRoute")
const createAccountRoute = require("./routes/createAccountRoute")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

app.use("/api/login",loginRoute)
app.use("/api/createAccount",createAccountRoute)


app.listen(5000, ()=> {
    console.log(`Server listening on port 5000`)
})