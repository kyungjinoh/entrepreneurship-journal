---
title: "AllerGen AI: identify unknown allergen with AI without testing"
titleLead: "AllerGen AI"
date: 2025-06-01
summary: "AI-powered allergy tracking and UNKNOWN allergen detection web app with AI insights from symptom and food analysis"
status: "Shipped"
featured: false
additional: false
order: 10
yearLabel: "2025"
image: "/images/image78.png"
imageAlt: "AllerGen AI"
coverType: "image"
tags: ["AllerGen"]
---
Allergen-ai-alpha.vercel.app

## How did I start this?

In the summer of 2025, I attended the LaunchX Entrepreneurship Program. There, we had to develop and launch MVP just in the span of 4 weeks. The first idea we came up with is portable, eco-friendly, and efficient clothes hanger. However, we later realized that the product with the exact same idea is saturated in the market and decided to change. That's when I proposed AllerGen AI. My mom has been suffering with allergy for her entire life. However, she didn't know which one she is allergic to. So, I thought "what if user can log all the foods they eat, the platform cross-checks all the ingredients, and find most-likely allergen that is most likely causing the allergy?" I proposed this idea to my group right away and started this idea.

## Validating the Problem

First thing I did was to listen to users. This is the first step in every process because I can't spend a month building something nobody wants. I asked around 5-6 people who had been suffering from allergen in LaunchX and found that all of them had food that they are allergic to but don't know what they really are. It is a good signal that this web app is in demand.

## Designing the user experience

Next thing was to develop the front end or the landing page. I decided to use TypeScript / CSS based web app. Here are some picture directly from our landing page:

![](/images/image125.png)

![](/images/image84.png)

Front page is important since it is the first thing that users see. I changed the website design bit by bit through users feedback until it finally becomes good. Below is part of the code I wrote:

![](/images/image11.png)

## Building the Core AI Features

Afterward, I moved onto the actual feature. Our main feature is making so that user can log food they eat. First, they enter the condition.

![](/images/image27.png)

Next, they select the food type they eat and enter the ingredient by either of these three methods.

![](/images/image9.png)

First is manual entry; they can literally enter the ingredients in food.

Second is "scan ingredients": they can scan the ingredient form. What I did was I used OCR technology provided by API Ninjas to read the ingredient and then use Gemini API to process the ingredients.

Third is scanning barcode: after a lot of searches, I found out that Open Food Facts contain a lot of food's barcode and their ingredient. Using their API, I made so that when user scan barcode, they automatically extract the ingredient and log it.

## AI-Powered Allergen Detection

Then, I made it so that it gives overall summary and most likely allergens based on the frequency of ingredients across the foods. If certain ingredient appear more frequently in the allergy-prompting food, that ingredient is likely to be allergen. This process is streamlined through Gemini API:

![](/images/image77.png)

Aside from that, I made it possible for user to log safe food. What it does is that it crosses out the ingredient that is in the safe food so that it longer flags the ingredient as allergic:

![](/images/image44.png)

## Reporting and Data Export

In the history tap, which shows all the logs so far, users can download the PDF report. This is enabled through jsPDF, or JavaScript PDF library.

![](/images/image104.png)

## Bringing the Product to Customers & Reflection

After finishing development comes a process of sales. I've thought of a lot of ways I can potentially sell this product. One of the ways is to hit the road, pitch it to random strangers, and hopefully they buy it.

When we first started it, we wanted to sell it at $100 for lifetime access. However, I realized it was overpriced since no one really wanted to buy it. I immediately lowered to $50 and the sales poured in immediately. One customer I remembered was a person who had allergy to 110 foods and she has unknown allergies that she can't discover. She said our product can really change her life. I felt so happy to see that the technology I developed actually changes the world.

By the end of the batch, we could generate $625 in revenue, through endless door-to-door selling to BU students and leveraging our own network. This $625 is not valuable because it is money. It is valuable because it means that I leaved $625 worth of positive impact in the world.
