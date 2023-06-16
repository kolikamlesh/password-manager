const home = require('../routes/home');
const session = require('express-session');
const cookieParser = require('cookie-parser');

module.exports = (app, express) => {

    require('dotenv').config()
    app.use(cookieParser(process.env.secretKey));
    app.use(session({ 
        secret: process.env.secretKey,
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60000 }}
    ));

    app.use(express.urlencoded({extended:false}));
    app.set('view engine', 'ejs');

    // routes
    app.use('/', home);
}