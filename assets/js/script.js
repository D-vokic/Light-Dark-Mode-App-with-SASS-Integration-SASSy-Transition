/**
 * Dynamic Theme Switching - Dark/Light Mode Project written in SCSS and JavaScript.
 * Description: JavaScript file for the project. This project implements functionality for dynamically switching between Light and Dark modes on a web page.
 * Using JavaScript and SCSS, users can easily toggle between different themes according to their preferences.
 * It includes support for local storage using localStorage, allowing the chosen theme to be remembered even after refreshing the page.
 * Author: Duško Vokić
 */

/**
 * @typedef {('dark'|'light')} Theme - The available themes for the project.
 */

/**
 * @type {HTMLInputElement}
 */
const toggleSwitch = document.querySelector('input[type="checkbox"]');

/**
 * @type {HTMLElement}
 */
const nav = document.getElementById("nav");

/**
 * @type {HTMLElement}
 */
const toggleIcon = document.getElementById("toggle-icon");

/**
 * @type {HTMLImageElement}
 */
const image1 = document.getElementById("image1");

/**
 * @type {HTMLImageElement}
 */
const image2 = document.getElementById("image2");

/**
 * @type {HTMLImageElement}
 */
const image3 = document.getElementById("image3");

/**
 * @type {HTMLElement}
 */
const textBox = document.getElementById("text-box");

/**
 * @type {HTMLElement}
 */
const footer = document.getElementById("footer");

/**
 * @type {HTMLElement}
 */
const linkedin = document.getElementById("linkedin");

/**
 * @type {HTMLElement}
 */
const github = document.getElementById("github");

/**
 * Addresses the issue with smooth scrolling on the body element by using window.scrollTo instead.
 * Smoothly scrolls to the target element when a link is clicked.
 * @param {Event} e - The click event.
 */

// Select all links within the document
const links = document.querySelectorAll("a");

// Iterate through all links and add event listener
links.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

/**
 * Smoothly scrolls to the target element when a link is clicked.
 * @param {Event} e - The click event.
 */
function smoothScroll(e) {
  // Prevent the default behavior of the link
  e.preventDefault();

  // Get the target destination to scroll to
  const targetId = this.getAttribute("href");
  const targetPosition = document.querySelector(targetId).offsetTop;

  // Use the window.scrollTo method for smooth scrolling
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
}

/**
 * Dark or Light Images
 * @param {string} color - Color theme for the images.
 */
function imageMode(color) {
  image1.src = `./assets/img/undraw_proud_coder_${color}.svg`;
  image2.src = `./assets/img/undraw_feeling_proud_${color}.svg`;
  image3.src = `./assets/img/undraw_conceptual_idea_${color}.svg`;
}

/**
 * Toggles between dark and light mode for the webpage.
 * @param {boolean} isdark - Indicates whether the dark mode is being toggled on or off.
 */
function toggleDarkLightMode(isdark) {
  // Set background color of navigation bar based on the mode
  nav.style.backgroundColor = isdark
    ? "rgb(0 0 0 / 50%)" // Dark mode background color
    : "rgb(255 255 255 / 50%)"; // Light mode background color

  // Set background color of text box based on the mode
  textBox.style.backgroundColor = isdark
    ? "rgb(255 255 255 / 50%)" // Dark mode background color
    : "rgb(0 0 0 / 50%)"; // Light mode background color

  // Change toggle icon text based on the mode
  toggleIcon.children[0].textContent = isdark ? "Dark Mode" : "Light Mode";

  // Change toggle icon based on the mode
  isdark
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon") // Dark mode icon
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun"); // Light mode icon

  // Change image mode based on the mode
  isdark ? imageMode("dark") : imageMode("light");

  // Set background color of linkedin and github icons based on the mode
  linkedin.style.backgroundColor = isdark
    ? "rgb(255 255 255 / 50%)" // Dark mode background color
    : "rgb(255 255 255 / 50%)"; // Light mode background color

  github.style.backgroundColor = isdark
    ? "rgb(255 255 255 / 50%)" // Dark mode background color
    : "rgb(255 255 255 / 50%)"; // Light mode background color
}

/**
 * Switch Theme Dynamically
 * @param {Event} event - The event object.
 */
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleDarkLightMode(true);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    toggleDarkLightMode(false);
  }
}

/**
 * Event listener for the toggle switch change event.
 * @listens toggleSwitch:change
 */
toggleSwitch.addEventListener("change", switchTheme);

/**
 * Check Local Storage For Theme and apply it if available.
 */
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    toggleDarkLightMode(true);
  }
}
