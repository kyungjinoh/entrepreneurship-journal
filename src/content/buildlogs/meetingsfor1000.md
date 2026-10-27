---
title: "MeetingsFor1000: Helping founders land investor meetings"
titleLead: "MeetingsFor1000"
date: 2025-01-01
summary: "Platform that provides founders with a meeting link for investor calls. I learned important moral lessons that define who I am."
status: "In Progress"
featured: false
additional: false
order: 7
yearLabel: "2025-Present"
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

## Developing the Founder Platform

Afterward, I worked on the website. I mainly used JavaScript and a CSS/HTML-based Vite website to power this platform. It took me a lot of time to manage to make this work, especially the Firebase (backend), and to make sure that I put a limit on the number of meeting links a founder can access in a short time. I spent about 2 weeks on the backend and another 2 weeks on the frontend. And this turned out to be the result.

![](/images/mf1000-image7.png)

![](/images/mf1000-image10.png)

## Launching and growing!!! (my favorite)

Now is the time for the actual marketing! I primarily used LinkedIn and X

![](/images/mf1000-image6.png)

There, I generated about 40k+ views, which was enough to attract about 200 users to our website. Through word-of-mouth and constant referrals by users, our app quickly spread across social media. Many users thanked me a lot for making this website and I was so happy that many founders are easily booking meetings with investors through our website.

![](/images/mf1000-image2.png)

![](/images/mf1000-image4.png)

![](/images/mf1000-image3.png)

![](/images/mf1000-image9.png)

![](/images/mf1000-image5.png)

There was even a founder who secured $50k+ through our website.

![](/images/mf1000-image1.png)

The website grew up to 1k+ users (updated: 2k now).

![](/images/mf1000-image8.png)

## Choosing Ethics Over Growth

However, as time passed, I got a lot of complaints from founders that our platform might be a bit too spammy.

![](/images/mf1000-image14.png)

![](/images/mf1000-image11.png)

For months, I measured MeetingsFor1000 by how effectively it solved the problem I had identified. Founders needed access to investors, and my website made that access easier. But the complaints forced me to look at the other side of the transaction. Every shortcut I created for a founder could become another interruption for an investor. I had built a tool to remove friction, without fully considering who would absorb it. For the first time, I questioned whether making something easier for my users automatically made it better for everyone affected by it.

This is the side effect that I completely ignored when I first started this project. I started to ask this question: should I shut down this website or keep maintaining and growing it so that I can get more users? I spent quite a lot of time thinking about this.

Thinking back, this wasn't the first time I've thought of this. The reason why the name of the website is meetingfor1000 is because I initially decided to only take 1000 users, worried that this platform might turn too spammy if I take too many people. But something that I worried actually happened. However, I didn't shut down even if it reached 2000 users. I was so focused on getting user that I didn't reflect on whether this platform was actually harming the people.

At the end of the day, the decision I made was to shut down this website, as keeping it would go against my morality.

This way, the website came to an end.

## Reflection:

The hardest part of shutting down MeetingsFor1000 was that the project was not an obvious failure. People were using it. Founders had thanked me, and at least one had reportedly raised more than $50,000 through a connection made on the platform. By conventional measures, I had built something valuable. Yet I could not ignore the complaints about unwanted outreach. I had to confront an uncomfortable possibility: a product could be successful according to its users and its growth metrics while still creating costs for others. Closing it meant accepting that success alone was not a sufficient reason to continue. Since this event, I have believed that great technology is not defined by growth alone, but by whether it creates a positive impact on society.
