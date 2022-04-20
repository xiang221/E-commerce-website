const mysql = require('mysql');
require('dotenv').config();


const db = mysql.createConnection({
    host: process.env["DB_HOST"],
    user: process.env["DB_PORT"],
    password: process.env["DB_USER"],
    database: process.env["DB_PASS"]
});


module.exports = db;
