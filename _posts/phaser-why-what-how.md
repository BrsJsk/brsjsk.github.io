---
title: 'Phaser - Why, what, how?'
excerpt: 'Games got me into programming. As much as I loved playing them, I loved figuring out how they are even made.'
date: '2024-11-21T22:00:07.322Z'
author:
  name: Boris Joskic
  picture: '/assets/blog/authors/borisj.jpg'
---


**Why**

Games got me into programming. As much as I loved playing them, I loved figuring out how they are even made. To this day, I know the basics.. To challenge myself, I thought it could be a good idea to finally figure out at least some part of it. Could using a language I already know and use on a daily basis make it easier?

I'll try to document my findings in series of blog posts..

**What**

I'm not really sure on what I'll try to build. Its most likely gonna be a multiplayer RPG, and yes, I know..thats a lot of work, at least I know what I'm getting myself into..

To make things as simple as possible, its just gonna be PVE multiplayer, where you can join worlds with other players or create your own private world..there's gonna be different paths you can take and upgrade skills within that path. So basically, as any other RPG game.

![](/assets/blog/Pastedimage20241121221106.png)


The changes that this will be a fully playable game, let's be honest, are low..but at least I'll spend some time figuring out things I'm interested in.


**How**

A sane person might go with Unreal, Unity or even Godot. But I'm going with Phaser.js as game engine. I'm gonna use a language I'm most familiar with with a framework and concepts I know nothing about. I guess with official docs and community examples I might get something right..

As it's gonna be a pixelated top down game(no 3d here for now..), I'm going with Tiled as my editor for the world.

https://www.mapeditor.org/

https://craftpix.net/freebies/free-pixel-citizens-for-top-down-tower-defense/
https://craftpix.net/freebies/free-fields-tileset-pixel-art-for-tower-defense/

![](/assets/blog/Pastedimage20241121215747.png)


To skip additional overhead that includes me creating all the art..I'm gonna download a free one.
No point in buying or creating custom tiles, characters, icons and animations when I'm just figuring out what how and where. I've decided to go with https://craftpix.net/freebies/free-fields-tileset-pixel-art-for-tower-defense/ . They have couple of free download, and couple of paid ones..the paid ones will be useful if I'm able to code at least something playable..

Of course, I'm going with Vite + Typescript.
After some tutorials on Tiled and Phaser, deleting some boilerplate code and writing a veeeery simple scene, I've got my tiles on the screen.

![](/assets/blog/Pastedimage20241121215816.png)

![](/assets/blog/Pastedimage20241121221742.png)


Next step would be adding a character, movement and some camera improvements..