function checkDevices() {
  const mobileDev = [
    "Mobile" || "Android"
  ];
  let devType = mobileDev.length;
  const search = document.getElementById("searchBar");
  const modal = document.getElementById("searchModalOpener");
  const headTop = document.querySelectorAll(".top-header");
  if(navigator.userAgent.match(devType)) {
    search.style.display = "none";
    modal.style.display = "block";
    for (let h = 0; h < headTop.length; h++) {
      headTop[h].style.justifyContent = "space-between";
    }
  }else{
    search.style.display = "block";
    modal.style.display = "none";
  }
}