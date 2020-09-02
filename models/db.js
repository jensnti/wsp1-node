const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'jens',
  password: 'Secret123',
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
