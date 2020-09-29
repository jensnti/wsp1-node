const express = require('express');
const router = express.Router();
const pool = require('../models/db');

// const mysql = require('mysql');
// const pool = mysql.createPool({
//   connectionLimit: 10,
//   host: '127.0.0.1',
//   user: 'jens',
//   password: 'Secret123',
//   database: 'te18'
// });

// pool.getConnection(function (err, connection) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }

//   console.log('connected as id ' + connection.threadId);

//   connection.release();
// });

router.get('/', function (req, res, next) {
  const sql = 'SELECT * FROM meeps';

  // pool.getConnection((error, connection) => {
  //   if (error) {
  //     throw error;
  //   }
  //   console.log('connected as id ' + connection.threadId);

  //   res.send('connected as id ' + connection.threadId);

  //   connection.release();
  // });

  pool.query(sql, function (err, result, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      result
    });
    // res.render('test', { result: result });
  });
});
// const db = require('../models/db');

// /* GET home page. */
// router.get('/', function (req, res, next) {
//   const sql = 'SELECT * FROM meeps';

//   db.query(sql, function (err, rows, fields) {
//     if (err) throw err;
//     // res.json({
//     //   status: 200,
//     //   data,
//     //   message: 'User lists retrieved successfully'
//     // });
//     res.render('test', { rows: rows });
//   });

//   // res.render('index', { title: 'Webbserver-programmering med Node.js' });
// });

module.exports = router;
