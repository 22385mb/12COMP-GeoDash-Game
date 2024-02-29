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
const PLAYER_ON_GROUND = 493;

const PLAYER_SIZE = 50;
const OBSTACLE_HEIGHT = PLAYER_SIZE;
const OBSTACLE_WIDTH = PLAYER_SIZE;

var score = 0;
var spawnDist = 0;

//Creating global variable for obstacles
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
    obstacles = new Group();
    
    // Key Presses
    document.addEventListener("keydown", 
        function(event) {
            if(player.y > PLAYER_ON_GROUND) {
                player.vel.y = -33;
            }
        }
    );
    
    // Player and Obstacles Collision
    player.collides(obstacles, endGame);
}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
    background('lightGrey')
    player.rotation = 0;
    // Creating Multiple Obstacles
    
    
}

/******************************************************/
// Functions
/*****************************************************/
// Creating the Sprites
function createSprites() {
    // Player
    player = new Sprite(100, SCREENHEIGHT - 255, PLAYER_SIZE, PLAYER_SIZE, 'd');
    player.color = 'lightblue';
    
    // Ground
    ground = new Sprite(SCREENWIDTH/2, SCREENHEIGHT, SCREENWIDTH, 40, 's');
    ground.color = "green";
}

function newObstacle() {
    // Obstacles
    obstacle = new Sprite(SCREENWIDTH + 100, SCREENHEIGHT - 45, OBSTACLE_WIDTH, OBSTACLE_HEIGHT, 'k');
    obstacle.color = 'red';
    obstacle.vel.x = -10;
    
    //Obstacles Group
    obstacles.add(obstacle);
}

function endGame(_player, _obstacle) {
    console.log("YOU LOSE");
}

/*******************************************************/
//  END OF APP
/*******************************************************/
