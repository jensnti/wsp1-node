const express = require('express');
const router = express.Router();
const pool = require('../models/db');

router.get('/', function (req, res, next) {
  const sql = 'SELECT meeps.*, users.name FROM meeps JOIN users ON meeps.user_id = users.id';

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
    // res.json({
    //   status: 200,
    //   result
    // });
    console.log(result);
    res.render('test', { result: result });
  });
});

router.get('/:id', function (req, res, next) {
  const sql = 'SELECT * FROM meeps WHERE id = ?';

  pool.query(sql, [req.params.id], function (err, result, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      id: req.params.id,
      result: result
    });
  });
});

module.exports = router;
