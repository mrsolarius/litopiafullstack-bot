var MainController = require('../app/controller/MainController');
var CandidatureController = require('../app/controller/CandidatureController');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('accueil', { title: 'Accueil' });
});

router.get('/nous-rejoindre', function(req, res, next) {
  res.render('./nous-rejoindre/index', { title: 'Rejoindre' });
});

router.get('/nous-rejoindre/reglement', function(req, res, next) {
  res.render('./nous-rejoindre/reglement', { title: 'Rejoindre' });
});

router.get('/nous-rejoindre/:step', function(req,res,next){
  let mainController = new MainController(req,res);
  mainController.steper();
});

router.post('/api/check/candidature', function(req,res,next){
  let candidControl = new CandidatureController(req,res);
  candidControl.checker();
});

router.post('/api/send/candidature', function(req,res,next){
  console.log('ici1');
  let candidControl = new CandidatureController(req,res);
  candidControl.send();
});


module.exports = router;
