import mysql from "mysql2/promise";
import dbConfig from "../config/db.config"

export const connection = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
})
