"use strict";



function Player (canvas){
  this.canvas = canvas;
  this.x = 50; //wert eintragen
  this.y = this.canvas.height/2;
  this.lives = 3;
  this.size = 60;
  this.score = 0; 
  this.level = 0;
  this.speed = 6;
  this.directionX = 0;
  this.directionY = 0;
  this.ctx = this.canvas.getContext("2d"); 
}

Player.prototype.draw1 = function(){
  this.ctx.drawImage(imgPlayer, this.x-this.size/2, this.y-this.size/2, this.size, this.size);
};

Player.prototype.draw2 = function(){
  this.ctx.drawImage(imgPlayer2, this.x-this.size/2, this.y-this.size/2, this.size, this.size);
};

//In Vordergrund setzen!
Player.prototype.draw3 = function(){
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




Player.prototype.update = function(){
  this.y = this.y+this.directionY*this.speed;
  this.x = this.x+this.directionX*this.speed;
};

Player.prototype.setDirectionX = function(newDirection){
  this.directionX = newDirection;
};

Player.prototype.setDirectionY = function(newDirection){
  this.directionY = newDirection;
}

Player.prototype.checkCollisionShark = function(shark){
  let collisionRight = this.x + this.size/2 > shark.x - shark.size/2;
  let collisionLeft = this.x - this.size/2 < shark.x + shark.size/2;
  let collisionTop = this.y - this.size/2 < shark.y + shark.size/2;
  let collisionBottom = this.y + this.size/2 > shark.y - shark.size/2;

  return collisionRight && collisionLeft && collisionTop && collisionBottom;
};

Player.prototype.checkFish = function(fish){
  let collisionRight = this.x + this.size/2 > fish.x - fish.size/2;
  let collisionLeft = this.x - this.size/2 < fish.x + fish.size/2;
  let collisionTop = this.y - this.size/2 < fish.y + fish.size/2;
  let collisionBottom = this.y + this.size/2 > fish.y - fish.size/2;

  return collisionRight && collisionLeft && collisionTop && collisionBottom;
};



Player.prototype.setLives = function(){
  this.lives--;
};

Player.prototype.setScore = function(){
  this.score+=200;
  console.log(this.score);
  return this.score;
};


