"use strict";





function Fish (canvas, y, img){
  this.speed = 7;
  this.direction = -1;
  this.size = 60;
  this.canvas = canvas;
  this.image = img;
  this.ctx = this.canvas.getContext("2d");
  this.x = this.canvas.width+this.size/2;
  this.y = y;
}

Fish.prototype.draw1 = function(){
  
let fish1 = new Image();
fish1.src = this.image;
  this.ctx.drawImage(fish1, this.x-this.size/2, this.y-this.size/2, this.size, this.size);
};


Fish.prototype.update = function(){
  this.x = this.x + this.direction*this.speed;
};

