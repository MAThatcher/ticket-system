const express = require('express')
const mysql = require("mysql")
const bodyParser = require("body-parser")
const mysqlConnection = require("./connection.js")
const usersRoutes = require("./routes/users.js") 
const app = express()
const cors = require("cors")

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())


app.use("/users",usersRoutes)
app.get("/", (req,res) => res.send("Hello World!"))

app.get("/api/get", (req,res) => {
    const sqlUserLogin ="SELECT userId, userPw, userName from users where userId = 'user2@email.com' and userPw = 'password2'"
    mysqlConnection.query(sqlUserLogin, (err,result)=> {
        res.send(result)
    })
})

app.get("/api/login", (req,res) => {
    const email = req.body.email
    const password = req.body.pw
    console.log(email, password)
    const sqlUserLogin ="SELECT userId, userPw from users where userId = '?' and userPw = '?'"
    mysqlConnection.query(sqlUserLogin, [email, password], (err,result)=> {console.log(result)})
})
app.listen(5000, ()=> {
    console.log(`Server listening on port 5000`)
})