const express = require('express');
const router = express.Router();
const db = require('../models/db');

/* GET home page. */
router.get('/', function (req, res, next) {
  const sql = 'SELECT * FROM users';

  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: 'User lists retrieved successfully'
    });
    // res.render('test', { data });
  });

  // res.render('index', { title: 'Webbserver-programmering med Node.js' });
});

module.exports = router;
