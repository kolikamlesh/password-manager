require('dotenv').config()

module.exports = {
    user: process.env.dbUser,
    password: process.env.dbPassword,
    host: process.env.dbHost,
    database: process.env.database
}

