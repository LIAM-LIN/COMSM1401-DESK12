//express框架
const express = require('express')
const app = express()

//数据库储存的是xml，需要parser
const bodyParser = require('body-parser')

//用mongoose将js与db连接
const mongoose = require('mongoose');
const url = 'mongodb://localhost/peopleDb';

const User = require('./model/user');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))

//用mongoose连接到数据库
app.post('/api/user/submit', (req, res) => {
	mongoose.connect(url, function(err){
		if(err) throw err;
		const user = new User({
			username: req.body.username,
			points: req.body.points,
			rightNum: req.body.rightNum,
			wrongNum: req.body.wrongNum
		})
		user.save((err, res) => {
			if(err) throw err;
			return res.status(200).json({
				status: 'success',
				data: res
			})
		})
	});
})
 
// app.get('/api/people/points', (req, res) => {
//     res.send('Hello World!')
// })
 
app.listen(3000, () => console.log('Server running on port 3000!'))