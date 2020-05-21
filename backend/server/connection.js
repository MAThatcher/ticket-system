const mysql = require("mysql")
var mysqlConnection = mysql.createConnection({
    host :"qn66usrj1lwdk1cc.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user : "kkkj83yyr92iffk8",
    password : "m6uegtkg9yd3n51a",
    database : "wu811gwb0lv8fles",
    multipleStatements : true
})

mysqlConnection.connect((err) => {
    if(!err){
        console.log("Connected")
    }
    else{
        console.log("Connection Failed")
    }
})

module.exports = mysqlConnection