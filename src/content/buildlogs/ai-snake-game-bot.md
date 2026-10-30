---
title: "AI Snake Game Bot: Discovering Pythagorean Theorem through AI Snake Game Project in CS class!"
titleLead: "AI Snake Game Bot"
date: 2026-06-08
summary: "How developing a Q-learning-based AI to play the Snake game allowed me to naturally derive the Pythagorean Theorem."
status: "Shipped"
featured: false
additional: false
order: 5
yearLabel: "2026"
image: "/images/ai-snake-thumbnail.jpg"
imageAlt: "AI Snake Game Bot"
coverType: "image"
tags: ["Snake","Game","Bot"]
---

![](/images/snake-demo-1.gif)

## How did I start this?

For Introduction to Computer Science class in our school, I had to pick one application or app to make in Apache Netbeans using Java Swing GUI. I wanted to challenge my coding skill, so I intentionally decided to make this AI snake game bot that learns the rules from scratch through a q-learning algorithm.

## Intro about project

As the title mentioned, it is literally that. I used something called the q-learning algorithm, one of the simplest yet interesting machine learning algorithms, to make a program on how to play snake game.

What is q-learning? In simple word, it is "given what I can currently see, what move is likely to give me the highest future reward?"

For snake, q-table maps "(State, Action) → Expected future reward". For example, say that

State:

- Food is to the left
- Wall ahead
- Body on the right

Action:

- Turn left

Q-value:

- 7.3

It is basically asking "If I'm in this situation and turn left, I expect to earn about 7.3 reward over the rest of the game."

At first when the game started, the Q-value was 0, because the snake knew nothing. However, it first start to move to the random direction. Through trial-and-error, the snake learned that it should eat food and avoid wall to increase my q-learning value. Then, in later game, it moves in a way that maximize that q-value or reward. Through this continuous trial-and-error, snake learns and eventually be good at game.

One important thing to know is that snake is epsilon-greedy. Epsilon is score that measures the likelihood that snakes say "I'll try something new" and try route that is risky but not yet explored. Simply put, you don't know if restaurant will make delicious food before you go. If epsilon score is high, snake tries new, random route more, just like we try new restaurant. However, epsilon is decreased as the game plays because snake now has more knowledge on what is good and bad that it can play less risky. You can check the image below to see how it works

![](/images/snake-demo-1.gif)

![](/images/image40.png)

(I wrote about 700 lines of code to make this simulation)

P.s. I won't go into every single details of coding. But if you want to take a look at my code, go to this [repo](https://github.com/kyungjinoh/snake-game).

## Discovering Pythagorean Theorem

So, why is this related to Pythagorean theorem, you might ask?

Say that food is placed "up left" to the snake. Then, snake doesn't go all the way up and then all the way left. It alternates between "up left up left up left" to get to the food.

It was weird because "up up left left" and "up left up left" took the same number of path so I thought both are equally efficient. So I asked Mr. Em, my CS teacher about this. He said the snake is trying to take the shortest path to the snake by taking the shortest path.

![](/images/snake-demo-2.gif)

When the food is diagonal, both "up" and "left" reduce the distance by the same amount, so both are equally good. However, because the AI's state includes its current direction, "going up + food is up-and-left" and "going left + food is up-and-left" are treated as two different situations. After training, the AI learns a fixed preference in each of those situations: when facing up it chooses left, and when facing left it chooses up.

This makes it switch every single step, producing the consistent zigzag pattern. But why does AI learns a fixed preference of zigzag pattern, following the diagonal path decided by pythagorean theorem?

I'm still working on to figure out that part.

## Stuck in loop

After many trial, around 1600'th training episode (episode is each trial of game), it is stuck in the loop, while not eating the food. You can see the gif below.

![](/images/snake-demo-3.gif)

This is happening because it is trying to play safe after realizing that while making a loop, you never crash into a wall. This is very smart move, but I solved this by giving a small minus point every time it goes additional step without eating food.

## Reflection

I realized that AI is super powerful and interesting technology. I don't know the future but I want to try applying AI in many different field and ideally in my own startup. I was thinking of AI-powered carbon-negative hotel on the moon for quite a while and also AI that saves kids in the war zone and many more. But it is undoubtful that now I realized AI is interesting and powerful, I will make best use of it so that this technology positively impacts the world, not just used by AP lit students to cheat on their essay.
