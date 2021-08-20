var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("fixed-header").style.top = "0px";
  } else {
    document.getElementById("fixed-header").style.top = "-160px";
  }
  prevScrollpos = currentScrollPos;
}
