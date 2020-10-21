const express = require("express")
const Router = express.Router()
const mysqlConnection = require("../connection.js")


Router.post("/", (req,res) => {
    const id = req.body.userId

    const userTickets ="select userName, ticket.ticketId, ticket.userId, ticketDate, messageText from users, ticket, ticketMessage where users.userId = ticket.userId and ticket.ticketId = ticketMessage.ticketId and ticket.userId = ? group by ticket.ticketId"
    mysqlConnection.query(userTickets, [id], (err,result)=> {
        res.send(result)
    })
})

module.exports = Router