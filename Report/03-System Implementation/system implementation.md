## Table of Contents

1. [System design](#sd)
2. [Back End](#be) 
3. [Middle Tier](#mt)
4. [Front End](#fe)
5. [Deployment details](#dd)

# <a name ="sd">System design</a>

Our team is mainly divided into three pieces, design, front-end and back-end, so the unification of views between several of our teams is quite important, in the early stages of development by the design team to confirm the overall style of the site, functionality. Then we discussed the development tools together. We chose the MEAN stack architecture for our project, which includes MongoDB, Express, Angular and NodeJS.

As it is a component-based development, we have a very consistent control of how each component relates to the back-end. We sketched out the process early on in the development process as shown below.

<div align=center><img width="700" src="https://github.com/LIAM-LIN/COMSM1401-DESK12/blob/main/Report/img/stack.png?raw=true" alt = "stack"/></div> <br/>

# <a name ="bc">Back End</a>

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



<div align=center><img width="700" src="https://github.com/LIAM-LIN/COMSM1401-DESK12/blob/main/Report/img/relationship.png?raw=true" alt = "game"/></div> <br/>



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



# <a name ="mt">Middle Tier</a>

### General

In the middle layer that handles the interaction between the front-end page and the database, we choose to use Express and Node.js to build our own RESTful API

Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It facilitates the rapid development of Node based Web applications.

REST is a software architectural style which uses a subset of HTTP.It is commonly used to create interactive applications that use Web services. A Web service that follows these guidelines is called RESTful. Such a Web service must provide its Web resources in a textual representation and allow them to be read and modified with a stateless protocol and a predefined set of operations. This approach allows interoperability between the computer systems on the Internet that provide these services. REST is an alternative to, for example, SOAP as way to access a Web service.

API is the acronym for "Application Programming Interface". It is a software that allows two applications to communicate with each other over the internet and through various devices. Every time you access an app like Facebook or check the weather on your smartphone, an API is used.

Web service APIs that adhere to the REST architectural constraints are called RESTful APIs.[14] HTTP-based RESTful APIs are defined with the following aspects:

- a base URI, such as http://api.example.com/;
- standard HTTP methods (e.g., GET, POST, PUT, and DELETE);
- a media type that defines state transition data elements (e.g., Atom, microformats). The current representation tells the client how to compose requests for transitions to all the next available application states. This could be as simple as a URI or as complex as a Java applet.

### Design goal

The design goal of our RESTfulAPI is to pass user data structures (Schema set by Mongoose) between server and client:

```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    points: { type: Number, required: true },
    rightNum: { type: Number, required: true },
    wrongNum: { type: Number, required: true }
}, { collection: 'user' });

const User = mongoose.model('User', userSchema);

module.exports = User;
```

Two functions are mainly required:

- Create a user and write data to mongodb

- Read user data, sort it in descending order, and output the top ten data to form a ranking list

	

### Function realization

Thanks to express's rich interfaces and functions, simple implementations can be found in both of our methods. After constructing the api routes, the front end can call the functions accordingly, and the connection with mongodb depends on the mongoose.connect() function.

#### User Create

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
            return
        })
    });
})
```



#### Get Ranking List

This is a tricky part. The express method can directly implement our rankings by setting parameters. The difficulty lies in processing the returned parameters. We choose to use the json format and process the JSON method in the front-end app.component.ts

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

### Use of API

The parts we use the RESTful API are on the result and ranking pages.

As mentioned earlier, in the getRanking method, we choose to transmit JSON data and parse it in the front-end method, which can make the front-end and back-end separation and the development process more efficient.

The parsing process is as follows

```js
this.http.get('/api/user/ranking').subscribe((result: any) => {
    
      this.arr = result;     
    
      for (var _i = 0; _i < result.data.length; _i++) {
        this.usernameList.push(JSON.stringify(result.data[_i]['username']).substring(1,this.checkStringLength(JSON.stringify(result.data[_i]['username']))-1));
        this.rightNumList.push(JSON.stringify(result.data[_i]['rightNum']));
        this.wrongNumList.push(JSON.stringify(result.data[_i]['wrongNum']));   
        this.pointsList.push(JSON.stringify(result.data[_i]['points']));  
      }

      for (_i = result.data.length; _i < 10; _i++) {
        this.usernameList.push("");
        this.rightNumList.push("");
        this.wrongNumList.push("");   
        this.pointsList.push("");  
      }

    });
```

# <a name ="fe">Front End</a>

Our front-end design reports can be broken down into the following sections:

1. [Front-end Web Design](#fewd)

2. [Navigation Bar](#nb)

3. [Home Page](#hp)

4. [Game Page](#gp)

5. [Widgets](#w)

	- [Result component](#rc)

	- [Leaderboard component](#lc)

	- [Information component](#ic)
	- [Contact component](#cc)

### <a name = "fewd">Front-end web design</a>

For the design of the front-end pages of the website, our group used angular framework and bootstrap framework to assist in the development and speed up the development.
During the preliminary meetings and discussions, we determined the presentation of the front-end pages and the main files were placed under this path. One of the more important ones is our gameplay interface.
It is not too difficult to implement page layouts using angular, which itself has a concept of componentization, so that different pages can be written as different components. It is also possible to design content that appears repeatedly on several pages into one component, making it easier to redevelop and improving the simplicity of the code. The more complex part of the overall page design logic is our game interface, and there are a few points to note here. This will be mentioned in more detail below.

### <a name = "nb">Navigation bar</a>

As it is easier to jump around on our homepage, we decided to make the navigation bar a separate sub-component to be assembled on each page. The functionality and style is very simple, we just need to use the routerlink tag to jump to the specified component page at a later stage. The code implementation is shown below.

```html
<div class="navbar">
  <a  class = "logo" routerLink="/home">Game Center</a>
  <ul class ="nav">
    <li><a  routerLink="/home">Home</a></li>
    <li><a  routerLink="/about">About</a></li>
    <li><a  routerLink="/information">Information</a></li>
    <li><a  routerLink="/leaderboard">Leaderboard</a></li>
    <li><a  routerLink="/contact">Contact</a></li>
  </ul>
</div>
```

We want to get a horizontal navigation bar, so we need to add some properties in the later css styles to change its position. The specific CSS codes are as follows:

```css
.nav{
  display:flex;
  justify-content: right;
  list-style: none;
  margin-right:15%;
}
```

### <a name = "hp">Home Page</a>

The homepage is the most visible part of the website, so we have designed the homepage to be simple and atmospheric. The homepage and the landing page are bound together and we have mounted a navigation bar component and a login component on the homepage, which will change when we click on the corresponding section of the navigation bar.

We used the bootstrap framework to change the style of the get start button in the login component that was mounted on the initial component to make our development more fluid. We also wanted to have a uniform background color for our website when the homepage was loaded, so we changed the background colour of the page in the ngOnInit method in the ts file, as follows:

```ts
ngOnInit(){
 document.body.style.background = '#D4D7DE';
}
```

It is also worth mentioning our login page, which needs to record the user name entered by the user and pass it as a parameter to our game page, so that the leaderboard information can be displayed. This will be done by passing a parameter through the route. We have also fixed a bug in this area where when the user enters a value that is empty, a pop-up will tell the user to enter a username or they will not be able to play our game.

```ts
doLogin() {
  if (this.username !== ''){
    this.router.navigate(['/game'],
      {queryParams: {username: this.username}});
  }
  else{
    alert('you should enter a username');
  }
}
```

### <a name = "gp">Game Page</a>

For our project, the most important thing is the game interface, we need to design a complete set of game logic and solve possible problems in the game, in the preliminary analysis, we got several difficulties in the interface design.

- The username for the game screen needs to be read from the login screen.
- The score on the game screen needs to be changed automatically depending on whether the user has answered the question correctly or not.
- The logic to implement the game judgement needs to be written to this page.
- The image needs to be automatically switched to show the user 10 random questions.

I won't go into too much detail about the design of the page presentation. Overall we have used a table design to hold some elements of the page in place and the overall effect looks great. The next section will be devoted to the analysis of our pages in relation to the issues raised above.

In response to the first question, we took the parameters in the ngOnInit method on the game page and saved them in the variable Username on the game page after we had used the route to pass the parameters from the login page. Also bind the display backend username variable in the front-end page.

```ts
ngOnInit(): void {
  this.changePic();
  this.route.queryParams.subscribe( val => {
    this.User.username = val.username;
  });
}
```

For the second question we used the same approach, setting up a User class in the background with parameters such as points, username. After answering the question we needed to package the User class and send it to the result page to read the parameters and save the results in the back-end database. We have also written the logic of addition and subtraction of marks into the logic of the user's answer to the correct and incorrect questions. This ties in with our third challenge, where we wrote a decision function to determine if the user answered the question correctly. We sorted our material in advance, naming the folders 1, 2, 3 and 4 to represent the material to be thrown in the different bins, and then we just needed to get the number of the folder that the image came out of to determine if the user had answered correctly.

Also in this function, we need to control the number of questions answered by the user, if more than 10 questions are answered we need to jump to the results screen. If the user gets the question right we need to indicate that the user has scored 100 points and if the answer is wrong we need to indicate that the user has lost 100 points. So the overall function is as follows:

```ts
doCheck(id: number){
  if (this.itemPic === 'assets/img/get_point.png' || this.itemPic === 'assets/img/lose_point.png'){
    return;
  }
  if (this.count <= 10){
    if (this.type === id){
      this.itemPic = 'assets/img/get_point.png';
      this.User.points = this.User.points + 100;
      this.instruction = 'you get 100 points';
      this.rightNum++;
    }
    else{
      this.itemPic = 'assets/img/lose_point.png';
      this.User.points = this.User.points - 100;
      this.instruction = 'you lose 100 points';
      this.wrongNum++;
    }
  }
  else{
    this.router.navigate(['/result'],
      {queryParams: {username: this.User.username, point: this.User.points, rightNum: this.rightNum, wrongNum: this.wrongNum}});
  }
}
```

Thanks to our discriminatory logic, it is much easier to change the images at random. We simply take a random number from 1 to 4 and store the paths of the images in the folder in four arrays, we pick an array based on the random number and take a random image out of it to display. Some of the code is shown below:

```ts
changePic(){
  this.type = this.getRandomNumInt(1, 4);
  if (this.type === 1){
     this.number = this.getRandomNumInt(0, blackBin.length);
     this.itemPic = blackBin[this.number].path;
     this.instruction = blackBin[this.number].name;
  }
```

### <a name = "w">Widgets</a>

#### <a name = "rc">Result component</a>

In the design of the result, we designed a class in the backend to receive the parameters passed from the game, which has properties such as wrong, right, points, username. We have also designed a hyperlink to jump to the ranking screen so that users can easily check their ranking. A SUBMIT button allows users to submit their results to the backend so that they can be seen in the ranking.

```html
<div class="rankinglist">
  <span class="des">click <a href="javascript:" routerLink="/ranking" class="ranking">here </a> to see leaderboard--></span>
</div>
```

#### <a name = "lc">Leaderboard component</a>

We have a leaderboard interface that allows us to display the ranking values of the players, we have used a table format to design this interface, adding a nice CSS style.

#### <a name = "ic">Information component</a>

This website, in addition to the games, has been designed with information pages that allow visitors to the site to view tips on how to sort Bristol's waste.
This page is also made up of several components that are mounted to jump around. We designed the original page with four waste bins and the user can click on the corresponding bin to learn about the corresponding waste sorting. We have used plain text to present this knowledge. Click on the corresponding image to be redirected to the corresponding component mount:

```html
<table>
  <tr>
    <td><img src="../../../assets/img/black_.png" class="pic" alt="black_png" routerLink='/black'></td>
    <td><img src="../../../assets/img/brown_.png" class="pic" alt="brown_png" routerLink='/brown'></td>
    <td><img src="../../../assets/img/blue_.png" class="pic" alt="blue_png" routerLink='/blue'></td>
    <td><img src="../../../assets/img/green_.png" class="pic" alt="green_png" routerLink='/green'></td>
  </tr>
</table>
```

#### <a name = "cc">Contact component</a>

We have also designed a contact page so that if you have any suggestions to make, you can find us through the contact page. The main thing here is to design good looking input boxes to give the user a visually premium feel.

# <a name ="dd">Deployment details</a>

In this project we are using docker to deploy our project. the name docker is the result of much deliberation and is itself very metaphorical: it borrows from a system that is well established in the real world - the Global Logistics System - to map the role of docker in the software world. The name is a strong metaphor for the role that docker plays in the software world. A very important invention in the GLS is the container. 

Docker automates the repetitive parts of installation, configuration, etc. during deployment. All that is needed is to build a usable docker image (with the container installed) during the first deployment, and then in future use, with just a few lines of command, you can directly pull the image, create a container based on it and run the service. All that is needed is a server with docker installed, a Dockerfile file (packing list), and a relatively smooth network, so it's really a one-time build and deploy everywhere.

In this project, we built two containers, one for MongoDB and the other for angular.