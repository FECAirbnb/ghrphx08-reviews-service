const mysql = require('mysql');
const db = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'StayKay'
});

db.connect();

module.exports = db;
