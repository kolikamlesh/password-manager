const express = require('express');
const app = express();

require('dotenv').config();

require('./startup/routes')(app, express);

app.listen(process.env.port, ()=> {
    console.log('Listening on PORT: 8080');
});

