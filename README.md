# Finding Nemo - Game


## Description

The game is about helping the charcter to find Nemo. The character has to avoid the sharks (by using the arrow keys). You can collect points by swimming to the fish and asking them for help (200 points per fish).  
The game can be won if a score of 6000 points is reached. 
If Dory loses 3 lives by colliding with the sharks, the game is over. 
You can reach different levels. With every level the fish and sharks become faster.

##Specials
The User can choose his character
Moving Background in canvas
Local Storage: Score
Different Levels
Sound effects
Collisions with sharks and fish


## MVP (CANVAS)
Canvas: The player can move up/down/right/left to avoid the sharks and catch the fish.

## Backlog
Mobile Version


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

Game.prototype.setLevel();
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

## bubbles.js

function Bubble (canvas){
}

Bubble.prototype.draw = function(){};

Bubble.prototype.update = function(){};

## background.js

function BackgroundImg (canvas){
}

BackgroundImg.prototype.draw = function(){};

BackgroundImg.prototype.move = function(){};


## HTML files:
-index.html

## CSS files:
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
Link url: https://trello.com/b/DTbg4tIY/project-finding-nemo

- Github
Link url: https://yvonnemoser.github.io/Ironhack-Project-1/


- Slides
URls for the project presentation (slides) Link https://docs.google.com/presentation/d/1Nr1HsBH-Ut2SD04Fg1j8z9krNw9mJlDAoIlBKoPpDHY/edit?usp=sharing
