var express = require('express');
var router = express.Router();

// controller içerisindeki http verblerimiz burada router nesnesi üzerinde yapılıyor.
/* GET home page. */
router.get('/', function(req, res, next) {
  // return view yerine burada res render kullanılıyor.
  // sayfayı render et demek.
  res.render('index', { title: 'Ali' });
});





module.exports = router;
