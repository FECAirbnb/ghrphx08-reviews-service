const mysql = require('mysql2');
const db = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'StayKay'
});

db.connect();

module.exports = db;
