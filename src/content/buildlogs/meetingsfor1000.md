---
title: "MeetingsFor1000: Helping founders land investor meetings"
titleLead: "MeetingsFor1000"
date: 2025-01-01
summary: "Platform that connected founders with investor meeting links. I shut it down after realizing growth was creating costs for investors, and that lesson defines who I am."
status: "Shipped"
featured: false
additional: false
order: 8
yearLabel: "2025"
image: "/images/mf1000-image10.png"
imageAlt: "MeetingsFor1000"
coverType: "image"
tags: ["MeetingsFor1000"]
---

## Identifying the Fundraising Bottleneck

I remember when I first started a startup. Back then, I thought getting investor funding was the most important factor in a startup's success (which I later realized wasn't true). I realized that many founders struggle to get investor funding and even a single meeting. A great startup should never be hindered by limited funding. So, I decided to build a platform that helps founders land investor calls. This experience unexpectedly taught me one of the most valuable lessons: technology that doesn't positively impact humanity isn't technology.

I spotted the problem. The process now was to ask how to solve that problem. It is undeniable that founders are having a hard time booking meetings with investors. So, I thought, what if I provide a direct meeting link to founders? That's how this project started.

## Discovering a Scalable Solution

My idea was simple: I would somehow get the Calendly links of investors and make an online directory of investors' Calendly links.

After visiting the Calendly links of hundreds of people across the internet, I spotted one pattern. Their Calendly link matches the handle of their social media account and their email address. For example, if a person's Twitter handle is kyungjinoh or their email address is kyungjinoh@gmail.com, likely their Calendly link is also "calendly.com/kyungjinoh".

Now, the process left was simple. I scrape social media handles and email addresses of people on the internet, plug them into the Calendly link, and check if the link is valid. One great directory of VCs is Signal.

![](/images/mf1000-image12.png)

## Building the Data Pipeline

After I discovered this website after hundreds of searches, I coded automation code to scrape the information from this website.

![](/images/mf1000-image15.png)

After running this automation code (for all the processes, like scraping to validating Calendly links), I successfully compiled 700 VCs' calendly links.

![](/images/mf1000-image13.png)

## Logo

For the logo, I kept it simple. Just the word Meetingsfor1000. No icon, no fancy mark. The name itself was the logo.

![](/images/mf1000-logo.png)

## Developing the Founder Platform

Afterward, I worked on the website. I mainly used JavaScript and a CSS/HTML-based Vite website to power this platform. It took me a lot of time to manage to make this work, especially the Firebase (backend), and to make sure that I put a limit on the number of meeting links a founder can access in a short time. I spent about 2 weeks on the backend and another 2 weeks on the frontend. And this turned out to be the result.

![](/images/mf1000-image7.png)

![](/images/mf1000-image10.png)

## Launching and growing!!! (my favorite)

Now is the time for the actual marketing! I primarily used LinkedIn and X

![](/images/mf1000-image6.png)

There, I generated about 40k+ views, which was enough to attract about 200 users to our website. At 199 users, I refreshed the dashboard. At 200, I pasted a screenshot into this journal under Launching and growing!!! (my favorite). At 201, I decided it was already outdated and replaced it. Through word-of-mouth and constant referrals by users, our app quickly spread across social media.

![](/images/mf1000-image2.png)

![](/images/mf1000-image4.png)

![](/images/mf1000-image3.png)

![](/images/mf1000-image9.png)

![](/images/mf1000-image5.png)

![](/images/mf1000-image1.png)

![](/images/mf1000-image8.png)

(later analytics under the Sigan name after a redeploy. Same product. This dashboard snapshot shows about 1.1K active users on that view.)

## Choosing Ethics Over Growth

Then Ziad sent another message. He said careless bookings could hurt founders' reputations with investors.

![](/images/mf1000-image11.png)

(Ziad's warning about reputation with VCs)

I also started getting complaints that the platform felt spammy.

![](/images/mf1000-image14.png)

(spam concern from users)

That hit hard. I had built MeetingsFor1000 to help founders get meetings, but the same tool could annoy investors and make founders look bad. I named it MeetingsFor1000 because I originally planned to stop at 1,000 users for that reason. I blew past that limit anyway and kept chasing growth.

After thinking it through, I shut the website down.

## Reflection

MeetingsFor1000 reached about 2,000 users, and at least one founder reported a $50,000 commitment through it. I still shut it down after warnings about spam and damaged reputations with investors. Growth was not worth keeping a product that could harm the people around it.

You can view the website here: [meetingsfor1000.com](https://meetingsfor1000.com), although it is currently blocked. MeetingsFor1000 and Sigan are the same product under two names.
