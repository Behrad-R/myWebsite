//@ts-check
function sideBarOpen(){
    document.getElementById("sidebar").style.width = "200px";
    document.getElementById("grid").style.marginRight = "200px";
}
function sideBarClose(){
    document.getElementById("sidebar").style.width = "0px";
    document.getElementById("grid").style.marginRight = "0px";
}