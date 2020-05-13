var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Webbserver-programmering med Node.js' });
});

router.get('/readme', function (req, res, next) {
  res.render('readme');
});

module.exports = router;
