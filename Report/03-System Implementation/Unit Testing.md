## Unit Testing



In unit testing blocks, we prepared to test all of components in our project. Our components consists of components listed below: 

- about

- bar

- black-box

- blue-box

- brown-box

- green-box

- home-bar 

- card

- contact

- game

- home

- information 

- login

- point

- ranking

- result

  

Each component has a big role in the project, but many of them are very similar to each other. Our initial idea was to test each component separately, but some similar components with very little back-end logic were combined with other components, such as black-box, and we tested the entire project flow in a purposeful way to determine the performance of the core components in the project and reduce bugs.



### Critical Testing

We have done a lot of testing, including the testing of the ranking and result components is very effective, there are some unexpected errors in the test and we have optimized the components and interfaces to avoid these bugs, the following are some of the records：

#### Test 1

We want to check that the leaderboard can still be updated after the user has finished the game for the same username entered, to avoid the situation where there is no way to overwrite the previous information and the occurrence of duplicate data entry.

- There is one record in the database for the user "Desk 12"：{ "_id" : ObjectId("609e134314b9800d507f067e"), "username" : "Desk 12", "points" : -500, "rightNum" : 2, "wrongNum" : 7, "__v" : 0 }
- This user is in the ranking
- Play the game again with this username and make the score different from the last time



In the initial test, it was found that the leaderboard data could not be updated, and it was even found that the data was not inserted into the database. 



![ranking](D:\wangyingcan\Desktop\ranking.jpg)

![db](D:\wangyingcan\Desktop\db.png)



In the code calling the interface method, we found that the logic to determine the duplicate was missing. After making code changes, the game records were successfully updated to the database.



![ranking1](D:\wangyingcan\Desktop\ranking1.png)

![db1](D:\wangyingcan\Desktop\db1.png)



The previous code：



```ts
create() {
    if(this.People.username) {
          this.userService.create(this.People).subscribe(result => {
            console.log('result is ', result);
          });
    });
```



Changed code：



```ts
create() {
    this.http.get('/api/user/query').subscribe((result: any) => {

      for (var _i = 0; _i < result.data.length; _i++) {

        if(JSON.stringify(result.data[_i]['username'])
           .substring(1,this.checkStringLength(
            JSON.stringify(result.data[_i]['username']))-1) === this.People.username){
          this.userService.remove(this.People).subscribe(result => {
            console.log('result is ', result);
          })
        };
      }
        if(this.People.username) {
          this.userService.create(this.People).subscribe(result => {
            console.log('result is ', result);
          });
        } 
    });
```





#### Test 2

We want to detect that for usernames defined in different languages, users can still continue playing the game and get their ranking.

- Set the username to Chinese:  过!
- Play with this username

The test was found to pass successfully.



