"use strict";


//Constructor for player
class Player {
  constructor(canvas){
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
  }
  
  //Draws player in canvas
  draw1(){
    this.ctx.drawImage(imgPlayer, this.x-this.size/2, this.y-this.size/2, this.size, this.size);
  };

  //Draws players lives (hearts) in canvas and updates if player loses life
  hearts(){
    const imgHeart = new Image();
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
  update(){
    this.y = this.y+this.directionY*this.speed;
    this.x = this.x+this.directionX*this.speed;
  };

  //Sets the direction (x axis) of the player
  setDirectionX(newDirection){
    this.directionX = newDirection;
  };

  //Set the direction (y axis) of the player
  setDirectionY(newDirection){
    this.directionY = newDirection;
  };

  //Check collision with a shark
  checkCollisionShark(shark){
    const collisionRight = this.x + this.size/2 > shark.x - shark.size/2;
    const collisionLeft = this.x - this.size/2 < shark.x + shark.size/2;
    const collisionTop = this.y - this.size/2 < shark.y + shark.size/2;
    const collisionBottom = this.y + this.size/2 > shark.y - shark.size/2;
    return collisionRight && collisionLeft && collisionTop && collisionBottom;
  };

  //Check collision with a fish
  checkFish(fish){
    const collisionRight = this.x + this.size/2 > fish.x - fish.size/2;
    const collisionLeft = this.x - this.size/2 < fish.x + fish.size/2;
    const collisionTop = this.y - this.size/2 < fish.y + fish.size/2;
    const collisionBottom = this.y + this.size/2 > fish.y - fish.size/2;

    return collisionRight && collisionLeft && collisionTop && collisionBottom;
  };

  //Sets lives of the player
  setLives(){
    this.lives--;
  };

  //Sets score of the player
  setScore(){
    this.score+=200;
    console.log(this.score);
    return this.score;
  };
};










