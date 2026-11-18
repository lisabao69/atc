console.log("JavaScript fonctionne !");

const button = document.querySelector("#menu-button");

console.log(button);

button.addEventListener("click", function () {
console.log("Clic detecte !");
const nav = document.querySelector("#main-nav");
nav.classList.toggle("is-open");
});