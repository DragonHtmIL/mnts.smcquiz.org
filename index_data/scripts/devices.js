function checkDevices() {
  const search = document.getElementById("searchBar");
  const modal = document.getElementById("searchModalOpener");
  if(navigator.userAgent.match(/android/i)) {
    search.style.display = "none";
    modal.style.display = "block";
  }else
  if(navigator.userAgent.match(/iPhone/i)) {
    search.style.display = "none";
    modal.style.display = "block";
  }else{
    search.style.display = "block";
    modal.style.display = "none";
  }
}