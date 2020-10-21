const express = require("express")
const Router = express.Router()
const mysqlConnection = require("../connection.js")
const bcrypt = require('bcrypt');

Router.post("/", (req,res) => {

    //query the data base for this user
    const {email,pw} = req.body
    const sqlUserLogin ="SELECT * from users where userId = ?"
    mysqlConnection.query(sqlUserLogin, [email, pw], (err,result)=> {

        //if query retrieves a single user check if passwords are the same
        if (result.length === 1){
            bcrypt.compare(pw, result[0].userPw, (err, result1)=> {
                if(result1 ===true){

                    //Successful Login
                    res.send(result)
                }

                //User does exist but password does not match. Bad login
                else {
                    res.send({data:false})
                }
            })
        }

        //passwords did not match. Bad login
        else {
            res.send({data:false})
        }
    })
})

module.exports = Router