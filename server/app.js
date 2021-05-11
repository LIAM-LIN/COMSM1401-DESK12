const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose');
const url = 'mongodb://localhost/userDb';
const User = require('./model/user');
const path = require('path');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// app.post('/api/user/login', (req, res) => {
//     mongoose.connect(url, { useMongoClient: true }, function(err) {
//         if (err) throw err;
//         User.find({
//             username: req.body.username,
//             password: req.body.password
//         }, function(err, user) {
//             if (err) throw err;
//             if (user.length === 1) {
//                 return res.status(200).json({
//                     status: 'success',
//                     data: user
//                 })
//             } else {
//                 return res.status(200).json({
//                     status: 'fail',
//                     message: 'Login Failed'
//                 })
//             }

//         })
//     });
// })

// router.get("/hero", (req, res) => {
//     User.find({}).sort({ update_at: -1 }).limit(10).then(users => {
//         res.send(users);
//     }).catch(err => {
//         console.log(2);
//         res.send(err);
//     });
// });

// app.get('/api/user/ranking', (req, res) => {
//     mongoose.connect(url, function(err) {
//         res = new User;

//         if (err) throw err;
//         User.find({}).sort({ points: -1 }).limit(10).exec(function(err, ranking) {
//             if (err) throw err;
//             res.body.username = ranking[0];
//             res.body.points = ranking[1];
//             res.body.rightNum = ranking[2];
//             res.body.wrongNum = ranking[0];
//             return "success";
//         });
//         return res;
//     });
// })

app.post('/api/user/create', (req, res) => {
    mongoose.connect(url, function(err) {
        if (err) throw err;
        const user = new User({
            username: req.body.username,
            points: req.body.points,
            rightNum: req.body.rightNum,
            wrongNum: req.body.wrongNum,
        })
        user.save((err, res) => {
            if (err) throw err;
            return
        })
    });
})


//已经连接数据库，只需要输出每一条记录就可以
app.get('/api/user/ranking', (req, res) => {
    mongoose.connect(url, function(err) {
        if (err) throw err;

        ranking = 1;
        res.send(ranking);
        // User.find({}).sort({ points: -1 }).limit(10).exec(function(err, ranking) {
        //     if (err) throw err;
        //     res.send(ranking);

        // res.render('/ranking', {
        //     ranking: ranking
        // });
    });
});

app.listen(3000, () => console.log('Server running on port 3000!'))