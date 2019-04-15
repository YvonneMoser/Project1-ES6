"use strict";



//creates a Game constructor
function Game (canvas){
  this.player = null;
  this.sharks = [];
  this.fishes = [];
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.gameOver = false;
  this.gameWon = false;
}



//Start the loop (by calling the update, draw and clear function)
Game.prototype.startLoop = function (){

  this.player = new Player(this.canvas);


  let loop = () => {
//Push randum number of sharks to the sharks array
    if (Math.random() > 0.97){ 
      let randomNumber = (Math.random()*this.canvas.height-30)+30;
      this.sharks.push(new Shark(this.canvas, randomNumber));
    }

//Puts different fishes to fishes array
    if (Math.random() > 0.995){ 
      let randomNumber2 = (Math.random()*this.canvas.height-30)+30;
      this.fishes.push(new Fish(this.canvas, randomNumber2, "img/background.png"));
    }

    if (Math.random() > 0.995){ 
      let randomNumber2 = (Math.random()*this.canvas.height-30)+30;
      this.fishes.push(new Fish(this.canvas, randomNumber2, "img/22294-tropical-fish-icon.png"));
    }

    if (Math.random() > 0.995){ 
      let randomNumber2 = (Math.random()*this.canvas.height-30)+30;
      this.fishes.push(new Fish(this.canvas, randomNumber2, "img/starfish.png"));
    }

    if (Math.random() > 0.995){ 
      let randomNumber2 = (Math.random()*this.canvas.height-30)+30;
      this.fishes.push(new Fish(this.canvas, randomNumber2, "img/turtle.png"));
    }
   
   
    this.clearCanvas();
    this.updateCanvas();
    this.drawCanvas();

    let endScore= document.querySelector(".score");
    endScore.innerHTML = `Score: ${this.player.score}`;
    endScore.style.fontSize = "x-large"; 
    endScore.style.fontWeight ="bold";

  

    this.checkCollisions();

    this.checkInCanvas();

  

    if (this.player.score >=1000){
      this.sharks.forEach(function(element){
        element.speed =7;
      });
    if (this.player.score >= 1000){
        this.player.level = 1;
      }
    }

    if (this.player.score >=2000){
      this.fishes.forEach(function(element){
        element.speed =7;
      });
      this.sharks.forEach(function(element){
        element.speed =10;
      });
    if (this.player.score >= 2000){
      this.player.level=2;
    }
    }

    // let level= document.querySelector(".level");
    // level.innerHTML = `Level: ${this.player.level}`;
    // level.style.fontSize = "x-large"; 
    // level.style.fontWeight ="bold";
    // level.style.margin ="0 10px 0 25px";

    if (this.gameOver === false && this.gameWon === false){
      window.requestAnimationFrame(loop);
    }
  /*else {
    let endScore = this.player.score;
  return endscore;
  }*/
    
  }


window.requestAnimationFrame(loop);

};

// clear the canvas
Game.prototype.clearCanvas = function(){
  this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height)
};



// draws the canvas (integrates player, sharks and fishes)
Game.prototype.drawCanvas = function(){
  

  //wie hier background  der sich bewegt einfügen????
  this.player.draw1();
  this.player.draw3();
  this.sharks.forEach(function(shark){
  shark.draw();
});
  this.fishes.forEach(function(fish){
  fish.draw1();

  });
};

//updates the canvas (new position for sharks, players and fishes)
Game.prototype.updateCanvas = function (){
  this.player.update();
  this.sharks.forEach(function(shark){
    shark.update();
  });
  this.fishes.forEach(function(fish){
  fish.update();
  });
};

//checks if there`s a collision with a shark or a fish. When colliding a shark the player looses one live. by colliding with fish the score increases
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
    if (this.player.score > 1000){
      this.gameWon = true;
      this.clearCanvas();//wie kann ich hier canvas cleanen
      this.onGameWon();
    }
  }
  }); 

  
    //let collisionLeft = this.x - this.size/2 <= 0;
    //let collisionRight = this.x + this.size/2 > this.canvasGame.width;
    //let collisionBottom = this.y + this.size/2 > this.canvasGame.height;
    //let collisionTop = this.y -this.size/2 <= 0;
  
    //return collisionBottom && collisionLeft && collisionTop && collisionRight;
 // }


};


//wie checken ob es im bildschirm ist
Game.prototype.checkInCanvas = function(){
  if (this.player.x >= this.canvas.width - this.player.size/2) {
    this.player.x = this.canvas.width -this.player.size/2;
    this.player.setDirectionX(0);
}
if (this.player.x-this.player.size/2 <= 0) {
  this.player.x = 0+this.player.size/2
  this.player.setDirectionX(0);
}
if (this.player.y >= this.canvas.height - this.player.size/2) {
  this.player.y = this.canvas.height -this.player.size/2;
  this.player.setDirectionY(0);
}
if (this.player.y-this.player.size/2 <= 0) {
this.player.y = 0+this.player.size/2
this.player.setDirectionY(0);
}

 };



Game.prototype.setGameOverCallback = function (callback){
  this.onGameOver = callback;
}


Game.prototype.setGameWonCallback = function (callback){
  this.onGameWon = callback;
}

