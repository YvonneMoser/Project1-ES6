"use strict";

function Game (canvas){
  this.player = null;
  this.sharks = [];
  this.fishes = [];
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.gameOver = false;
  this.gameWon = false;
}




Game.prototype.startLoop = function (){

};


Game.prototype.clearCanvas = function(){
};




Game.prototype.drawCanvas = function(){
}


Game.prototype.updateCanvas = function (){
};


Game.prototype.checkCollisions = function(){
};