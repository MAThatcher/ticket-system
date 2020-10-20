const express = require("express")
const Router = express.Router()
const mysqlConnection = require("../connection.js")
const bcrypt = require('bcrypt');

Router.post("/", (req,res) => {
    const email = req.body.email
    const password = req.body.pw
    const sqlUserLogin ="SELECT userId, userPw from users where userId = ?"
    mysqlConnection.query(sqlUserLogin, [email, password], (err,result)=> {
        if (result.length === 1){
            bcrypt.compare(password, result[0].userPw, (err, result1)=> {
                res.send(result1)
            })
        }
        else {
            res.send(result)
        }
    })
})

module.exports = Router