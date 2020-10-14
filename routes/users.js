var express = require('express');
var router = express.Router();
const { query } = require('../models/db');

/* GET users listing. */
router.get('/', function (req, res, next) {
  // res.send('respond with a resource');
  res.render('users', { title: 'Userpage', users: ['Hans', 'Moa', 'Bengt', 'Frans', 'Lisa'] });
});

router.get('/:id', async function (req, res, next) {
  // console.log(req.params);

  try {
    const user = await query(
      'SELECT * FROM users WHERE id = ?',
      req.params.id
    );

    const meeps = await query(
      'SELECT * FROM meeps WHERE user_id = ?',
      req.params.id
    );

    res.render('users', {
      id: req.params.id,
      user: user,
      meeps: meeps
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
