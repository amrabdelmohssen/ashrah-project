var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function checkCookie() {
  let username = getCookie("nameK");
  if (username != "") {
    // alert("Welcome again " + username);
    $("#reg").hide();
    $("#log").hide();
    $("#logout").show();
    var tst = $("#usn").text(username);
    $("#usn").show();
  } else {
    // username = prompt("Please enter your name:", "");
  }
}
checkCookie();
function ClearCoockie() {
  document.cookie = "nameK=; expires=Thu, 01 Jan 1970 00:00:00 UTC; ";
  window.location.replace(
    "http://127.0.0.1:5500/finel%20XV%20project%20javascript/myproj/login.html"
  );
}
