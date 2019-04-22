"use strict";

//Constructor for the moving background image
class BackgroundImg {
  constructor (canvas){
    this.img = new Image();
    this.img.src = "img/LoopImg.jpg";
    this.speed = -2;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = 0;
  }
  draw() {
    this.ctx.drawImage(this.img, this.x, 0, this.img.width-1800,this.canvas.height);
    this.ctx.drawImage(this.img, this.x+this.img.width-1800, 0, this.img.width-1800,this.canvas.height);
    };
  move() {
    if(this.x < 0 - this.img.width+1800){
      this.x = 0
    }else{
      this.x += this.speed;
    }
  };
};
