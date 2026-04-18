let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let emailError = document.querySelector(".emailError");
  let passwordError = document.querySelector(".passwordError");

  emailError.textContent = "";
  passwordError.textContent = "";

  let isValid = true;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  let emailAns = emailRegex.test(email.value);
  let passwordAns = passwordRegex.test(password.value);

  console.log(emailAns, passwordAns); 

  if (!emailAns) {
    emailError.textContent = "Invalid email address";
    emailError.style.display = "initial";
    isValid = false;
  }

  if (!passwordAns) {
    passwordError.textContent = "Password must be strong";
    passwordError.style.display = "initial";
    isValid = false;
  }

  if (isValid) {
    console.log("Form Submitted");
  }
});
