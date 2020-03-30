const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'database',
  user: 'root',
  password: 'password',
  database: 'StayKay',
  port: '3306'
});

db.connect();

module.exports = db;
