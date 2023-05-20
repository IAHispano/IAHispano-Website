// Deshabilitar la selección y el arrastre de imágenes en la página
document.addEventListener('DOMContentLoaded', function() {
    disableSelectionAndDrag(document.body);
  });
  
  function disableSelectionAndDrag(element) {
    element.setAttribute('unselectable', 'on');
    element.style.userSelect = 'none';
    element.style.webkitUserSelect = 'none';
    element.style.msUserSelect = 'none';
    element.style.mozUserSelect = 'none';
  
    var images = element.querySelectorAll('img');
    for (var i = 0; i < images.length; i++) {
      images[i].setAttribute('draggable', 'false');
    }
  
    var children = element.children;
    for (var i = 0; i < children.length; i++) {
      disableSelectionAndDrag(children[i]);
    }
  }
  

  // Etiquetas (Tags)
  function filterImages(tag) {
    var tags = document.getElementsByClassName("tag");
    for (var i = 0; i < tags.length; i++) {
      tags[i].classList.remove("selected");
    }

    var selectedTag = document.getElementById("tag-" + tag);
    if (selectedTag) {
      selectedTag.classList.add("selected");
    }

    var articles = document.querySelectorAll(".model-gallery article");

    articles.forEach(function (article) {
      var labels = article.querySelectorAll(".label");
      var image = article.querySelector("img");

      var hasTag = false;

      labels.forEach(function (label) {
        if (label.innerText === tag || tag === "") {
          hasTag = true;
        }
      });

      if (hasTag) {
        article.style.display = "block";
      } else {
        article.style.display = "none";
      }
    });
  }

