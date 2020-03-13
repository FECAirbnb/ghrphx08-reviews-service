const mysql = require('mysql');
const db = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'Airbnb'
});

db.connect();

module.exports = db;
