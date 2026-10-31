---
title: "SchoolClicker: Turning Clicks into Environmental and Educational Impact"
titleLead: "SchoolClicker"
date: 2025-01-01
summary: "School vs school clicker game where schools compete for environmental and educational causes"
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

[Schoolclicker.com](http://schoolclicker.com) is a school vs. school competitive clicker game. Students click a button to earn points for their high school on a shared leaderboard. Click, the number rises. Click again, it rises again. That was the whole premise at first.

Spoil alert: I spent a lot of time in security because there was a hacker trying to take down our website for FUN.

## Logo

At first I expected the logo to be a simple mark, just a bold white S on black. It felt clean and easy to stamp everywhere.

![](/images/schoolclicker-logo-s.png)

(early idea: a single S)

Then I switched. SchoolClicker is a clicker game, so I wanted the brand itself to feel like one. I dropped the icon and used the full word SchoolClicker in a retro pixel font instead. That version carries the vibe better than a plain letter ever did.

![](/images/schoolclicker-logo.png)

(final direction: SchoolClicker in a retro font)

## Building the First Version

I started building the Vite website with TypeScript and CSS. The site was relatively simple and I could get a first version up within days. First came the Figma designs.

![](/images/image57.png)

![](/images/image101.png)

![](/images/image96.png)

Writing the code took longer than I thought. Lots of trial and error. The hardest part was fitting the packed layout onto every screen size, from phone to laptop. In total it took about 2 months to get the first version solid.

![](/images/image98.png)

(first version of the site)

## Building a Team

I recruited Woojin, my school friend, and Wyatt, a friend from a summer program. That still was not enough if this was going to spread across schools, so I posted on LinkedIn.

![](/images/image56.png)

The post took off and got 24840 views. From there I recruited a 20-person team.

## Marketing Before Launch

While working on this, I met Hyunjun, an app founder who had gained 6M+ users. His Instagram playbook was specific. Make a private school Instagram page, engage students so they follow back, but do not accept follow requests until launch day. On launch day, accept everyone at once. Notifications fire together, students hit the bio link, and traffic dumps in. I used that strategy and made 100+ pages like this.

![](/images/image82.png)

Then I picked school ambassadors for each school, gave them an Instagram account, and marketed that way.

(by the way, I tried the same thing before for UCLA vs USC. Universities were too large for that loop to go viral the same way, so I quickly switched the target to high schoolers.)

I could not manage 100 ambassadors one by one, so I grouped schools by region and appointed a lead per region. That let me run outreach through a smaller set of leads.

## Launch Day

It was the beginning of October when I launched. All at once, I asked ambassadors to accept the follow requests. Users poured into the page.

![](/images/image99.png)

(user count from my google analytics)

We got 1k+ new users on day one. By day two, virality dropped hard. I spun up a Discord so players could talk to each other, and 100+ users joined.

![](/images/image24.png)

At Payton High School, about 40% of students were clicking. From there it spread to nearby Chicago high schools. The counter was climbing. That was cool. It was also when the question got louder.

## The turning point

SchoolClicker is a great game. It is a very enjoyable game. But after launch, watching the users come in, I was like, why am I doing this? Just for users? Just to watch a counter go up?

It was then I decided the clicks had to mean something outside the leaderboard.

I remembered a BuildOn thread from way earlier, back in January. BuildOn builds schools in Africa, and Erin Hartsough had emailed me then:

![](/images/image60.png)

We had gotten on a call, and Erin explained that building a school would take serious fundraising, around $50k+. I had parked that for a while. When I started asking why SchoolClicker existed, that January conversation came back. Asking broke high schoolers to donate that kind of money through a clicker game was not realistic anyway. Some users had already said the same when I tried a plain donation link.

So I changed the model. Each season, the winning school's name would go on a donation tied to BuildOn. Every hundred clicks would also open a Greenpeace donation popup. The game stayed fun. The clicks pointed at environmental and educational impact.

I remodeled the website around that mission.

![](/images/image123.png)

![](/images/image87.png)

(remodeled site after the turning point)

## When Things Started Breaking

Around the same stretch, security got ugly. I had skipped authentication so anyone could play freely. Hackers used that to hit Firebase and fake the click counts.

I could not fully close that hole without auth. After some research, I copied a trick from popcat.click: an hourly click limit. If counts jumped too fast past a threshold, growth stopped and players saw this error:

![](/images/image15.png)

That blocked a lot of attacks. There were more. I spent most of my time on security. Annoying, but I learned a lot about cybersecurity, so GREAT JOB HACKERS!!!

## Growing Through Social Media

I kept pushing growth. I collaborated with my friend Ben, an Instagram and TikTok creator. The first two videos did a few thousand views. The third took off past 100k+ views, and user count jumped with it.

I also posted on my own accounts. This is one of them:

![](/images/image91.jpg)

## Results

I kept marketing through social and school networks. As of July 25th, combining Google Analytics tags I had to rotate twice, SchoolClicker reached over 40,000 users and about 120K visits. Guerrilla marketing and social posts spread it to 200+ schools, with about 4M views across posts.

![](/images/image37.png)

![](/images/image68.png)

![](/images/image108.png)

Lane Tech High School hit 76,855,489 clicks at #1.

![](/images/image62.png)

The BuildOn-linked winner and Greenpeace popups are what made those clicks mean environmental and educational impact instead of only a high score.

## Successes

SchoolClicker eventually reached over 40,000 users. Of course I celebrated and saved the user count in this journal under Successes, right next to Ziad's thank-you from MeetingsFor1000.

That pairing matters to me. One note is a founder who got a real $50k commitment. The other is a clicker game that actually spread. Both felt like proof that something I built could move.

## Lessons Learned

I kept Ziad's warning too. It is in Lessons Learned.

His message was that careless bookings could damage founders' reputations with investors. That lesson followed me into SchoolClicker. A climbing number feels good. It is not enough on its own. If the product only feeds the counter, it is incomplete. That is why the clicks had to point at BuildOn and Greenpeace, not just a high score.

## Reflection

Looking back, SchoolClicker can still look like a silly clicker game. The important part was answering why I was building it after it started working, and making sure the answer was bigger than user count.

It was one of the most meaningful projects I have built.

Check out more at [Schoolclicker.com](http://schoolclicker.com)
