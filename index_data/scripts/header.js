const header = document.getElementById("header");
const sticky = header.offsetTop;
function headerFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
    document.getElementById("totop").style.display = "block";
    document.getElementById("menuNavigator").style.height = "calc(100% - 66px)";
  } else {
    header.classList.remove("sticky");
    document.getElementById("totop").style.display = "none";
    document.getElementById("menuNavigator").style.height = "calc(100% - 98px)";
  }
}