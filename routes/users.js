var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  const users = [
    {
      id:1,
      name:'ali'
    },
    {
      id:2,
      name:'can'
    }
  ]

  res.json(users);
});

module.exports = router;
