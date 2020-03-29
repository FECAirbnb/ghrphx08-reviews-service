/* eslint-disable no-console */
const mysql = require('mysql2');

const connect = mysql.createConnection({
  host: 'database',
  user: 'root',
  password: 'password',
  port: '3306'
});

connect.connect(err => {
  if (err) throw err;
  console.log('Connected');
  connect.query('CREATE DATABASE IF NOT EXISTS StayKay', error => {
    if (error) throw error;
    console.log('Database Created');
    connect.end();
  });
});
