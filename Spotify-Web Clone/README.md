# Spotify Clone 🎧

A clean and functional Spotify-inspired music player built from scratch using just HTML, CSS, and JavaScript. No frameworks, no libraries — just pure web fundamentals.

I built this project to practice front-end development and get comfortable with DOM manipulation, audio APIs, and responsive design. It's not perfect, but it works great and looks pretty close to the real thing.

---

## What it does

You get a fully working music player right in the browser. You can browse songs, click to play them, skip forward or back, shuffle the playlist, repeat a song, and control the volume — all without any page reload or backend.

The player bar at the bottom updates automatically with the song title, artist name, and cover image whenever the track changes. It feels smooth and natural to use.

---

## Features

- Play and pause songs with a single click
- Skip to the next or previous track
- Shuffle mode — plays a random song every time (never the same one twice in a row)
- Repeat mode — loops the current song until you turn it off
- Volume slider with mute/unmute toggle
- Progress bar that you can click and drag to seek
- Now playing section that updates with each song
- Music cards with a hover play button
- Fully responsive — works on desktop, tablet, and mobile

---

## Built with

- **HTML** — page structure and layout
- **CSS** — styling, hover effects, animations, and media queries
- **JavaScript** — all the player logic, audio control, and DOM updates
- **Font Awesome** — icons for the player buttons
- **Google Fonts** — Montserrat font for the clean look

---

## Folder structure

```
spotify-clone/
├── index.html
├── style.css
├── main.js
├── audio/          → your mp3 files go here (1.mp3, 2.mp3 ... 12.mp3)
├── images/         → song cover images (1.jpg, 2.jpg ... 12.jpg)
└── artist img/     → artist profile images
```

---

## How to run it

1. Download or clone the project
2. Drop your mp3 files into the `audio/` folder — name them `1.mp3` through `12.mp3`
3. Add your cover images to `images/` — name them `1.jpg` through `12.jpg`
4. Open `index.html` in any browser

That's it. No installs, no setup, no terminal needed.

---

## A few things I learned

- How the HTML5 Audio API works and how to control it with JavaScript
- Managing state (current song, shuffle, repeat) without any framework
- Why having two event listeners on the same event causes weird bugs
- Making layouts that actually work on different screen sizes

---

## What could be better

This is a learning project so there's definitely room to grow. Some things I'd improve with more time:

- Add a real playlist feature
- Show song duration and current time as text
- Animate the album art when a song is playing
- Add a proper search that actually filters songs

---

*Made with curiosity and alot efforts making it responsive and a lot of debugging !* 
