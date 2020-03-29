/* eslint-disable no-console */
const mysql = require('mysql2');

const connect = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root', // change to your user and password in sql
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
