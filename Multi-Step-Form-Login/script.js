  function showStep(n) {
    document.querySelectorAll(".form-step").forEach(s => s.classList.remove("active"));
    document.getElementById("step-" + n).classList.add("active");

    for (let i = 1; i <= 3; i++) {
      const dot = document.getElementById("step-dot-" + i);
      const lbl = document.getElementById("lbl-" + i);
      dot.classList.remove("active", "completed");
      lbl.classList.remove("active-label");
      if (i < n) dot.classList.add("completed");
      else if (i === n) { dot.classList.add("active"); lbl.classList.add("active-label"); }
    }

    // Update connecting lines
    for (let i = 1; i <= 2; i++) {
      const line = document.getElementById("line-" + i);
      if (n > i) line.classList.add("filled");
      else line.classList.remove("filled");
    }
  }

  function validate(step) {
    let ok = true;
    function check(id, condition) {
      const el  = document.getElementById(id);
      const err = document.getElementById("err-" + id);
      if (!condition) { el.classList.add("error"); err.style.display = "block"; ok = false; }
      else { el.classList.remove("error"); err.style.display = "none"; }
    }
    if (step === 1) {
      check("fullName", document.getElementById("fullName").value.trim());
      check("email",    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById("email").value));
      check("phone",    document.getElementById("phone").value.trim());
    }
    if (step === 2) {
      check("username", document.getElementById("username").value.trim());
      check("password", document.getElementById("password").value.length >= 6);
      check("country",  document.getElementById("country").value);
    }
    return ok;
  }

  function fillReview() {
    document.getElementById("r-name").textContent     = document.getElementById("fullName").value;
    document.getElementById("r-email").textContent    = document.getElementById("email").value;
    document.getElementById("r-phone").textContent    = document.getElementById("phone").value;
    document.getElementById("r-username").textContent = document.getElementById("username").value;
    document.getElementById("r-country").textContent  = document.getElementById("country").value;
  }

  function goNext(step) {
    if (!validate(step)) return;
    if (step === 2) fillReview();
    showStep(step + 1);
  }

  function goBack(step) { showStep(step - 1); }

  function submitForm() {
    document.querySelectorAll(".form-step").forEach(s => s.classList.remove("active"));
    document.getElementById("progress-wrapper").style.display = "none";
    document.getElementById("success").style.display = "block";
  }