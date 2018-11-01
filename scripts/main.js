var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var adbar = document.getElementById("ad-bar-div")
var navlogo = document.getElementById("nav-logo")
var mainNav = document.getElementById("main-nav-div")

window.onscroll = function() {myFunction()};


function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    navlogo.src="images/Esport.png"
    navlogo.classList.add("scroll-logo")
    mainNav.setAttribute("style","height:60px; transition:height 0.3s");
    if(window.pageYOffset == 0){
        navlogo.classList.remove("sticky");
        navlogo.classList.remove("scroll-logo");
        navlogo.src="images/logo.png"
        mainNav.setAttribute("style","height:85px; transition:height 0.3s;");
    }
    
  } else {
    navbar.classList.remove("sticky");
  }
}

//133.5