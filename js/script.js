let nav = document.querySelectorAll(".nav li");
function activ() {
  nav.forEach((e) => {
    e.classList.remove("activ");
    this.classList.add("activ");
  })
}

nav.forEach((e) => {
  e.addEventListener("click", activ);
})