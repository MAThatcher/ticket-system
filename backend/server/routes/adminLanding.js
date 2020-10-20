const express = require("express")
const Router = express.Router()
const mysqlConnection = require("../connection.js")


Router.get("/", (req,res) => {
    const userTickets ="select userName, ticket.ticketId, ticket.userId, ticketDate, messageText from users, ticket, ticketMessage where users.userId = ticket.userId and ticket.ticketId = ticketMessage.ticketId group by ticket.ticketId"
    mysqlConnection.query(userTickets, (err,result)=> {
        res.send(result)
    })
})

module.exports = Router