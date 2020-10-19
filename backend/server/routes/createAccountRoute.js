const express = require("express")
const Router = express.Router()
const mysqlConnection = require("../connection.js")
const bcrypt = require('bcrypt')
const saltRounds = 10


Router.post("/", (req,res) => {

    const email = req.body.email
    const sqlCheckExistingAccount = "SELECT * FROM users WHERE userId = ?"
    mysqlConnection.query(sqlCheckExistingAccount, [email], (err,result)=> {

        if(result.length===1){
            res.send({exists:true})
            console.log("Email Exists")
        }

        else if (result.length ===0){
            res.send({exists:false})
            const password = req.body.pw
            const userName = req.body.userName

            bcrypt.hash(password, saltRounds, (err, hash)=> {
                const sqlCreateAccount = "INSERT INTO users (userId,userPw,userName,activated) Values (?,?,?,1)"
                mysqlConnection.query(sqlCreateAccount, [email, hash, userName], (err,result2)=> {
                }) 
            })            
        }
    })
    
})

module.exports = Router