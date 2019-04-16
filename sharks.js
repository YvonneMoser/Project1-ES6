"use strict";


function Shark (canvas, y, directionY) {
  this.speed =5;
  this.speedY = 2;
  this.directionX = -1;
  this.directionY = directionY
  this.size = 90;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.x = this.canvas.width+this.size/2;
  this.y =y;
};

Shark.prototype.draw = function(){
  let imgShark = new Image();
  imgShark.src = "img/findingnemo5.png";
  this.ctx.drawImage(imgShark, this.x-this.size/2, this.y-this.size/2, this.size, this.size);
};

Shark.prototype.update = function(){
  this.x = this.x + this.directionX*this.speed;
  this.y = this.y + this.directionY*this.speedY;
};