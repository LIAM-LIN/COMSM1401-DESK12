### COMSM1401-Desk12

# Project Report : Waste sorting in Bristol

### Outline
[Introduction](#introduction)  
[Background and Motivation](#background-and-motivation)  
[System Implementation](#system-implementation)  
[UX Design](#ux-design)  
[Sprints and Project Management](#sprints-and-project-management)  
[Evaluation](#evaluation)  
[Conclusion](#conclusion)  

### Our team:
<table style="width:100%">
    <tr>
        <td style="text-align: center;"><img src="https://avatars.githubusercontent.com/u/72544310?s=64&v=4" alt="lin's photo" width="100"></td>
        <td style="text-align: center;"><img src="https://avatars.githubusercontent.com/u/78803621?s=64&v=4" alt="wang's photo" width="100"></td>
        <td style="text-align: center;"><img src="https://avatars.githubusercontent.com/u/78803465?s=64&v=4" alt="shi's photo" width="100"></td>
        <td style="text-align: center;"><img src="https://avatars.githubusercontent.com/u/56572092?s=64&v=4" alt="yu's photo" width="100"></td>
        <td style="text-align: center;"><img src="https://avatars.githubusercontent.com/u/75314804?s=64&v=4" alt="hu's photo" width="100"></td>
    </tr>
    <tr>
        <td colspan="1" style="text-align: center;">Rongxiang Lin <br>Design, front-end and back-end.</td>
        <td colspan="1" style="text-align: center;">Yingcan Wang <br>Design, front-end and back-end</td>
        <td colspan="1" style="text-align: center;">Terry Shi <br>Design, front-end and back-end</td>
        <td colspan="1" style="text-align: center;">Matt Yu <br>Design, front-end and back-end</td>
        <td colspan="1" style="text-align: center;">Xueyan Hu <br>Design and materials</td>
    </tr>
</table>


# Introduction
Recycling trash is a great way to protect our environment and stimulate our economy, 
and sorting our waste is extremely beneficial for recycling.
However, it takes time and effort to learn the rules of waste sorting where you live, and the rules often vary from city to city.
This learning process can also be tedious, as the positive impact of waste separation does not feed through to people immediately.  

So, our project is dedicated to helping people living in Bristol learn the local rules of waste sorting in an easy and fun way!
We want to build a fun, user-friendly but strictly practical game to help us achieve this goal. 

In this game, there are four different coloured bins for recycling at the bottom of the game screen, corresponding to bristol's waste sorting rules.
In the centre of the screen, pictures of various types of recyclable waste will pop up, and the user will then need to select a bin depending on the type of waste. 
If correct, they will be awarded points. At the end of the game, a leaderboard will appear.
As this game is only available to residents living in bristol, you may see familiar names on this leaderboard! If you are expert enough at sorting rubbish, others will also see your name on this leaderboard.
How cool would that be!

This project has two main high level goals. One is that the game should be fun and attractive enough, so it can attract residents to play and make the learning process easier. 
The other is that the game should be close enough to real life and existing rules so that it can actually teach people the rules of waste sorting.
Based on these two objectives, the evaluation checklist would then be:  

Fun and attractive:  
1.Nice and clean user interface with uniformly styled images of rubbish pictures.  
2.Sufficient and interesting positive feedback for users when they are right.  
3.A reliable and long-lasting leaderboard.  

Realistic and practical:  
1.Strict and accurate waste separation rules from official sources.  
2.Trash materials that are as close as possible to the normal life of the user.  
3.Accurate, clear and easy-to-read explanations of waste sorting rules when users make mistakes. 

[Demo: click here] (url)

# Background and Motivation
Nowadays, nearly 90% of what we throw away could potentially be recovered through reuse, recycling or composting.[1]
What will get us as close to this percentage as possible is waste sorting.
According to the [Kerbside recycling guide](https://bristolwastecompany.co.uk/wp-content/uploads//2020/07/Pin-up-and-keep-recycling-guide-Bristol-Waste.pdf)
from the bristol waste company, in Bristol there are 40% of the waste that is completely discarded is recyclable,
and the energy required to recycle cans will be reduced by 95% - if they all get sorted!
Generally, sorting our recycling helps people collect it quicker, getting us off the roads and out of the way sooner, 
saving you and the city time and money.[2] 

I'm sure no one will disagree with you when you talk to people about the benefits of waste sorting，but there is still a huge gap between the will and the actual action! In fact,
one of the reasons why residents are reluctant to sort waste is that they have little knowledge about waste sorting and do not know how to sort waste correctly.[3]
This means that although people want to sort their waste, they don't know how to do it!
Research shows that waste sorting knowledge was positively and significantly associated with attitudes and perceived behavioral control.
Meanwhile, waste sorting knowledge was also positively and significantly associated with residents’ waste sorting intention, too.[4]
Based on this, we can see that if the knowledge of waste sorting is effectively communicated to the residents, the probability of waste sorting will be greatly increased.
Also, It is worth noting that some residents engage in waste sorting behaviour not because of their planned intention, but they simply come across good, accessible facilities and government stimulus.[4]
This shows that if people are given sufficient and interesting guidance, they will sort their waste, even if they don't have the will to do so at first.  

So, in which way can people nowadays acquire the knowledge of waste sorting that applies to where they live?
The most common and accurate way to find out is to go to the relevant local website. 
We found two websites where you can get accurate information about waste sorting in Bristol: [the Bristol's official government website](https://www.bristol.gov.uk/bins-recycling/what-goes-in-your-bins-and-boxes)
and [the Bristol Waste Company's website](https://bristolwastecompany.co.uk/household/get-it-sorted/). 
In these two websites you can get accurate information on waste sorting in Bristol, but the problem is you need to take the time and effort to read and study them.
In the Bristol's official government website, there are only extensive blocks of text that need to be read carefully.
<div align=center><img width="700" src="https://github.com/LIAM-LIN/COMSM1401-DESK12/blob/main/report/gov.png?raw=true" alt = "gov"/></div> <br/>

In the Bristol Waste Company's website, things are better. There are easy-to-read, poster-style rules for sorting waste. But the problem is: you still have to read!
<div align=center><img width="300" src="https://github.com/LIAM-LIN/COMSM1401-DESK12/blob/main/report/rules.png?raw=true" alt = "rules"/></div> <br/>

Before our time, of course, there are [games](https://recollect.net/waste-sorting-game/) for sorting waste. But as you can see, these games were very crudely made and very old.
The biggest problem is that the rules for sorting waste in these games are inaccurate and do not apply to Bristol, so even if you finish the game, you will not get any useful knowledge about sorting waste!
<div align=center><img width="700" src="https://github.com/LIAM-LIN/COMSM1401-DESK12/blob/main/report/game.png?raw=true" alt = "game"/></div> <br/>

The problem we are trying to solve then is：the residents of Bristol lack a fun and reliable way to make the process of learning about waste separation easy.
We tried to solve it by developing a game with a good user experience by strictly following Bristol's waste sorting rules.
By doing so, we can engage more residents in waste sorting and make Bristol a better place!  

References:  
[1]. https://www.ecocycle.org/files/pdfs/why_recycle_%20brochure.pdf  
[2]. https://bristolwastecompany.co.uk/wp-content/uploads//2020/07/Pin-up-and-keep-recycling-guide-Bristol-Waste.pdf  
[3]. Wang et al., 2020, From intention to behavior: Comprehending residents’ waste sorting intention and behavior formation process  
[4]. Wang et al., 2020, From intention to behavior: Comprehending residents’ waste sorting intention and behavior formation process  
[5]. Zhang et al., 2019, From intention to action: How do personal attitudes, facilities accessibility, and government stimulus matter for household waste sorting?




# System Implementation
# UX Design
We mainly divide the UX design into four parts.Product inspiration,source of demand,requirement analysis and prototype design.
#### Product inspiration:
Our initial project has several options, including donation steps, tram recommendation and garbage sorting. 
Donation steps are mainly recorded by users walking through users, and then uploaded to our game for donation, so as to obtain donation points, promote users' Healthy Travel and reduce obesity. 
However, it is difficult to make statistics, And the PC side can not count and give up. Tram recommendation is mainly to recommend new trams to users, to simulate the fuel consumption and actual driving style of trams and fuel vehicles, so as to reduce the use of fuel vehicles. 
However, due to the small number of trams, the game is less interesting and abandoned. Finally, we chose garbage classification to teach users how to classify Bristol garbage.
#### Source of demand:
Our product design inspiration comes from the recent garbage classification publicity in China. Since the implementation of garbage classification in Shanghai, many residents have a headache because they don't know how to classify and can't distinguish the types of garbage.
Therefore, we investigated the garbage classification in Bristol and found that many details of the garbage classification in Bristol are very troublesome and difficult to distinguish.
Therefore, we hope to provide Bristol residents with a simple garbage classification game to help them better classify their garbage.
#### Requirement analysis:
We interviewed several different types of users, including students and residents in Bristol. They didn't know about the classification methods of some residual drinks and waste toothbrushes in daily life, because they all gave wrong answers. 
We found that users didn't know much about the basic garbage classification knowledge in daily life, Therefore, we hope that through the game of garbage and garbage can matching, to help users improve this knowledge, and with the corresponding introduction, to popularize the knowledge of garbage classification.
#### Prototype design:
In the prototype design, we maintain the principle of simplicity and consistency, giving up the complex login, but through the simple input of user name to distinguish users, and can directly answer questions to participate in the game, correct score, wrong score deduction.
#### Paper prototype
<div align=center><img width="300" src="https://github.com/LIAM-LIN/COMSM1401-DESK12/blob/main/prototype%20drawings/Paper%20prototype.jpeg?raw=true" alt = "paperprototype"/></div> <br/>
Prototype:
https://org.modao.cc/app/0495ad4723ecd596f4ea4108493972ba19de9756?simulator_type=device&sticky

# Sprints and Project Management

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
----:   

----:   

----：   

----:   

Xueyan Hu: Researcher. He was responsible for collecting the photographic material and writing part of the report.


# Evaluation
# Conclusion
#### Working practice
The biggest flaw of our group work practice was that we took too long to prepare ourselves for the project, we took too long to learn what we needed to know for the project, 
so we started the actual development late and ended up with not enough time left. In fact none of us had any prior experience with web development and we needed to learn everything from scratch.   

The lectures this course gave us were all about management, communication, design and working models.
Basically, it tried to teach us how to code effectively with others and how to build a wonderful thing with our code skill.   
The problem is -- we do not know how to code yet! And that's pretty much why we came here！

The good thing was that after we prepared ourselves, everything become pretty smooth. Our team members are all very motivated and responsible, which saved a lot of trouble in communication and management.
Even though some of the team members are not so good at writing code, they give their best to the team in other ways.   
After a lot of intense hard work, we finally made it!
#### Success of the project
Our project has achieved almost all of its objectives and because we're learning web development from the scratch, we're considering this a huge success!   
We started our learning from html, then CSS, than the whole MEAN stack. We have to say the most valuable treasures we have gained from this group project 
are these code skills and the camaraderie we have with each other.   
Here is a checklist:
Fun and attractive:  
1.Nice and clean user interface with uniformly styled images of rubbish pictures.  --TICK     
2.Sufficient and interesting positive feedback for users when they are right.  --TICK      
3.A reliable and long-lasting leaderboard.   --TICK      

Realistic and practical:     
1.Strict and accurate waste separation rules from official sources.  --TICK    
2.Trash materials that are as close as possible to the normal life of the user.  --TICK    
3.Accurate, clear and easy-to-read explanations of waste sorting rules when users make mistakes.  --NOT TICK

Because we had so many pieces of trash in the game, we ended up not having enough time to write feedback for each piece of trash. This can be considered as future work.

#### Remote working experience
For all of us, it has been an unusual year due to the impact of the COVID-19. 
This was the very first time that all of us in the group had a purely online learning and collaboration session.
One of our group members is in Bristol, two are in Beijing, one is in Shanghai and one is in Anhui, China.
We have not met at all between the group members except at TEAMS, 
but we do not think that not being able to meet has affected our collaboration or what we have learned from the course.   

In fact, based on the specificity of computer science, all the work and study, not almost, can be done online.
And the advanced development of instant communication tools and online collaboration tools has given us access to facilities that were unimaginable in the past.
By making full use of these tools, we have minimised the negative impact of COVID-19.
In our opinion, the greatest impact of not being able to see each other is reflected in the fellowship of our teammates. 
Although we went to school together and did a really great job together, we didn't get the chance to get to know each other better.
Fortunately, however, the COVID-19 has disappeared from sight in China. After we finish our exams, we will meet offline to promote our fellowship!

#### Social and Ethical implication
Our project was designed to help people better understand waste sorting so that it can be better implemented in Bristol, which is perfectly in line with the requirement of deontic ethics.
When it comes to consequentialist ethics, we still believe that the impact of our projects will be positive. 
Although we've developed a nice and fun game, we don't think anyone will become addicted to it - I mean, they'll just learn more about waste sorting!   

Another issue we need to talk about is the information entered by the user. At the start of the game, you will be asked to enter your username. 
Although our game does not make any requirements for this input, as we only use it as a key to record the user's achievements, 
it is possible that the information entered by the user will be displayed publicly. If the user enters private information, this information may be compromised,
but this possibility is very small, because we just ask you to enter something as you please!   
Of course, it is also possible for users to enter unfriendly or harmful information, but at present our project is not able to handle this automatically.

#### Future work
**Find nearby user and add friend:**   
In the future, provided that users consent and information is properly protected,
we hope that our application will be able to record the geographic information of utility users and allow them to see and simply interact with nearby users.    
We also want users to be able to add people they know or don't know as friends in the game and see each other's score. This will make the game more interesting for them.
As the game is aimed at Bristol residents, we thought it would be great if we could get users to socialise through the game. 
This will increase their interest in learning about waste sorting and bring more added value to the project.

**Online match:**    
Based on the last feature we wanted to implement, we want our game to enable users to match up with other players who are matching and then start playing at the same time to compete!
At the end of the game they can choose whether to add each other as friends or not. This will provide a more social aspect to the game and make it more interesting.

**Maintain:**   
We want to keep our game as practical as possible and although the rules for sorting waste in the game are now up to date, the rules are subject to change. We need to maintain this.

**Privacy warning and input screening:**   
At the beginning of the game when the user is asked to enter a username, we should explicitly warn the user that this input may be displayed on the leaderboard to prevent them from entering unwise information.   
We also need to improve our project so that it can filter harmful and unfriendly information, or at least add a reporting mechanism.
