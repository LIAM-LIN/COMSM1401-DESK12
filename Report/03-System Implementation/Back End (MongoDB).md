## Back End (MongoDB)



### Tools



Our group chose MongoDB as the database support for the project, used Mongoose as the interface to connect to the database, used the Express framework to develop the API interface, and used HttpClient as UrlConnection.



### Reasons for chosen tools



1. **MongoDB**

   We chose MongoDB because, as a lightweight NoSQL, it perfectly fits the project's needs. The data structure that needs to be stored in the project is simple, there is no complex relationship between data, and the amount of data stored in a single call and in the project is not large, and the service provided by MongoDB just meets the business requirements.

2. **Express**

   We chose the Express framework because, as a lightweight architecture for Web development, Express provides developers with a way to quickly edit the interface, and its functionality was applied in the project to edit the interface that supports database additions, deletions, and changes.

3. **HttpClient**

   We chose HttpClient as UrlConnection because it implements all the methods in Http (such as GET, POST, PUT, HEAD, DELETE, HEAD, OPTIONS, etc.), which is just right for adapting the interface methods to meet, and at the beginning of the project, our project team planning may use Nginx and other proxies, and HttpClient just support this Nginx, so we chose it.



### Process



The project needs to store the data structure is the main class for a user, its properties are: username  (indicating the user's name), points (indicating the user trivia score), rightNum (indicating the number of questions on the user trivia game), wrongNum (indicating the number of questions on the user trivia game wrong). 





![image](Report/img/relationship.png)





Define the data structure to store the data via Mongoose：



```js
Schema = mongoose.Schema;

const userSchema = new Schema({

  username: { type: String, required: true, unique: true },

  points: { type: Number, required: true },

  rightNum: { type: Number, required: true },

  wrongNum: { type: Number, required: true }

}, { collection: 'user' });

const User = mongoose.model('User', userSchema);
```



Connect to the local port of MongoDB through Mongoose, and build the interface to add, delete, and check the database through the Express framework, because the project needs to do a ranking business, so directly structured an interface to return the top 10 user records of the score.



1. Addition API：



```js
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
            res = "success";
        })
    })
})
```



2. Deletion API：



```js
app.post('/api/user/remove', (req, res) => {
    mongoose.connect(url, function(err) {
        if (err) throw err;

        User.remove({ "username": req.body.username }, (err, res) => {
            if (err) throw err;
            res = "success";
        })
    })
})
```



3. Query API：



```js
app.get('/api/user/query', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, function(err) {
        if (err) throw err;

        User.find({}).exec(function(err, ranking) {
            if (err) throw err;

            return res.status(200).json({
                // status: 'success',
                data: ranking
            })
        })
    });
})
```



4. Ranking API (return first 10)：



```js
app.get('/api/user/ranking', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, function(err) {
        if (err) throw err;

        User.find({}).sort({ points: -1 }).limit(10).exec(function(err, ranking) {
            if (err) throw err;

            return res.status(200).json({
                // status: 'success',
                data: ranking
            })
        })
    });
})
```



The parameters passed into the front-end page through HttpClient are passed into the interface, this process of implementation in Js is also the process of front-end and back-end connection, for example, in js to call the sorting interface is implemented as follows:



```ts
this.http.get('/api/user/ranking').subscribe((result: any) => {})
```



