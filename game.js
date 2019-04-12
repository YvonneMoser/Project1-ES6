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

  this.player = new Player(this.canvas);

  let loop = () => {
    if (Math.random() > 0.97){
      let randomNumber = (Math.random()*this.canvas.height-30)+30;
      let randomNumber2 = (Math.random()*this.canvas.height-30)+30;
      this.sharks.push(new Shark(this.canvas, randomNumber));
      this.fishes.push(new Fish(this.canvas, randomNumber2));
    }


    this.clearCanvas();
    this.updateCanvas();
    this.drawCanvas();
    this.checkCollisions();
    if (this.gameOver === false){
      window.requestAnimationFrame(loop);
    }


  }


window.requestAnimationFrame(loop);

};


Game.prototype.clearCanvas = function(){
  this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height)
};




Game.prototype.drawCanvas = function(){
  this.player.draw1();
  //Hintergrund draw 
  this.sharks.forEach(function(shark){
  shark.draw();
});
  this.fishes.forEach(function(fish){
  fish.draw();
  });
};


Game.prototype.updateCanvas = function (){
  this.player.update();
  this.sharks.forEach(function(shark){
    shark.update();
  });
  this.fishes.forEach(function(fish){
  fish.update();
  });
};


Game.prototype.checkCollisions = function(){
  
  this.sharks.forEach((shark, index) => {
    let collidingShark = this.player.checkCollisionShark(shark);
    if (collidingShark){
      this.sharks.splice(index,1);
      this.player.setLives();
      if (this.player.lives === 0){
        this.gameOver = true;
        this.onGameOver();
      }
    }
  });

  this.fishes.forEach((fish,index)=> {
  let collidingFish = this.player.checkFish(fish);
  if(collidingFish){
    this.fishes.splice(index, 1);
    this.player.setScore();
    if (this.player.score > 600){
      this.gameWon = true;
      this.onGameWon();
    }
  }
  }); 
};

Game.prototype.setGameOverCallback = function (callback){
  this.onGameOver = callback;
}


Game.prototype.setGameWonCallback = function (callback){
  this.onGameWon = callback;
}