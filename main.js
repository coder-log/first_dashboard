
let menuState = "closed";

var openMenu = function(){
    document.getElementsByTagName("aside")[0].style.display = "inline";
    
}

var closeMenu = function(){
    document.getElementsByTagName("aside")[0].style.display = "none";
}



document.getElementById("burguer-menu").addEventListener("click", openMenu);