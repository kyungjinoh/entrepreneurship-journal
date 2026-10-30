---
title: "What a Peaceful Time: Unity 2D survival game. Run away from monsters!!!"
titleLead: "What a Peaceful Time"
date: 2026-03-02
summary: "A Unity 2D survival game where a warrior fights with enemies that is exponentially multiplying over time."
status: "Shipped"
featured: false
additional: false
order: 13
yearLabel: "2026"
image: "/video/unity-game.mp4"
imageAlt: "Unity Game"
coverType: "video"
tags: ["Unity","Game"]
---

⚠️ Note: For this project, I chose not to document every step of the development process. Unlike an entrepreneurial project with tons of iterations, challenges, and pivots, this was a school Unity Club project where I primarily focused on coding until everything worked. Instead of a detailed development log, I thought it would be more appropriate to provide a brief introduction to the project.

What a Peaceful Time is a Unity 2D survival game where the player lasts as long as possible against waves of torch-carrying enemies that multiplies exponentially over time. User can control the main character, warrior, using "WSAD" keys. Enemies duplicates and spawn continuously across the maps, and chase the player. Attack from enemies damage the player while player have to manage HP and time-survived. Pressure constantly exist through faster enemy spawn, increasing enemy speed, and various enemies spawning (there is teleporting one, bigger one that damages more, one with supersonic speed) as the game goes on. There is vision blackout every 30 seconds that restricts the vision to the radius around the player. When you press Q which has cooltime of about 30 seconds, it clears all enemies around.

To move onto technical side, it is built in Unity 2D. I used A* Pathfinding Project, an open source project that provides lightening fast pathfinding logic, for enemy to smartly chase the main character. System is mostly system-driven without any external backend. Blackout uses sprite mask overlays to cover the black areas except the radius around the character. Also, each combat / spawn logic uses separate script, such as EnemyTorchDuplicator, EnemyAI, and EnemyCombat.

Something I learned along the way:

- Game feels matter as much as technicality: anyone with skills can make a technically complicated game. However, if that game doesn't feel fun or convey what it should, it can never be a really GOOD game. Music taste, character design, and the color scheme matter equally as well as the coding
- Continuous iteration: for this project, I didn't document every little iteration because it is too technical but a great game doesn't come out perfect in one shot. We need countless iterations to make it perfect.
