#### Agile model:  

As the waterfall model is very unrealistic and requires additional planning and execution, we naturally went for the Agile model.
In our opinion, the waterfall model is only an idealized model used to illustrate the software development process.
In the real world, you can't and do not have to keep the development process so linear - I mean, why the trouble?
The waterfall model only works if the task is simple enough that you can see the end at the beginning - which becomes an agile model with only one iteration cycle!  

In our development process, we keep development iterations (sprints) to three to four days - which is pretty short but very exciting!
Here's how we did this：  
We often had a video meeting on Teams at the beginning and end of a sprint, which I believe was the best experience for every one of our collaboration.
During this meeting, We'll share what we did in our last sprint: what exciting functions we successfully implemented,
what skills and knowledge we acquired and even what interesting things happened in the last few days!
We will then test and check what we have implemented together. During this process, We will discuss what technical difficulties we have encountered,
what needs to be improved and what new ideas have come out of the sprint process. After this, we will finalise the plan for the next few days and assign tasks to each member.
Then a whole new sprint will begin!  
During one sprint, we communicate in detail mainly via WeChat. We discuss specific problems, exchange materials and share learning resources on WeChat.
It's very handy, and I recommend you try it!

#### Team roles:

Rongxiang Lin: Leader. Responsible for the development of front-end web pages and the integration of materials. He pushed us forward!      

Terry Shi: Designer.Responsible for the prototype design and some development of front-end web pages.    

Shenxuan Yu: Developer. He collaborated with others to develop backends and APIs.   

Yingcan Wang: Developer. He was responsible for writing front pages of components in results and ranking parks. Besides, he wrote API with other developers.

Xueyan Hu: Researcher. He was responsible for collecting the photographic material and writing part of the report.

#### Sprints
**timeline:**    
09/02/2021 - 09/03/2021: Forming ideas and background research    
During this time period, we settled on the amazing idea for our group project - to help people know more about waste sorting.
We then did some background research and decided to develop a game to help people understand the rules of waste sorting.
<table>
    <tr>
            <th>Discussion about idea in WeChat</th>
            <th>Discussion about idea in WeChat</th>
            <th>Discussion about idea in Teams</th>
    </tr>
    <tr>
        <td><img src="https://github.com/LIAM-LIN/COMSM1401-DESK12/blob/main/Report/img/wechat-design1.jpg?raw=true" align = "center" width = 200 alt = "wechatdesign1"/></td>
        <td><img src="https://github.com/LIAM-LIN/COMSM1401-DESK12/blob/main/Report/img/wechat-design2.jpg?raw=true" align = "center" width = 200 alt = "wechatdesign2"/></td>
        <td><img src="https://github.com/LIAM-LIN/COMSM1401-DESK12/blob/main/Report/img/teams-design1.png?raw=true" align = "center" width = 500 alt = "teamsdesign1"/></td>
    </tr>
</table>

10/03/2021 - 31/03/2021: Prototyping, collecting materials and learning together     
During this time frame, we completed electronic and paper versions of the prototype drawings and collected the required materials.
At the same time, we shared useful learning resources with each other and helped each other to learn from each other.
<table>
    <tr>
            <th>Discussion about prototyping in WeChat</th>
            <th>Discussion about prototyping in WeChat and Teams</th>
    </tr>
    <tr>
        <td><img src="https://github.com/LIAM-LIN/COMSM1401-DESK12/blob/main/Report/img/wechat-proto1.jpg?raw=true" align = "center" width = 200 alt = "wechatproto1"/></td>
        <td><img src="https://github.com/LIAM-LIN/COMSM1401-DESK12/blob/main/Report/img/teams-proto.png?raw=true" align = "center" width = 500 alt = "teamsproto"/></td>
    </tr>
</table>

01/04/2021 - 16/04/2021: We are immersed in learning!
<table>
    <tr>
            <th>Discussion about learning in WeChat</th>
            <th>Discussion about collecting material in WeChat</th>
    </tr>
    <tr>
        <td><img src="https://github.com/LIAM-LIN/COMSM1401-DESK12/blob/main/Report/img/wechat-learn1.jpg?raw=true" align = "center" width = 200 alt = "wechatlearn1"/></td>
        <td><img src="https://github.com/LIAM-LIN/COMSM1401-DESK12/blob/main/Report/img/wechat-collect1.jpg?raw=true" align = "center" width = 200 alt = "wechatcollect1"/></td>
    </tr>
</table>

















<br>

<br>

<br>

17/04/2021 - 14/05/2021: Start Sprint!!

***User needs and corresponding design implementation :***



- Be able to access web pages by typing the URL into their browser. 

  

- Be able to enter their username and start the game by clicking the start button on the page. 

  

- See a pop-up picture of the waste and the four waste separation bins. 

  

- Clicks on the correct bin, add points, click on the wrong bin, deduct points. 

  

- When users click on the wrong bin, they can see the correct answer and the corresponding rule explanation.

  

- Users can see their own points. 

  

- Sort ten separate pop-ups of waste, then jump to the results page.

  

- Users can click submit to submit their scores. 

  

- Users click on the button and then jump to the leaderboard page.

  

- Website updates user's score with their highest one.





***Front-end Development:***  

A separate knowledge section has been implemented to allow users to learn about waste separation in writing outside of the game. -2021.3.2



Determine the design of the web pages and draw out the data transfer relationships between them. - 2021.3.18



Determine how the internal logic of the game is implemented, proposing a random folder with random numbers to implement random images. -2021.3.23



Started the whole angular project and building different components separately. -2021.4.17



Implemented the RESTful API of create user result and test the communication across client and server. -2021.4.22



Parse the JSON content and implement the data to ranking list structure. -2021.4.28



We propose that our web page needs a home page on which the various components are mounted. - 2021.4.29



***Back-end Development:***

Developed server-side start program app.js,  and managed to connect mongodb. -2021.4.20



Complete the Dockerfile and enable the project to be built and run through docker-compose. -2021.4.20



Design the Mongoose Schema adapted to the front-end data structure and create the model file. -2021.4.21



Developed RESTfulAPI to obtain data from the front end and save it to mongodb through express method to achieve persistence. -2021.4.22



Developed the methods to get ranking list from mongodb and response as JSON content. -2021.4.27



Modify the storage method. Make the best scores automatically saved under the same user name. -2021.5.4



**####**

