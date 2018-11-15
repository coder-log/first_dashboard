
//  var openMenu = function(){
//     el = document.getElementsByTagName("aside")[0];
//     el.style.display = "block";
//     document.getElementById("burguer-menu").style.display = "none";
// }

// var closeMenu = function(){
//     el = document.getElementsByTagName("aside")[0];
//     el.style.display = "none";
//     document.getElementById("burguer-menu").style.display = "inline";
// }

// document.getElementById("burguer-menu").addEventListener("click", openMenu);
// document.getElementById("aside-logo-mb").addEventListener("click", closeMenu);

var openMenu = function(){
    el = document.getElementsByTagName("aside")[0];
    el.style.display = "block";
    document.getElementById("burguer-menu").style.display = "none";
}

var closeMenu = function(){
    el = document.getElementsByTagName("aside")[0];
    el.style.display = "none";
    document.getElementById("burguer-menu").style.display = "inline";
}

// var openMenuOnResize = function(){
//     const mq = window.matchMedia("(min-width: 660px)");
//     if (mq.matches) {
//         openMenu;
//     }
// }

document.getElementById("burguer-menu").addEventListener("click", openMenu);
document.getElementById("aside-logo-mb").addEventListener("click", closeMenu);


//window.addEventListener('resize', openMenuOnResize);


// /*Resize Window */
//  if (matchMedia) {
//     const mq = window.matchMedia("(min-width: 660px)");
//     mq.addListener(WidthChange);
//     WidthChange(mq);
//     }
    
//  //    media query change
//      function WidthChange(mq) {
//     if (mq.matches) { openMenu;
//      // window width is at least 660px
// 	 document.getElementById('sidemenu').style.display='block'
	 
	 
//     } else {
//      // window width is less than 660px
// 	 document.getElementById('sidemenu').style.display='none';
// 	 var btn=document.getElementById('burguer-menu');
// 	 if(isHidden(btn)){
// 		 btn.style.display='inline';
// 		 }
//      }
    
//     }
// function isHidden(el) {
//     var style = window.getComputedStyle(el);
//     return (style.display === 'none')
// }

// *************************************************
// Setting active link
//**************************************************

var menuLink = document.getElementsByClassName("menu-link");
var activeMenuLink = document.getElementsByClassName("active-menu-link");

var setActiveLink = function(){
    console.log("setActiveLink working");
    this.setAttribute("class", "active-menu-link");
}

var resetActiveLink = function(){
    console.log("resetActiveLink working");
    el=document.querySelector(".active-menu-link");
    el.setAttribute("class", "menu-link");
}

var reloadMenuLinks = function() {
    menuLink = document.getElementsByClassName("menu-link");
    activeMenuLink = document.getElementsByClassName("active-menu-link");
}

for(var i = 0; i<menuLink.length; i++){
    menuLink[i].addEventListener('click', setActiveLink, false);
    menuLink[i].addEventListener('click', resetActiveLink, false);
}