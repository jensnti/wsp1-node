const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'torsdag'
});

connection.connect((error) => {
  if (error) {
    throw error;
  }
});

module.exports = connection;

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
// flush privileges;
