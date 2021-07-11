var player = document.getElementById("player");
var grid = document.getElementById("grid");
var gridXY = {x: 8, y: 8};

/* ----- BUTTON UP ----- */
document.addEventListener("keyup", function(event) {
    if (event.code === 'ArrowUp') { document.getElementById("btnUp").click();
}});
function btnUp(){
    playerCurrentRow = parseInt(player.style.gridRowStart);
    player.style.gridRowStart = playerCurrentRow - 1;
}
/* ----- BUTTON UP END ----- */

/* ----- BUTTON RIGHT ----- */
document.addEventListener("keyup", function(event) {
    if (event.code === 'ArrowRight') { document.getElementById("btnRight").click();
}});
function btnRight(){
    playerCurrentColumn = parseInt(player.style.gridColumnStart);
    player.style.gridColumnStart = playerCurrentColumn + 1;
}
/* ----- BUTTON RIGHT END ----- */

/* ----- BUTTON DOWN ----- */
document.addEventListener("keyup", function(event) {
    if (event.code === 'ArrowDown') { document.getElementById("btnDown").click();
}});
function btnDown(){
    playerCurrentRow = parseInt(player.style.gridRowStart);
    player.style.gridRowStart = playerCurrentRow + 1;
}
/* ----- BUTTON DOWN END ----- */

/* ----- BUTTON LEFT ----- */
document.addEventListener("keyup", function(event) {
    if (event.code === 'ArrowLeft') { document.getElementById("btnLeft").click();
}});
function btnLeft(){
    playerCurrentColumn = parseInt(player.style.gridColumnStart);
    player.style.gridColumnStart = playerCurrentColumn - 1;
}
/* ----- BUTTON LEFT END ----- */
