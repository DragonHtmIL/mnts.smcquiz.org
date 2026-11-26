const header = document.getElementById("header");
const sticky = header.offsetTop;
function headerFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
    document.getElementById("totop").style.display = "block";
  } else {
    header.classList.remove("sticky");
    document.getElementById("totop").style.display = "none";
  }
}