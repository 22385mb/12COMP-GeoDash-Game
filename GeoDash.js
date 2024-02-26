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

const PLAYER_SIZE = 50;

var score = 0;



/*******************************************************/
// setup()
/*******************************************************/
function setup() {
    console.log("setup: ");
    cnv = new Canvas(SCREENWIDTH, SCREENHEIGHT);
    world.gravity.y = 10;
    
    // Creating Sprites
    createSprites();
    
    // Key Presses
    document.addEventListener("keydown", 
        function(event) {
            if (event.code === 'ArrowLeft') {
                console.log("Key Pressed")
                player.vel.x =- 2;
            } else {
                
            }
        }
    );
    document.addEventListener("keyup", 
        function(event) {
            if (event.code === 'ArrowLeft') {
                console.log("Key Unpressed")
                player.vel.x = 0;
            } else {
                
            }
        }
    );
    
}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
    background('lightGrey')
 
}

/******************************************************/
// Functions
/*****************************************************/
function createSprites() {
    // Player
    player = new Sprite(100, 100, PLAYER_SIZE, PLAYER_SIZE, 'd');
    player.color = 'lightblue';
    
    // Ground
    ground = new Sprite(SCREENWIDTH/2, SCREENHEIGHT, SCREENWIDTH, 40, 's');
    ground.color = "green";
}

//function obstacles() {
    //obstacle = new Sprite(200, SCREENHEIGHT - 20, 50, 50, 'd');
    //obstacle.color = "red";
//}

/*******************************************************/
//  END OF APP
/*******************************************************/
