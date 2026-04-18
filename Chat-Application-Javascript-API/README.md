# Chat-Application-Using-HTML-CSS-and-JavaScript-Api

A lightweight, browser-based chat application powered by the **ChatGPT-42 RapidAPI**, built with vanilla HTML, CSS, and JavaScript. No frameworks, no installs — just open and chat.

---

## 🚀 Features

### 💡 AI-Powered Responses
- Connects to **ChatGPT-42 via RapidAPI** to generate intelligent responses
- Uses `gpt-3.5-turbo` model under the hood
- Handles API errors gracefully with user-friendly messages

### ⚡ Predefined Responses
Instant replies for common keywords — no API call needed:

| Keyword | Response |
|---|---|
| `hi` | Hey there! How can I help you? |
| `hello` | Hello! What can I do for you? |
| `javascript` | JavaScript is a powerful 
| `css` | CSS is used to style HTML 
| `html` | HTML is the backbone of every 
| `help` | Lists available topics |
| `bye` | Goodbye! Have a great day! 👋 |
| `thanks` | You're welcome! 😊 |
| `name` | I'm ChatBot, your virtual assistant! 🤖 |

### 📨 Multiple Ways to Send
- Click the **send button** (paper plane icon)
- Press **Enter** to send
- Press **Shift + Enter** to add a new line

### 🕒 Timestamps
- Every message shows the **time it was sent** (e.g. `2:35 PM`)
- Timestamps are right-aligned inside each bubble

### 📜 Auto Scroll
- Chat automatically scrolls to the **latest message**
- Scrolls after user message, after "Thinking..." bubble, and after bot response

### 🎨 Clean UI
- Gradient background
- Rounded chat bubbles for user and bot
- Custom scrollbar styling
- Responsive textarea with no resize handle
- Robot icon on bot messages only

### ⚠️ Error Handling
- No internet → shows `⚠️ No internet connection. Please try again.`
- API error → shows the exact error message from the API
- Prevents crashes on undefined responses

---

## 📁 File Structure

```
chat-app/
│
├── index.html       — App structure and layout
├── style.css        — All styling and chat bubble design
└── script.js        — All logic, API calls, and event handling
```

---

## ⚙️ How It Works

```
User types message
       ↓
Press Enter or click Send
       ↓
Check predefined responses
       ↓
      Yes → instant reply
       ↓
      No  → show "Thinking...."
       ↓
      Call RapidAPI
       ↓
      Update bubble with response
```

---

## 🔑 API Setup

This app uses **ChatGPT-42** from RapidAPI.

1. Go to [rapidapi.com](https://rapidapi.com)
2. Search for **ChatGPT-42**
3. Subscribe and copy your API key
4. Open `script.js` and replace:

```javascript
const API_KEY = "your-rapidapi-key-here";
```

> ⚠️ Never share your API key publicly or push it to GitHub.

---

## 🛠️ How to Run

1. Download or clone the project
2. Open `index.html` in any browser
3. Start chatting!

> No server, no install, no build step needed.

---

## 🧠 JavaScript Concepts Used

| Concept | Where Used |
|---|---|
| `document.querySelector` | Selecting DOM elements |
| `createElement` / `innerHTML` | Building chat bubbles dynamically |
| `fetch` + `async` | Calling the RapidAPI endpoint |
| `setTimeout` | Delay before showing bot bubble |
| `addEventListener` | Click and keydown events |
| `scrollTop / scrollHeight` | Auto scroll to bottom |
| `Date` object | Generating timestamps |
| `for...in` loop | Checking predefined responses |

---

## 📦 Dependencies

| Dependency | Source | Purpose |
|---|---|---|
| Font Awesome 7 | cdnjs CDN | Icons (robot, paper plane) |
| Google Fonts (Poppins) | Google CDN | Typography |
| RapidAPI ChatGPT-42 | rapidapi.com | AI responses |

---

## 🐛 Common Errors & Fixes

| Error | Cause | Fix |
|---|---|---|
| `401 Unauthorized` | Invalid or expired API key | Generate a new key on RapidAPI |
| `429 Too Many Requests` | Rate limit exceeded | Wait or upgrade your plan |
| `ERR_INTERNET_DISCONNECTED` | No internet | Check your connection |
| `Cannot read properties of undefined` | Old duplicate function in code | Delete all code and paste fresh |

---

## 👨‍💻 Built With

- HTML5
- CSS3
- Vanilla JavaScript
- RapidAPI (ChatGPT-42)
- Font Awesome 7
- Google Fonts

---

> Made with ❤️ ASIM FAYYAZ  — no frameworks, just clean vanilla code.
