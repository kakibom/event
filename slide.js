var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
}

$(document).ready(function() {
$("#content-slider").lightSlider({
         loop:true,
         auto:true,
         keyPress:true
     });
     $('#image-gallery').lightSlider({
         gallery:true,
         item:1,
         thumbItem:5,
         slideMargin: 0,
         speed:500,
         auto:true,
         loop:true,
         onSliderLoad: function() {
             $('#image-gallery').removeClass('cS-hidden');
         }
     });
});
