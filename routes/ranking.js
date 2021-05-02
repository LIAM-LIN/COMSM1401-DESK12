const express = require('express');
const router = express.Router();
const ranking = require('../controllers/ranking');

router.get('/', function(req, res){
    ranking.index(req,res);
});

router.post('/insertuser', function(req, res) {
    ranking.insert(req,res);
});

router.get('/getranking', function(req, res) {
    ranking.list(req,res);
});

module.exports = router;