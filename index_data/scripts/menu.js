function menuNavigator() {
  const nb = document.getElementById("menuNavigator");
  const mainElement = document.getElementById("main");
  const footer = document.getElementById("footer");
  if (nb.style.marginLeft === "0%") {
    nb.style.marginLeft = "100%";
    mainElement.style.opacity = "1";
    footer.style.opacity = "1";
    document.body.style.overflowY = "auto";
  } else {
    nb.style.marginLeft = "0%";
    mainElement.style.opacity = "0";
    footer.style.opacity = "0";
    document.body.style.overflowY = "hidden";
  }
}
function menuButton(x) {
  x.classList.toggle("change");
}