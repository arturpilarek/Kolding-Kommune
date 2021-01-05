function toggleMenu() {
  const x = document.querySelector(".navigation__middle-list")
  if (x.style.display === "none") {
    x.style.display = "block"
  } else {
    x.style.display = "none"
  }
}
