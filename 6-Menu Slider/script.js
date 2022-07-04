const toggle = document.getElementById("toggle");
const closee = document.getElementById("close");
const openn = document.getElementById("open");
const modal = document.getElementById("modal");

// Toggle Nav
toggle.addEventListener("click", () =>
  document.body.classList.toggle("show-nav")
);

// Show Modal
openn.addEventListener("click", () => modal.classList.add("show-modal"));

// Hide Modal
closee.addEventListener("click", () => modal.classList.remove("show-modal"));
// Hide Modal on Outside Click
window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);
