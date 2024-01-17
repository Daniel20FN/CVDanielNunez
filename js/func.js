const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

var flag = false;
function verMas() {
  var habilities2 = document.getElementsByClassName("habilitiesItem2");
  var habilitiesSecundary = document.getElementsByClassName(
    "habilitiesItemSecundary"
  );
  var btnVerMas = document.getElementById("btnMostrar");
  if (flag == false) {
    for (var i = 0; i < habilities2.length; i++) {
      habilities2[i].style.display = "block";
    }
    btnVerMas.textContent = "Ver menos";
    flag = true;
  } else {
    for (var i = 0; i < habilities2.length; i++) {
      habilities2[i].style.display = "none";
    }
    btnVerMas.textContent = "Ver más";
    flag = false;
  }
}

function copiarCorreo() {
  var textarea = document.createElement("textarea");
  textarea.value = "daniel1011083376@gmail.com";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  var popover = new bootstrap.Popover(document.getElementById("enlaceCopiar"));
  popover.show();

  setTimeout(function () {
    popover.hide();
  }, 1000);
}

var overlay = document.getElementById("overlay");
var overlay2 = document.getElementById("overlay2");
var overlay3 = document.getElementById("overlay3");

window.addEventListener("load", function () {
  setTimeout(function () {
    overlay.classList.add("active");
  }, 0);
});
window.addEventListener("load", function () {
    setTimeout(function () {
      overlay2.classList.add("active");
    }, 200);
  });
  window.addEventListener("load", function () {
    setTimeout(function () {
      overlay3.classList.add("active");
    }, 300);
  });

var flagWorks = false;
function works(option) {
  var staticElements = document.getElementsByClassName("static");
  var djangoElements = document.getElementsByClassName("django");

  if (option == 'all') {
    for (var i = 0; i < staticElements.length; i++) {
      staticElements[i].style.display = 'block';
    }
    for (var j = 0; j < djangoElements.length; j++) {
      djangoElements[j].style.display = 'block';
    }
  } else if(option == 'static') {
    for (var i = 0; i < staticElements.length; i++) {
      staticElements[i].style.display = 'block';
    }
    for (var j = 0; j < djangoElements.length; j++) {
      djangoElements[j].style.display = 'none';
    }
  }else if (option == 'django') {
    for (var i = 0; i < staticElements.length; i++) {
      staticElements[i].style.display = 'none';
    }
    for (var j = 0; j < djangoElements.length; j++) {
      djangoElements[j].style.display = 'block';
    }
  }

}