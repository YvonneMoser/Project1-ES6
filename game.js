"use strict";

let points = 0;


//creates a Game constructor
function Game (canvas){
  this.player = null;
  this.sharks = [];
  this.bubbles = [];
  this.fishes = [];
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.gameOver = false;
  this.gameWon = false;
}


//Start the loop (by calling the update, draw and clear function)
Game.prototype.startLoop = function (){

  this.player = new Player(this.canvas);
  this.levelSound = document.getElementById("levelSound"); 
  this.background = new BackgroundImg(this.canvas);

  let loop = () => {

//Push random number of bubbles to the bubbles array
//Gives bubbles random size and random direction
if (Math.random() > 0.96){
    let randomNumber = (Math.random()*this.canvas.width);
    let randomSize = Math.random()*20+2;
    let randomDirection = Math.random()*2-1;
    this.bubbles.push(new Bubbles(this.canvas, randomNumber, randomSize, randomDirection));
}    
//Push random number of sharks to the sharks array
//Give sharks a random direction
    if (Math.random() > 0.97){
      let randomNumber = (Math.random()*this.canvas.height-30)+30;
      let randomDirection = Math.random()*2-1;
      this.sharks.push(new Shark(this.canvas, randomNumber, randomDirection));
    }

//Pushs different fishes to fishes array
//Give fish a random direction
    if (Math.random() > 0.995){ 
      let randomNumber2 = (Math.random()*this.canvas.height-30)+30;
      let randomDirection = Math.floor(Math.random()*2);
      this.fishes.push(new Fish(this.canvas, randomNumber2, "img/background.png", randomDirection));
    }

    if (Math.random() > 0.995){ 
      let randomNumber2 = (Math.random()*this.canvas.height-30)+30;
      let randomDirection = Math.floor(Math.random()*2);
      this.fishes.push(new Fish(this.canvas, randomNumber2, "img/22294-tropical-fish-icon.png", randomDirection));
    }

    if (Math.random() > 0.995){ 
      let randomNumber2 = (Math.random()*this.canvas.height-30)+30;
      let randomDirection = Math.floor(Math.random()*2);
      this.fishes.push(new Fish(this.canvas, randomNumber2, "img/starfish.png", randomDirection));
    }

    if (Math.random() > 0.995){ 
      let randomNumber2 = (Math.random()*this.canvas.height-30)+30;
      let randomDirection = Math.floor(Math.random()*2);
      this.fishes.push(new Fish(this.canvas, randomNumber2, "img/turtle.png", randomDirection));
    }
  
  //Clears the canvas
    this.clearCanvas();
  //Updates the canvas
    this.updateCanvas();
  //Draws the canvas
    this.drawCanvas();

  //Sets the score in the html to the actual score
    let endScore= document.querySelector(".score");
    endScore.innerHTML = `Score: ${this.player.score}`;
    endScore.style.fontSize = "x-large"; 
    endScore.style.fontWeight ="bold";

  
  //Checks collision fish and sharks
    this.checkCollisions();

  //Checks collision with wall
    this.checkInCanvas();

  //Sets the levels
    this.setLevel();

  //requestAnimationFrame (the loop stops if the game is won or lost)
    if (this.gameOver === false && this.gameWon === false){
      window.requestAnimationFrame(loop);
    }
  }

  //Repeats the loop 
window.requestAnimationFrame(loop);

};

// clear the canvas
Game.prototype.clearCanvas = function(){
  this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height)
};



// draws the canvas (integrates moving background, player, sharks, fish and bubbles)
Game.prototype.drawCanvas = function(){
  
  this.background.draw();
  this.player.draw1();
  this.player.hearts();
  this.bubbles.forEach(function(bubble){
    bubble.draw();
  });
  this.sharks.forEach(function(shark){
    shark.draw();
  });
  this.fishes.forEach(function(fish){
    fish.draw1();
  });
};

//updates the canvas (new position for sharks, players, fishes, bubbles and background)
Game.prototype.updateCanvas = function (){
  this.background.move();
  this.player.update();
  this.sharks.forEach(function(shark){
    shark.update();
  });
  this.fishes.forEach(function(fish){
    fish.update();
  });
  this.bubbles.forEach(function(bubble){
    bubble.update();
  });
};

//checks if there`s a collision with a shark or a fish. When colliding a shark the player looses one live. By colliding with fish the score increases
Game.prototype.checkCollisions = function(){

  //add sounds if there is a collision
  let sharkSound = document.getElementById("bite"); 
  let fishSound = document.getElementById("fishSound"); 
  let gridSound = document.getElementById("gridSound"); 

  this.sharks.forEach((shark, index) => {
    let collidingShark = this.player.checkCollisionShark(shark);
    if (collidingShark){
      this.sharks.splice(index,1);
      this.player.setLives();
      sharkSound.play();
      if (this.player.lives === 0){
        points = this.player.score;
        this.gameOver = true;
        this.onGameOver();
        return points;
      }
    }
  });

  this.fishes.forEach((fish,index)=> {
    let collidingFish = this.player.checkFish(fish);
    if(collidingFish){
      this.fishes.splice(index, 1);
      this.player.setScore();
      fishSound.play();
      if (this.player.score > 5900){      
        points = this.player.score;
        this.gameWon = true;
        this.clearCanvas();
        this.onGameWon();
      }
    } 
  }); 
};



//Check that player is inside the canvas
Game.prototype.checkInCanvas = function(){
  if (this.player.x >= this.canvas.width - this.player.size) {
    gridSound.play();
    this.player.x = this.canvas.width -this.player.size;
    this.player.setDirectionX(0);
  }
  if (this.player.x-this.player.size/2 <= 0) {
    gridSound.play();
    this.player.x = 0+this.player.size/2
    this.player.setDirectionX(0);
  }
  if (this.player.y >= this.canvas.height - this.player.size/1.5) {
    gridSound.play();
    this.player.y = this.canvas.height -this.player.size/1.5;
    this.player.setDirectionY(0);
  }
  if (this.player.y-this.player.size/2 <= 0) {
    gridSound.play();
    this.player.y = 0+this.player.size/2
    this.player.setDirectionY(0);
  }
};


//Callback to main.js
Game.prototype.setGameOverCallback = function (callback){
  this.onGameOver = callback;
}

//Callback to main.js
Game.prototype.setGameWonCallback = function (callback){
  this.onGameWon = callback;
}

//Set different levels
Game.prototype.setLevel = function (){

  if (this.player.score >= 1000){
    this.sharks.forEach(function(element){
      element.speed =7;
    });
    if (this.player.score === 1000 && this.player.level === 1){
      this.levelSound.play();
      this.player.level = 2;
    }
  }

  if (this.player.score >= 2000){
    this.fishes.forEach(function(element){
      element.speed =7;
    });
    this.sharks.forEach(function(element){
      element.speed =7;
    });
    if (this.player.score === 2000 && this.player.level === 2){
      this.levelSound.play();
      this.player.level=3;
    }
  }

  if (this.player.score >= 3000){
    this.fishes.forEach(function(element){
      element.speed =7;
    });
    this.sharks.forEach(function(element){
      element.speed =10;
    });
    if (this.player.score === 3000 && this.player.level === 3){
      this.levelSound.play();
      this.player.level=4;
    }  
  }

  if (this.player.score >= 4000){
    this.fishes.forEach(function(element){
      element.speed =10;
    });
    this.sharks.forEach(function(element){
      element.speed =10;
    });
    if (this.player.score === 4000 && this.player.level === 4){
      this.levelSound.play();
      this.player.level=5;
    }  
  }

  if (this.player.score >= 5000){
    this.fishes.forEach(function(element){
      element.speed =12;
    });
    this.sharks.forEach(function(element){
      element.speed =10;
    });
    if (this.player.score === 5000 && this.player.level === 5){
      this.levelSound.play();
      this.player.level=6;
    }  
  }
  

  let level= document.querySelector(".level");
  if(level){
    level.innerHTML = `Level: ${this.player.level}`;
    level.style.fontSize = "x-large"; 
    level.style.fontWeight ="bold";
    level.style.margin ="0 10px 0 25px";
  }
  
};