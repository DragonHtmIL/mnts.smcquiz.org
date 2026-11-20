const searchmodal = document.getElementById("searchmodal");
const modalSearchContent = document.getElementById("modalSearchContent");
const searchbtn = document.getElementById("searchModalOpener");
const closesearchbtn = document.getElementsByClassName("searchcbtn")[0];
searchbtn.onclick = function() {
  searchmodal.style.left = "0%";
  modalSearchContent.style.opacity = "1";
  document.body.style.overflowY = "hidden";
  setTimeout(() => {
    searchmodal.style.backgroundColor = "var(--opacity-bg)";
    searchmodal.style.backdropFilter = "blur(5px)";
  },340);
};
closesearchbtn.onclick = function() {
  searchmodal.style.backgroundColor = "var(--transparent)";
  searchmodal.style.backdropFilter = "blur(0px)";
  setTimeout(() => {
    searchmodal.style.left = "-100%";
    document.body.style.overflowY = "auto";
  },340);
};
searchmodal.onclick = function(event) {
  if (event.target == searchmodal) {
    searchmodal.style.backgroundColor = "var(--transparent)";
    searchmodal.style.backdropFilter = "blur(0px)";
    setTimeout(() => {
      searchmodal.style.left = "-100%";
      modalSearchContent.style.opacity = "0";
      document.body.style.overflowY = "auto";
    },340);
  }
};