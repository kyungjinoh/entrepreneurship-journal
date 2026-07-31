---
title: "SchoolClicker: Turning Clicks into Environmental Impact"
titleLead: "SchoolClicker"
date: 2025-01-01
summary: "School vs school clicker game where students who clicks more win donation to environmental organization in their school's name"
status: "In Progress"
featured: true
additional: false
order: 2
yearLabel: "2025-Present"
image: "/images/image75.png"
imageAlt: "School Clicker"
coverType: "image"
tags: ["School","Clicker"]
---

[Schoolclicker.com](http://schoolclicker.com) is a school vs. school competitive clicker game where students click to help their high school win battles against other schools, turning those simple clicks into fundraising for environmental organizations.

Spoil alert: I spent a lot of time in security because there was a hacker trying to take down our website for FUN.

## How did I start this project?

I am passionate about giving back the love I received back to the world. The first way I thought was building a school in Africa so that kids who can't get proper education can get education for free. One way to do that was my partnership with BuildOn, nonprofit organization that builds school in Africa. After filling out partnership form, this email arrived from Erin, the founder of BuildOn:

![](/images/image60.png)

Afterward, I had a 30 minute meeting with Erin, where she said I have to fundraise $50k+ on my own to build a school in Africa. To raise $50k+, I started the SchoolClicker project as a fundraising project.

## Building the First Version

My plan was simple. I make a clicker game where multiple schools compete and I attach a fundraising link at the bottom of the page so students can donate.

I started building the Vite website by using TypeScript and CSS. The website was relatively simple and I could easily build it within days. The process is simple. First, I design the figma design.

![](/images/image57.png)

![](/images/image101.png)

![](/images/image96.png)

The next thing I did is to write the code. Writing code part took me long time than I thought. I won't go into details, but it was repetition of trial and error. The hardest part was optimizing screen size to every single devices, from phone to laptop. Because the design was so packed, optimization process took a lot of time to optimize for all the device. At the end of the day, I successfully wrote the code. Even though I won't mention details since all the details are small yet annoying, it took me 2 months in total to complete this website.

![](/images/image98.png)

![](/images/image123.png)

![](/images/image87.png)

## Building a Team

The next thing to do is to find a people to work on this together. I recruited Woojin, my school friend, and Wyatt, friend I met in summer program, to work together on this. But it wasn't enough. I had to make this viral in the school around the world to make this work. So, I decided to make this LinkedIn post.

![](/images/image56.png)

This immediately took off and got 24840 views. As a result, I could pick the best 50 people to work together on this.

## Marketing Before Launch

While working on this, I remember meeting Hyunjun, an app founder who gained 6M+ users. He taught me that he used his own unique Instagram marketing strategy. Basically, he make school Instagram page for each school, set the account private, and interacts with the students there: follows the student's post and like their story. Then, student will follow back. However, they don't accept the follow request until the launch day. All at once at launch day, they accept all the follow request. Then, boom. Students get notified all at once, visit the page, and go through the link attached in the bio. I decided to use the same strategy and make 100+ pages like this.

![](/images/image82.png)

Then, I picked school ambassadors in each school, gave them instagram account, and marketed the app that way.

(by the way, I tried the same thing before to do UCLA vs USC schoolclicker. The reason why I failed was because university was sooo large that it is hard for this to go viral like what Hyunjun did. I quickly changed our target user to highschoolers)

One problem was that I couldn't manage all 100 school ambassador, so they were not consistent in marketing. What I did was to divide school by region and appoint one lead of ambassador per region. That way, I could manage all the school ambassadors by just talking to lead ambassadors of each region.

## Launch Day

It was the beginning of October that I launched. In one moment, I asked all of school ambassadors to accept the follow request. Users pour rushed into our web page.

![](/images/image99.png)

(user count from my google analytics)

We ended up getting 1k+ new users on the first day of our launch! It was big success. Yet, virality dropped down a lot by the day 2. It was a big problem. One solution I made was to form a community. I made this discord server so that users can interact and 100+ of our users joined.

![](/images/image24.png)

One of the great news I heard was that in Payton Highschool, 40% of students are clicking this for environmental impact. It was insane!! Starting from there, it quickly spreaded to other nearhby Chicago high schools. Then, big problem erupted: hackers.

## When Things Started Breaking

The thing is that I didn't intentionally put authentication for my website so that users can freely play. Because of that, hackers decided to manipulate the number of clicks by hacking to my firebase database and tweak the number of clicks.

Here was the quick reality: I couldn't solve this problem completely unless I put authentication. After few research, I found that popcat.click used an hourly click limit per country. I did the same thing so that if the number goes up too drastically over certain point, the it stops increasing more, showing this error:

![](/images/image15.png)

This way, I safely protected attacks from hackers. This is one of the problems and there were much more attacks by hackers. I spent most of my time defending attack from hackers. It was annoying problem, but I learned about cybersecurity, so GREAT JOB HACKERS!!!

## Changing the Mission

Also, I previously decided to open up donation page. But I heard from a lot of user "no high school students will donate significant amount of their money". It was true. Many highschoolers hesitates to buy even $6 drink from the coffee shop. I thought it was not a good decision of fundraising $50k from them. I changed my goal from fundraising to raising enivonrmental awareness. I changed the goal from raising $50k to donating $250 of my own pocketmoney I gathered over years in the name of winning school. Even though $50k was an attractive goal, I realized that chasing a bigger number meant losing sight of the real purpose: creating environmental impact. By setting a smaller goal that I could actually fulfill, I could keep my promise to the community instead of pursuing an unrealistic target.

## Growing Through Social Media

Getting back to marketing side, I decided to collaborated with my friend Ben, who was also Instagram and Tiktok Influencer. I asked him if he could post video about our game and he said yes. First two videos got few thousand views, which wasn't too bad. But the third video really took off and I got 100k+ views! Afterward, the user count skyrocketed.

I decided to produce social media post on my own. I used multiple accounts but this is one of it.

![](/images/image91.jpg)

## Results

I continuously marketed this over the time through social media and viral marketing strategy and this is the user count as of July 25th. (I changed the Google Analytics tag 2 times throughout the years so there are multiple pages. But if I combine them, it totals up to 40k+ users!!!!)

![](/images/image37.png)

![](/images/image68.png)

![](/images/image108.png)

I also got a lot of clicks and #1 Lane Tech High School accumulated 76,855,489 number of clicks.

![](/images/image62.png)

As I promised before with users, I decided to donate $250 to environmental organization of my money I gathered for years.

## Reflection

Reflecting back, this might look like the most stupid, brain-rot game human've ever invented. However, I decided to turn this into environmental awareness!!!

It was one of the most meaningful activities I had in my life.

Check out more at [Schoolclicker.com](http://schoolclicker.com)
