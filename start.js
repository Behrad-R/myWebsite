//@ts-check
'use strict';
function sideBarOpen(){
    document.getElementById("sidebar").style.width = "200px";
}
function sideBarClose(){
    document.getElementById("sidebar").style.width = "0px";
}

 var welScreen = document.getElementById("welcomeScreen");
 welScreen.addEventListener("webkitAnimationEnd", function (){
    welScreen.style.display = "none";
 });

 welScreen.addEventListener("animationend", function (){
    welScreen.style.display = "none";
 });
 