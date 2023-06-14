const express = require('express');
const log = console.log
const app = express();

require('dotenv').config()
require('./startup/connection')

app.listen(process.env.port, (err) => {

    if(err){
        log(`anable to listen on port ${process.env.port}`)
        log('due to error : ' + err)
    }

    else{

        log(`listening on port ${process.env.port}`)
    }
})