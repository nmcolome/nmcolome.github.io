// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
let navbars = document.getElementsByClassName("navbar");

// Get the offset position of the navbar
let sticky0 = navbars[0].offsetTop;
let sticky1 = navbars[1].offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  let sticky = sticky0 > sticky1 ? sticky0 : sticky1
  if (window.pageYOffset >= sticky) {
    navbars[0].classList.add("sticky")
    navbars[1].classList.add("sticky")
  } else {
    navbars[0].classList.remove("sticky");
    navbars[1].classList.remove("sticky");
  }
}