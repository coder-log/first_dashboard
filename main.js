
// Opening and closing menu on burguer click
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

document.getElementById("burguer-menu").addEventListener("click", openMenu);
document.getElementById("aside-logo-mb").addEventListener("click", closeMenu);



// Setting active link                              

var menuLink = document.getElementsByClassName("menu-link");

var setActiveLink = function(){
    var current = document.getElementsByClassName("active-menu-link");
    current[0].className = current[0].className.replace(" active-menu-link", "");
    this.className += " active-menu-link";
}

for(var i = 0; i<menuLink.length; i++){
    menuLink[i].addEventListener('click', setActiveLink);   
}