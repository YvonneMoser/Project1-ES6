"use strict";


//Constructor for player
function Player (canvas){
  this.canvas = canvas;
  this.x = 50; 
  this.y = this.canvas.height/2;
  this.lives = 3;
  this.size = 60;
  this.score = 0; 
  this.level = 1
  ;
  this.speed = 6;
  this.directionX = 0;
  this.directionY = 0;
  this.ctx = this.canvas.getContext("2d"); 
};

//Draws player in canvas
Player.prototype.draw1 = function(){
  this.ctx.drawImage(imgPlayer, this.x-this.size/2, this.y-this.size/2, this.size, this.size);
};

//Draws players lives (hearts) in canvas and updates if player loses life
Player.prototype.hearts = function(){
  let imgHeart = new Image();
  imgHeart.src = "img/heart.png";

  if (this.lives >=3){
    this.live1 = this.ctx.drawImage(imgHeart, 10, 10, 25, 25);
    this.live2 = this.ctx.drawImage(imgHeart, 40, 10, 25, 25);
    this.live3 = this.ctx.drawImage(imgHeart, 70, 10, 25, 25);
  }
  if (this.lives === 2){
    this.live1 = this.ctx.drawImage(imgHeart, 10, 10, 25, 25);
    this.live2 = this.ctx.drawImage(imgHeart, 40, 10, 25, 25);
  }
  if (this.lives ===1){
    this.live1 = this.ctx.drawImage(imgHeart, 10, 10, 25, 25);
  }
};


//Moves player in canvas
Player.prototype.update = function(){
  this.y = this.y+this.directionY*this.speed;
  this.x = this.x+this.directionX*this.speed;
};

//Sets the direction (x axis) of the player
Player.prototype.setDirectionX = function(newDirection){
  this.directionX = newDirection;
};

//Set the direction (y axis) of the player
Player.prototype.setDirectionY = function(newDirection){
  this.directionY = newDirection;
};

//Check collision with a shark
Player.prototype.checkCollisionShark = function(shark){
  let collisionRight = this.x + this.size/2 > shark.x - shark.size/2;
  let collisionLeft = this.x - this.size/2 < shark.x + shark.size/2;
  let collisionTop = this.y - this.size/2 < shark.y + shark.size/2;
  let collisionBottom = this.y + this.size/2 > shark.y - shark.size/2;
  return collisionRight && collisionLeft && collisionTop && collisionBottom;
};

//Check collision with a fish
Player.prototype.checkFish = function(fish){
  let collisionRight = this.x + this.size/2 > fish.x - fish.size/2;
  let collisionLeft = this.x - this.size/2 < fish.x + fish.size/2;
  let collisionTop = this.y - this.size/2 < fish.y + fish.size/2;
  let collisionBottom = this.y + this.size/2 > fish.y - fish.size/2;

  return collisionRight && collisionLeft && collisionTop && collisionBottom;
};

//Sets lives of the player
Player.prototype.setLives = function(){
  this.lives--;
};

//Sets score of the player
Player.prototype.setScore = function(){
  this.score+=200;
  console.log(this.score);
  return this.score;
};


