
var openMenu = function(){
    document.getElementsByTagName('aside').style.display = "flex";

}


document.getElementById("burguer-menu").addEventListener("click", function(){
   openMenu; 
   return console.log("This is working");
});