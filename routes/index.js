'use strict';

const express = require('express');
const router = express.Router();

const tweetBank = require('../tweetBank');

router.get('/', (req, res) => {
  let tweets = tweetBank.list();
  res.render('index', { tweets });
})

router.get('/users/:name', function(req, res){
  let name = req.params.name;
  let list = tweetBank.find({name: name});
  res.render('index', {name})
  console.log(list, name)

})

// router.get('/stylesheets', (req, res) => {
//   res.sendFile(req.path);
// })

module.exports = router;
