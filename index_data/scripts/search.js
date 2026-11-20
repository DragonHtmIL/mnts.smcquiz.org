function searchQuenstion(inputId, listIds) {
  var input = document.getElementById(inputId);
  var filter = input.value.toUpperCase();
  if (typeof listIds === "string") {
    listIds = Array.prototype.slice.call(arguments, 1);
  }
  for (var listIndex = 0; listIndex < listIds.length; listIndex++) {
    var list = document.getElementById(listIds[listIndex]);
    var items = list.getElementsByTagName("li");
    for (var i = 0; i < items.length; i++) {
      var link = items[i].getElementsByTagName("a")[0];
      var text = link.textContent || link.innerText;
      items[i].style.display = text.toUpperCase().indexOf(filter) > -1 ? "" : "none";
    }
  }
}