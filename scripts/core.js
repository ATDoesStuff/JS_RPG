var player = document.getElementById("player");
var enemy = document.getElementById("enemy")
var grid = document.getElementById("grid");
var gridXY = {x: 8, y: 8};

/* ----- PLAYER CONTROLS ----- */
/* ----- BUTTON UP ----- */
document.addEventListener("keyup", function(event) {
    if (event.code === 'ArrowUp') { document.getElementById("btnUp").click();
}});
function btnUp(){
    playerCurrentRow = parseInt(player.style.gridRowStart);
    player.style.gridRowStart = playerCurrentRow - 1;
    enemyCheck();
}
/* ----- BUTTON UP END ----- */

/* ----- BUTTON RIGHT ----- */
document.addEventListener("keyup", function(event) {
    if (event.code === 'ArrowRight') { document.getElementById("btnRight").click();
}});
function btnRight(){
    playerCurrentColumn = parseInt(player.style.gridColumnStart);
    player.style.gridColumnStart = playerCurrentColumn + 1;
    enemyCheck();
}
/* ----- BUTTON RIGHT END ----- */

/* ----- BUTTON DOWN ----- */
document.addEventListener("keyup", function(event) {
    if (event.code === 'ArrowDown') { document.getElementById("btnDown").click();
}});
function btnDown(){
    playerCurrentRow = parseInt(player.style.gridRowStart);
    player.style.gridRowStart = playerCurrentRow + 1;
    enemyCheck();
}
/* ----- BUTTON DOWN END ----- */

/* ----- BUTTON LEFT ----- */
document.addEventListener("keyup", function(event) {
    if (event.code === 'ArrowLeft') { document.getElementById("btnLeft").click();
}});
function btnLeft(){
    playerCurrentColumn = parseInt(player.style.gridColumnStart);
    player.style.gridColumnStart = playerCurrentColumn - 1;
    enemyCheck();
}
/* ----- BUTTON LEFT END ----- */
/* ----- END PLAYER CONTROLS ----- */

//Check if the player collides with an enemy
function enemyCheck(){
    playerCurrentColumn = parseInt(player.style.gridColumnStart);
    playerCurrentRow = parseInt(player.style.gridRowStart);

    console.log('X: ', player.style.gridColumnStart, "Y: ", player.style.gridRowStart);

    enemyCurrentColumn = parseInt(enemy.style.gridColumnStart);
    enemyCurrentRow = parseInt(enemy.style.gridRowStart);

    if (playerCurrentColumn == enemyCurrentColumn && playerCurrentRow == enemyCurrentRow){
        console.log('Player colided with enemy');
        var battleArena = document.getElementById("battleArena");
        battleArena.style.display = "block";
    }
}


/* ----- BATTLE ----- */
// Get the id of object
var arena = document.getElementById("battleArena");

// When the user clicks anywhere outside of the arena, close it
window.onclick = function(event) {
  if (event.target == arena) {
    arena.style.display = "none";
  }
}

var targetNode = document.getElementById('battleArena');
var observer = new MutationObserver(function(){
    if(targetNode.style.display != 'none'){

        document.getElementById("btnLeft").disabled = true;
        document.getElementById("btnRight").disabled = true;
        document.getElementById("btnUp").disabled = true;
        document.getElementById("btnDown").disabled = true;

        battle();
    }else if(targetNode.style.display == 'none'){
        
        document.getElementById("btnLeft").disabled = false;
        document.getElementById("btnRight").disabled = false;
        document.getElementById("btnUp").disabled = false;
        document.getElementById("btnDown").disabled = false;
    }
});
observer.observe(targetNode, { attributes: true, childList: true });

function battle(){
    playerHealt = document.getElementById("playerHealt");
    
    
}

function btnAttack(){
    playerAttack = document.getElementById("attack").innerHTML;
    playerLuck = document.getElementById("luck").innerHTML;

    enemyHealt = document.getElementById("enemyHealt").innerHTML;

    enemyHealt = (enemyHealt - playerAttack);

    document.getElementById("enemyHealt").innerHTML = enemyHealt;
}