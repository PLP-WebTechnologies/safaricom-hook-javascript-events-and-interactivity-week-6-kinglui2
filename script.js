// Toggle Background Color
const toggleBgBtn = document.getElementById("toggleBgBtn");
let isLight = true;

toggleBgBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = isLight ? "#333" : "#fff";
  document.body.style.color = isLight ? "#fff" : "#000";
  isLight = !isLight;
});

// Slider for Text Size
const textSlider = document.getElementById("textSlider");
const sliderText = document.getElementById("sliderText");

textSlider.addEventListener("input", () => {
  sliderText.style.fontSize = `${textSlider.value}px`;
});

// Modal Event Listeners
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementsByClassName("close")[0];
const languageSelect = document.getElementById("languageSelect");
const languageMessage = document.getElementById("languageMessage");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

languageSelect.addEventListener("change", () => {
  const selectedLanguage = languageSelect.value;

  switch (selectedLanguage) {
    case "python":
      languageMessage.textContent = "Great choice! 🐍 Python is known for its simplicity and readability.";
      break;
    case "c":
      languageMessage.textContent = "Excellent! 💻 C is a foundational language, offering great performance and control.";
      break;
    case "javascript":
      languageMessage.textContent = "Awesome! 🌐 JavaScript is the backbone of web development.";
      break;
    default:
      languageMessage.textContent = "";
  }
});

// Form Validation
const userForm = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

userForm.addEventListener("submit", (event) => {
  let isValid = true;

  if (nameInput.value.length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(passwordInput.value)) {
    passwordError.textContent = "Password must be at least 8 characters, include one uppercase letter and one number.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  if (!isValid) {
    event.preventDefault();
  }
});
