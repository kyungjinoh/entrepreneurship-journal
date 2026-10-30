---
title: "Brain-controlled Ironman Helmet: How my study of creativity in AI led to an Ironman helmet with EEG BCI"
titleLead: "Brain-controlled Ironman Helmet"
date: 2026-01-13
summary: "How my study of creativity in AI led to the development of an Ironman helmet with a built-in EEG-based brain-computer interface."
status: "In Progress"
featured: false
additional: false
order: 3
yearLabel: "2026-Present"
image: "/images/image20.png"
imageAlt: "Ironman helmet 3D model"
coverType: "image"
tags: ["Ironman","Helmet"]
---

## How did I start this project?

I spent a couple of weeks researching human creativity, how the brain actually generates ideas (this is my [research log](https://drive.google.com/drive/folders/1vBUY8TGrRN4bFpv7j8I4xqeOKUKoT2u3?usp=sharing) if you want to take a look).

![](/images/image103.png)

(part of my AI creativity research log)

While working on that, I thought it would be cool if I could scan my own brain to see how creativity works in my own brain! That's how I came up with the idea to make my own EEG headset to scan my own brain. Along the way, my friend messaged me this, which I thought was a good idea.

![](/images/image26.png)

(what my friend said)

It was a nice idea! That's how this project started.

## Logo creation (I struggled a lot)

Early on, I spent hours on an Ironman helmet logo that lived only in my notebook while other projects actually shipped. Later, when the helmet became a real build, I kept iterating logos anyway. Classic red and gold faceplate, glowing arc reactor, shield mashups, black and white silhouette. None of them felt right on the first try.

![](/images/ironman-logo-1.png)

(classic red and gold faceplate)

![](/images/ironman-logo-2.png)

(glowing arc reactor mark)

![](/images/ironman-logo-3.png)

(red and yellow shield-style mashup)

![](/images/ironman-logo-4.png)

(black and white helmet silhouette)

Logo design took way more time and second guessing than I expected. Still iterating.

## Overview

First thing I had to do was to make sure that I was on a budget. It wasn't.

![](/images/image106.png)

It costed me a lot of dollars. Yet, I discovered that organization called Hack Club funds up to $1000 of the money to teen builders. So I decided to join their program to build.

The first thing I had to do was to make a PCB board or chip for my EEG technology. It was my first time trying to make PCB. I spent the next two days watching tons of these basic Kicad videos and dived right into making one.

![](/images/image113.png)

![](/images/image119.png)

The first thing was to make something called schematic. It was easier than I thought because I can basically label things according to the data sheet of the components and add a little bit of logic suited to my use. I decided to use Kicad and spent the next 7 days making this.

![](/images/image81.png)

![](/images/image100.png)

(left is ADS1299 chip while the right is power supply part of chip)

There were many failures during this process.

1. I forgot to put decoupling capacitors and resistor, so I had to rewire every single wire associated with that component.
2. Second, I realized that the component I was trying to use was outdated that was no longer producing. I had to rewrite the entire part again.
3. Oops! I deleted the file accidentally and spent a lot of time backing up.
4. I didn't know that digital ground (power part) and analog ground (part where brain signal travels) should be separated to reduce noise.

![](/images/image3.png)

(full overview of the schematic)

After all these failures over a week and assigning footprints to each components, I could move to my PCB design.

PCB designing process was craazzzy. It wasn't hard, yet it was like solving through a maze. First, I had to place the components in the right place so that routing track is minimized for effective electricity conductivity. The key here was to place decoupling capacitor extremely close to the ADS1299 chip so that it actually decouples and reduce the noise. Then, I had to route all the traces. I had to connect route through the maze of other route that was intertwined with other wire. COMPLEX PROCESS (but i loved it). Check the image below for the final product.

![](/images/image47.png)

I exported BOM and component placement sheet and used JLCPCB website to order. This is how it came.

![](/images/image66.png)

I plugged USB C cable, connected to laptop, installed arduino to write sample code to test if the PCB works and this was output.

![](/images/image71.png)

I couldn't connect due to error occurring. The error was happening because it failed to enter flashing or download mode to download the code into it. Mistake was that I ordered raw ESP32 instead of ESP32 dev kit so it didn't manually enter flash mode. So, I manually wired everything using dupont cable, forced it to enter download mode, and confirmed that it was actually working.

The next step was to make VR display for the helmet. Here is the thing. Building VR display takes a lot of money, which I didn't have as a broke student. The solution I had was using this [method](https://www.sciencedirect.com/science/article/pii/S2949678023000405) in this paper to turn my phone into VR display. You can check the image below to see how I will turn my phone to VR display:

![](/images/image63.png)

To make this, I had to order glass lens and use 3d printing to make the hardware part of the VR headset. I used onshape, CAD platform my friend recommended, to make this simple VR display design.

![](/images/image72.png)

![](/images/image88.png)

![](/images/image61.png)

(first is the Onshape 3d model, then the printed headset, then the initial paper sketch)

Then, I will embed this thing into my helmet. After tinkering around with Blender, I made an ironman helmet and VR display embedded inside.

![](/images/image20.png)

Problem: my 3d printer is small, so it can't print the entire helmet in one go. So i had to divide helmet in to smaller parts and print like below.

![](/images/image74.png)

![](/images/image117.png)

Then, I glueguned the magnet for components that should stick-and-detach. Then, I welded together the component that should permanently stick by soldering iron . Like this:

![](/images/image116.jpg)

![](/images/image86.jpg)

Then, I started spraying filler spray and metallic spray to give color to the helmet.

![](/images/image16.gif)

⚠️ This project isn't fully completed. I will update the progress in a meantime ⚠️
