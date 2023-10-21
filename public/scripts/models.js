// Deshabilitar la selección y el arrastre de imágenes en la página
document.addEventListener("DOMContentLoaded", function () {
  disableSelectionAndDrag(document.body);
});

function disableSelectionAndDrag(element) {
  element.setAttribute("unselectable", "on");
  element.style.userSelect = "none";
  element.style.webkitUserSelect = "none";
  element.style.msUserSelect = "none";
  element.style.mozUserSelect = "none";

  var images = element.querySelectorAll("img");
  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("draggable", "false");
  }

  var children = element.children;
  for (var i = 0; i < children.length; i++) {
    disableSelectionAndDrag(children[i]);
  }
}
