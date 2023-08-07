var express = require('express');
const Todo = require('../models/todo.model');
var router = express.Router();

/* Todo Listeleme Islemi Burada Yapilacak. */

/* Todo Ekleme Islemi Burada Yapilacak. */

/* Todo Guncelleme Islemi Burada Yapilacak. */

/* Todo Silme Islemi Burada Yapilacak. */

router.get('/', function (req,res,next) {
  res.send('todos api request');
})

router.post("/", function(req, res, next){

  console.log('todos')
 
  new Todo({
    title: req.body.title,
    date: req.body.date,
    completed: req.body.completed,
  }).save().then(() => {
      res.json("Kaydetme İşlemi Başarılı.");
  }).catch((err) => {
      res.json("Kaydetme İşleminde Hata Oluştu.");
  });

});

module.exports = router;