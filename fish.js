"use strict";

//Constructor for fish
class Fish {
  constructor(canvas, y, img, directionY){
    this.speed = 5;
    this.speedY = 0.5;
    this.direction = -1;
    this.directionY = directionY;
    this.size = 60;
    this.canvas = canvas;
    this.image = img;
    this.ctx = this.canvas.getContext("2d");
    this.x = this.canvas.width+this.size/2;
    this.y = y;
    };

  //Draws fish in canvas
  draw1() {
    const fish1 = new Image();
    fish1.src = this.image;
    this.ctx.drawImage(fish1, this.x-this.size/2, this.y-this.size/2, this.size, this.size);
  };

  //Move fish in canvas
  update() {
    this.x = this.x + this.direction*this.speed;
    this.y = this.y + this.directionY*this.speedY;
  };
};
  





