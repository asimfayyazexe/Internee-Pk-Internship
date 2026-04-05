# Drag-and-Drop-File-Uploader-With-Preview-Progress-Bar

A simple and modern drag-and-drop file uploader built with **HTML, CSS, and Vanilla JavaScript**.
This project focuses on DOM manipulation, event handling, and file upload UI simulation without using any external frameworks.

## Features

* Drag & drop file upload
* Click-to-browse file selection
* Multiple file support
* Dynamic file list generation using JavaScript
* Automatic file size formatting (KB / MB)
* File preview using `URL.createObjectURL()`
* Remove file option
* Simulated upload progress bar
* Clean and responsive simple UI design

## How It Works

### Drag & Drop Handling

* `dragover`, `dragleave`, and `drop` events are used.
* Default browser behavior is prevented.
* Visual feedback is applied using class toggling.

### DOM Manipulation

All file preview elements are created dynamically using:

* `document.createElement()`
* `classList.add()`
* `appendChild()`
* `innerHTML`
* Dynamic event listeners

No static markup is used for file items.

### File API Usage

* Access files via `input.files` and `dataTransfer.files`
* Display file name and formatted size
* Generate preview link with `URL.createObjectURL()`

### Upload Simulation

* Uses `setInterval()` to simulate upload progress
* Random percentage increments
* Automatically stops at 100%


## Project Structure

```
Drag-File-Uploader/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Technologies Used

* HTML5
* CSS3 (Flexbox, gradients)
* JavaScript (ES6)
* DOM API
* File API


## Learning Purpose

This project was built to practice:

* DOM manipulation
* Event handling
* File handling in JavaScript
* UI feedback with progress animations

---




