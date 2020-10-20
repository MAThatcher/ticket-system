const express = require('express')
const mysql = require("mysql")
const bodyParser = require("body-parser")
const mysqlConnection = require("./connection.js")
const loginRoute = require("./routes/loginRoute")
const userLoginPage = require("./routes/userLanding")
const createAccountRoute = require("./routes/createAccountRoute")
const adminLoginPage = require("./routes/adminLanding")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

app.get("/", (req,res) =>{
    const userTickets ="SELECT userName, ticket.ticketId, ticket.userId, ticketDate, messageText FROM users, ticket, ticketMessage WHERE users.userId = ticket.userId AND ticket.ticketId = ticketMessage.ticketId AND ticket.userId = 'user1@email.com' GROUP BY ticket.ticketId"
    mysqlConnection.query(userTickets, (err,result)=> {
        res.send(result)
    })
})


app.use("/api/userPage",userLoginPage)
app.use("/api/login",loginRoute)
app.use("/api/createAccount",createAccountRoute)
app.use("/api/adminPage",adminLoginPage)

app.listen(5000, ()=> {
    console.log(`Server listening on port 5000`)
})