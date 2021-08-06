var player = document.getElementById("player");
var enemy = document.getElementById("enemy")
var grid = document.getElementById("grid");

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
    if(playerCurrentColumn != 8){
        player.style.gridColumnStart = playerCurrentColumn + 1;
    }
    enemyCheck();
}
/* ----- BUTTON RIGHT END ----- */

/* ----- BUTTON DOWN ----- */
document.addEventListener("keyup", function(event) {
    if (event.code === 'ArrowDown') { document.getElementById("btnDown").click();
}});
function btnDown(){
    playerCurrentRow = parseInt(player.style.gridRowStart);
    if(playerCurrentRow != 8){
        player.style.gridRowStart = playerCurrentRow + 1;
    }
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

    }else if(targetNode.style.display == 'none'){
        
        document.getElementById("btnLeft").disabled = false;
        document.getElementById("btnRight").disabled = false;
        document.getElementById("btnUp").disabled = false;
        document.getElementById("btnDown").disabled = false;
    }
});
observer.observe(targetNode, { attributes: true, childList: true });

function btnAttack(){
    playerHealt = document.getElementById("playerHealt").innerHTML;
    playerAttack = document.getElementById("attack").innerHTML;
    playerLuck = document.getElementById("luck").innerHTML;

    enemyHealt = document.getElementById("enemyHealt").innerHTML;
    enemyAttack = 5;
    enemyLuck = 10;

    enemyHealt = (enemyHealt - playerAttack);
    document.getElementById("enemyHealt").innerHTML = enemyHealt;

    enemyHealtCheck();

    playerHealt = (playerHealt - enemyAttack);
    document.getElementById("playerHealt").innerHTML = playerHealt;

    playerHealtCheck();
}

function enemyHealtCheck(){
    enemyHealt = document.getElementById("enemyHealt").innerHTML;
    if(enemyHealt <= 0){
        arena.style.display = "none";
        enemySpawn();
    }
}

function playerHealtCheck(){
    playerHealt = document.getElementById("playerHealt").innerHTML;
    if(playerHealt <= 0){
        window.alert("you died :(");
        location.reload();
    }
}

/* ----- Entity spawn ----- */
function enemySpawn(){

    //Get enemy's last position, we'll use this later to make sure it doesnt spawn on the same place :)
    enemyLastY = document.getElementById("enemy").style.gridColumnStart;
    enemyLastX = document.getElementById("enemy").style.gridRowStart;
    enemyX = 0;
    enemyY = 0;

    //re-roll enemy's position with Math.random(), making sure it isnt lower than 1, aka an invalid number
    while(enemyX < 1 && enemyX != enemyLastX){
        enemyX = Math.floor(Math.random() * 8);
        console.log(enemyX);
    };
    while(enemyY < 1 && enemyY != enemyLastY){
        enemyY = Math.floor(Math.random() * 8);
        console.log(enemyY);
    };

    //re-write variables
    document.getElementById("enemy").style.gridColumnStart = enemyY;
    document.getElementById("enemy").style.gridRowStart = enemyX;
    
    document.getElementById("enemyHealt").innerHTML = 50;

};
function playerSpawn(){

    playerX = Math.floor(Math.random() * 8);
    playerY = Math.floor(Math.random() * 8);

    document.getElementById("player").style.gridColumnStart = playerY;
    document.getElementById("player").style.gridRowStart = playerX;
    
    document.getElementById("playerHealt").innerHTML = 50;
};
function structureSpawn(){
    //inn spawn
    innX = Math.floor(Math.random() * 8);
    innY = Math.floor(Math.random() * 8);

    document.getElementById("inn").style.gridColumnStart = innY;
    document.getElementById("inn").style.gridRowStart = innX;

    //tury shop spawn
    while(shopX <0 && shopX != innX){
        shopX = Math.floor(Math.random() * 8);
    }
    shopY = Math.floor(Math.random() * 8);

    document.getElementById("turyShop").style.gridColumnStart = shopY;
    document.getElementById("turyShop").style.gridRowStart = shopX;
};

/* ----- End Entity ----- */