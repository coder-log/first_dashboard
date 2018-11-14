
let menuState = "closed";

var openMenu = function(){
    if (menuState="closed") {
        document.getElementsByTagName("aside")[0].style.display = "inline";
        menuState = "open";
    }
}

var closeMenu = function(){
    if (menuState ="open" && window.innerWidht < 660){
        document.getElementsByTagName("aside")[0].style.display = "none";
        menuState = "closed";
    }
}

var resizeWindow = function(){
    if (window.innerWidth > 660) {
        openMenu;
    }
    return console.log(window.innerWidth);
}


document.getElementById("burguer-menu").addEventListener("click", openMenu);
document.getElementsByTagName("aside")[0].addEventListener("click",closeMenu);
window.addEventListener("resize", resizeWindow);