"use strict";
let imgFish = new Image();
imgFish.src = "img/background.png";


function Fish (canvas, y){
  this.speed = 3;
  this.direction = -1;
  this.size = 60;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.x = this.canvas.width+this.size/2;
  this.y = y;
}

Fish.prototype.draw = function(){
  this.ctx.drawImage(imgFish, this.x-this.size/2, this.y-this.size/2, this.size, this.size);
};

Fish.prototype.update = function(){
  this.x = this.x + this.direction*this.speed;
};
