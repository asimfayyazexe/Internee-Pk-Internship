// DOM elements
const inputBox = document.querySelector(".input-msg");
const SendingBtn = document.querySelector(".fa-paper-plane");
const chatBody = document.querySelector(".card-body");

let userMessage;

// API credentials
const API_KEY = " Your_RAPID_API_KEY";
const URL = "https://chatgpt-42.p.rapidapi.com/conversationgpt4-2";

// scroll chat to latest message
const scrollToBottom = () => {
  chatBody.scrollTop = chatBody.scrollHeight;
};

// current time as 12hr format
const getTime = () => {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return `${hours}:${minutes} ${ampm}`;
};

// keyword based instant replies
const predefinedResponses = {
  hi: "Hey there! How can I help you?",
  hello: "Hello! What can I do for you?",
  javascript: "JavaScript is a powerful programming language used for web development!",
  css: "CSS is used to style HTML elements and make websites look beautiful!",
  html: "HTML is the backbone of every webpage — it structures the content!",
  help: "Sure! You can ask me about JavaScript, Python, CSS, HTML, and more!",
  bye: "Goodbye! Have a great day!",
  thanks: "You're welcome! 😊 Feel free to ask anything!",
  name: "I'm ChatBot, your virtual assistant! 🤖",
};

//  predefined keyword
const getPredefinedResponse = (message) => {
  const lowerMsg = message.toLowerCase().trim();
  for (const key in predefinedResponses) {
    if (lowerMsg.includes(key)) {
      return predefinedResponses[key];
    }
  }
  return null; // no match
};

// builds and returns a chat bubble element
const messegeEl = (message, className) => {
  const chatEl = document.createElement("div");
  chatEl.classList.add("chat", `${className}`);
  const chatContent =
    className === "chatbot"
      ? `<i class="fa-solid fa-robot"></i>
         <div class="msg-content">
           <p class="robot">${message}</p>
           <span class="timestamp">${getTime()}</span>
         </div>`
      : `<div class="msg-content">
           <p>${message}</p>
           <span class="timestamp">${getTime()}</span>
         </div>`;
  chatEl.innerHTML = chatContent;
  return chatEl;
};

// calls RapidAPI and updates bot chat with response
const chatGenerator = (botMsg) => {
  const robot = botMsg.querySelector(".robot");

  // request config
  const reqOpt = {
    method: "POST",
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "chatgpt-42.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages: [{ role: "user", content: userMessage }],
      system_prompt: "",
      temperature: 0.9,
      top_k: 5,
      top_p: 0.9,
      max_tokens: 256,
      web_access: false,
    }),
  };

  fetch(URL, reqOpt)
    .then((res) => res.json())
    .then((data) => {
      // show error if API returns one
      if (data.error) {
        robot.textContent = `Error: ${data.error.message}`;
        scrollToBottom();
        return;
      }
      // update chat with AI reply
      robot.textContent = data.result;
      scrollToBottom();
    })
    .catch((err) => {
      // network error
      robot.textContent = "No internet connection. Please try again.";
      scrollToBottom();
      console.error(err);
    });
};

// handles sending a message
function chatMessage() {
  userMessage = inputBox.value.trim();
  if (!userMessage) return; // ignore empty input
  inputBox.value = "";

  // add user bubble
  chatBody.appendChild(messegeEl(userMessage, "user"));
  scrollToBottom();

  setTimeout(() => {
    // add thinking bubble
    const botMsg = messegeEl("Thinking....", "chatbot");
    chatBody.appendChild(botMsg);
    scrollToBottom();

    // use predefined reply or call API
    const predefined = getPredefinedResponse(userMessage);
    if (predefined) {
      botMsg.querySelector(".robot").textContent = predefined;
      scrollToBottom();
    } else {
      chatGenerator(botMsg);
    }
  }, 500);
}

// send on button click
SendingBtn.addEventListener("click", chatMessage);

// Enter, new line on Shift+Enter
inputBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    chatMessage();
  }
});