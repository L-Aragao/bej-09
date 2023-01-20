const mysql = require("mysql2/promise");
const dbConfig = require("../config/db.config")

const connection = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
})

module.exports = connection;