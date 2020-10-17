const express = require("express")
const Router = express.Router()
const mysqlConnection = require("../connection.js")

Router.post("/", (req,res) => {
    const email = req.body.email
    const password = req.body.pw
    const sqlUserLogin ="SELECT userId, userPw from users where userId = ? and userPw = ?"
    mysqlConnection.query(sqlUserLogin, [email, password], (err,result)=> {res.send(result)})
})

module.exports = Router