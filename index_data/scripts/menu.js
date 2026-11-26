function menuNavigator() {
  const nb = document.getElementById("menuNavigator");
  const mainElement = document.getElementById("main");
  const footer = document.getElementById("footer");
  if (nb.style.left === "100%") {
    nb.style.left = "0%";
    mainElement.style.opacity = "0";
    footer.style.opacity = "0";
    document.body.style.overflowY = "hidden";
  } else {
    nb.style.left = "100%";
    mainElement.style.opacity = "1";
    footer.style.opacity = "1";
    document.body.style.overflowY = "auto";
  }
}
function menuButton(x) {
  x.classList.toggle("change");
}