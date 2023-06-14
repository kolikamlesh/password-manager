// Load module mysql connection
const mysql = require('mysql');
const dbConfig = require('../config/dbConfig');
const log = console.log

const connection = mysql.createConnection(dbConfig); 

connection.connect((err) => {

    if(err){
        log(`anable to connect database`)
        log('due to error : ' + err)
    }

    else{
        log(`connected to database`)
    }
})

module.exports = connection