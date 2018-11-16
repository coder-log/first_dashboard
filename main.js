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

var openMenuOnResize = function(){
    const mq = window.matchMedia("(min-width: 660px)");
    if (mq.matches) {
        openMenu;
    }
}

document.getElementById("burguer-menu").addEventListener("click", openMenu);
document.getElementById("aside-logo-mb").addEventListener("click", closeMenu);
window.addEventListener('resize', openMenuOnResize);

/*Resize Window */
// if (matchMedia) {
//     const mq = window.matchMedia("(min-width: 660px)");
//     mq.addListener(WidthChange);
//     WidthChange(mq);
//     }
    
//     // media query change
//     function WidthChange(mq) {
//     if (mq.matches) { openMenu;
//     // window width is at least 500px
//     } else {
//     // window width is less than 500px
//     }
    
//     }