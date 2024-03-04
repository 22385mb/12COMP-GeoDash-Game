/*******************************************************/
// Geo Dash Game
// Written by Miles Baldwin
/*******************************************************/
console.log("%c GeoDash Clone", "color: blue;");

/******************************************************/
// Variables & CONSTANTS
/*****************************************************/
const SCREENWIDTH = 540;
const SCREENHEIGHT = 540;
const PLAYER_ON_GROUND = 490;

const PLAYER_HEIGHT = 50;
const PLAYER_WIDTH = 50;
const OBSTACLE_HEIGHT = PLAYER_HEIGHT;
const OBSTACLE_WIDTH = PLAYER_WIDTH;

var score = 0;
var pastScore = 0;
var newSpawn = 0;
var screenSelector = "start";

//Creating global variable for obstacles(group)
var obstacles;

/*******************************************************/
// setup()
/*******************************************************/
function setup() {
    console.log("setup: ");
    cnv = new Canvas(SCREENWIDTH, SCREENHEIGHT);
    world.gravity.y = 120;
    
    // Creating Sprites
    createSprites();
    // Setting Up obstacles
    obstacles = new Group();
    
    // Key Presses
    document.addEventListener("keydown", 
        function(event) {
            if(screenSelector == "start") {
                screenSelector = "game";
            } else if(screenSelector == "end") {
                resetGame();
                screenSelector = "game";
            } else {
                if(player.y > PLAYER_ON_GROUND) {
                    player.vel.y = -32;
                }
            }
        }
    );
    
    // Player and Obstacles Collision
    player.collides(obstacles, endGame);
    
    //Set Up Text preferences
    stroke(0);
    strokeWeight(3);
    textSize(32);
    fill(255);
}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
    if (screenSelector == "game") {
        gameScreen();
    } else if(screenSelector == "end") {
        endScreen();
    } else if(screenSelector == "start") {
        startScreen();
    } else {
        text("Wrong Screen", SCREENWIDTH/2, SCREENHEIGHT/2);
        console.log("Wrong Screen - you shouldn't be here");
    }
}

/******************************************************/
// Functions
/*****************************************************/
// Creating the Sprites
function createSprites() {
    // Player
    player = new Sprite(100, SCREENHEIGHT - 255, PLAYER_WIDTH, PLAYER_HEIGHT, 'd');
    player.color = 'lightblue';
    
    // Ground
    ground = new Sprite(SCREENWIDTH/2, SCREENHEIGHT, SCREENWIDTH, 40, 's');
    ground.color = "green";
}

function newObstacle() {
    // Obstacles
    obstacle = new Sprite(SCREENWIDTH + 100, SCREENHEIGHT - 45, OBSTACLE_WIDTH, OBSTACLE_HEIGHT, 'k');
    obstacle.color = 'red';
    obstacle.vel.x = -13;
    
    // Obstacles Group
    obstacles.add(obstacle);
}

// Player Has lost
function endGame(_player, _obstacle) {
    screenSelector = "end";
    player.remove();
    
}

// Main screen functions
function startScreen() {
    background("white");
    
    allSprites.visible = false;
    stroke(0);
    strokeWeight(4);
    textSize(32);
    fill(255);
    text("Welcome to this game", 50, SCREENHEIGHT/2);
    textSize(20);
    text("PRESS ANY KEY TO START", 75, SCREENHEIGHT/2 + 50);
}

function gameScreen() {
    background('lightGrey')
    allSprites.visible = true;
    player.rotation = 0;
    score++;
    // Creating Multiple Obstacles
    if (frameCount > newSpawn) {
        newObstacle();
        newSpawn = frameCount + random(30, 100);
    }
    // Obstacle Cleanup
    if (obstacles.length > 0) {
        if (obstacles[0].x < 0) {
            obstacles[0].remove();
        }
    }
    // Score and speciifc stroke values for score
    stroke(0);
    strokeWeight(3);
    text(score, 15, 50);
    
    // Past score takes on values off score
    pastScore = score;
    
}

function endScreen() {
    background("white");
    
    allSprites.visible = false;
    stroke(0);
    strokeWeight(4);
    textSize(32);
    fill(255);
    text("You died! SORRY!", 50, SCREENHEIGHT/2);
    textSize(20);
    text("Your score was " + pastScore, 75, SCREENHEIGHT/2 + 50);
    text("Press any key to restart", 50, SCREENHEIGHT/2 + 75);
}

function resetGame() {
    // Reset Game
    player = new Sprite(100, SCREENHEIGHT - 255, PLAYER_WIDTH, PLAYER_HEIGHT, 'd');
    player.color = 'lightblue';
    player.collides(obstacles, endGame);
    score = 0;
}
/*******************************************************/
//  END OF APP
/*******************************************************/
