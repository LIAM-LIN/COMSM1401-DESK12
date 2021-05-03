const path = require('path');
const Ranking = require('../models/ranking');

exports.index = function (req, res) {
    res.sendFile(path.resolve('views/ranking.html'));
};

exports.insert = function (req, res) {
    var newUser = new Ranking(req.body);   //Data api for inserting
    newUser.save(function (err) {
        if(err) {
            res.status(400).send('Unable to save data');
        } else {
            res.redirect('/ranking/');
        }
    });
};

exports.list = function (req, res) { 
    Ranking.find({}).sort({ points: -1}).limit(10).exec(function (err, ranking) {
        if (err) {
                return res.send(500, err);
        }
        res.render('getranking', {
                ranking: ranking
        });
    });
};