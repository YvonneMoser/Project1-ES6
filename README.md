# Finding Nemo - Game


## Description

The game is about helping Dory find Nemo. Dory has to avoid the sharks (by using the arrow keys). Dory can collect points by swimming to the clownfish and asking them for help (200 points per clownfish).  
The game can be won if a score of 5000 points is reached. 
If Dory loses 3 lives by colliding with the sharks, the game is over. 


## MVP (CANVAS)
Canvas: The player can move up/down/right/left to avoid the sharks and catch the fishes

## Backlog
Enemies
Friends - Catch Coins
Win Game by reaching score
Game over by loosing 3 lives
Moving Background


## Data Structure 

Javascript files:

## main.js

function main(){
  function buildDom(html){
    mainSection.innerHTML = html;
    return mainSection;
  }
  function buildSplashScreen(){
  };

function buildGameScreen(){
  };

  function buildGameOverScreen(){
  
  startloop();
  
  };

  function buildWonScreen(){ 
}
main();




## game.js
function Game (canvas){
  this.player;
  this.sharks = [];
  this.fishes = [];
  this.canvas = canvas
  this.gameOver = false;
  this.gameWon = false;
  
function startLoop(){
    this.clearCanvas();
    this.updateCanvas();
    this.drawCanvas();
    this.checkCollisions();
};

setGameOverCallback();
setGameWonCallback();



## player.js

function Player (canvas){
}

Player.prototype.draw = function(){
};

Player.prototype.update = function(){};

Player.prototype.setDirection = function(){};

Player.prototype.checkCollision = function(){};

Player.prototype.checkFish = function(){};

Player.prototype.setLives = function(){};

Player.prototype.setScore = function(){};

Player.prototype.checkInScreen = function(){};



## fish.js

function Fish (canvas){
}

Fish.prototype.draw = function(){};

Fish.prototype.update = function(){};


##shark.js

function Shark (canvas){
}

Shark.prototype.draw = function(){};

Shark.prototype.update = function(){};


HTML files:
-index.html

CSS files:
-style.css


## Tasks
- Main - buildDom
- Main - buildSplashScreen
- Main - buildGameScreen
- Main - buildGameOverScreen
- Main - buildWonScreen
- Main - addEventListener
- Main - 4 screens transitions
- Game - GameConstructor
- Player - Player Constructor
- Player - draw()/update()
- Player - setDirection()
- Player - setLives()
- Player - setScore()
- Shark - Shark Constructor
- Shark - draw()/update()
- Fish - Fish Constructor
- draw()/update()
- Player - Check CollisionWithShark
- Player - Check CollisionWithFish
- Game - addEventListener
- Game - startLoop
- Game - clear/update/draw Canvas
- Game - checkCollision (fish and sharks)
- Player - create
- Player - move
- Player - gravity
- Player - collision
- Player - jump
- Game - check win

## Links

- Trello
Link url

- Git
URls for the project repo and deploy Link Repo Link Deploy

- Slides
URls for the project presentation (slides) Link Slides.com
