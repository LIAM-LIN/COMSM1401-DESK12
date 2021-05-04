### COMSM1401-Desk12

# Project Report : Waste sorting in Bristol

### Our team:
#### <img src="https://avatars.githubusercontent.com/u/72544310?s=64&v=4"  alt="lin's photo" height="100"> Rongxiang Lin</br>
​								Working on design, front-end and back-end.
#### <img src="https://avatars.githubusercontent.com/u/78803621?s=64&v=4"  alt="wang's photo" height="100"> Yingcan Wang</br>
​								Working on design, front-end and back-end.
#### <img src="https://avatars.githubusercontent.com/u/78803465?s=64&v=4" alt="shi's photo" height="100">Terry Shi </br>
​								Working on design, front-end and back-end.
#### <img src="https://avatars.githubusercontent.com/u/56572092?s=64&v=4" alt="yu's photo" height="100"> Matt Yu </br>
​								Working on design, front-end and back-end.
#### <img src="https://avatars.githubusercontent.com/u/75314804?s=64&v=4" alt="hu's photo" height="100"> Xueyan Hu</br>
​								Working on design and materials.

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
# Sprints and Project Management
# Evaluation
# Conclusion
