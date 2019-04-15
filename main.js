console.log("here")
"use strict";

let imgPlayer = new Image();

//Herzen einfügen?
let imgHeart = new Image();
imgHeart.src = "img/heart.png";

//Hintergrund?


function main(){

  let mainSection = document.querySelector("main");
  function buildDom(html){
    mainSection.innerHTML = html;
    return mainSection;
  }



  function buildSplashScreen(){
    let splashScreen = buildDom(`
    <section id="flash">
    <section id="splash">
    <h1>Finding Nemo!</h1>
    <div class="starttext"> Please help us to find Nemo!</br>
    Choose your Character to start the game!</div>
    
    <div class="flex-button">
    <div class="flex-img">
    <img src="img/PinClipart.com_nemo-clip-art_443652.png" width="80">
    <button class="pearl start-button">Pearl!</button>
    </div>

    <div class="flex-img">
    <img src="img/squirt.png" width="85">
    <button class="racker start-button">Racker!</button>
    </div>

    <div class="flex-img">
    <img src="img/dory-icon.png" width="105">
    <button class="dory start-button">Dory!</button>
    </div>
    </div>
    <p class="starttext">Move your character by using the arrow keys. Avoid the sharks and swim to all the fishes to see if you can find nemo!</p>

    </section>
    </section>`);
  
  let splashSc= document.querySelector("#splash");
  splashSc.style.backgroundColor = "white";
  splashSc.style.width= "80vh";
  splashSc.style.height= "70vh";


  let buttonPearl = document.querySelector(".pearl");
  buttonPearl.style.borderRadius = "30px";
  buttonPearl.addEventListener("click", function(){
    imgPlayer.src = "img/PinClipart.com_nemo-clip-art_443652.png";
    buildGameScreen();
  });

let buttonDory = document.querySelector(".dory");
buttonDory.style.borderRadius= "30px";
buttonDory.addEventListener("click", function(){
  imgPlayer.src = "img/dory-icon.png";
  buildGameScreen();
})

let buttonRacker = document.querySelector(".racker");
  buttonRacker.style.borderRadius = "30px";
  buttonRacker.addEventListener("click", function(){
    imgPlayer.src = "img/squirt.png";
    buildGameScreen();
  });


  };




  function buildGameScreen(){
    let gameScreen = buildDom(`<section id="game-container">
    <canvas></canvas>
    <div class="gameDescription">
    <p class="score scorelevel"></p>
    <p class="level scorelevel"></p>
    <img id="keyboard" src="img/keyboard (2).png" width="100px" height="100px">
    <p id="textDescription">Move your character by using the arrow keys. Avoid the sharks and swim to all the fishes to see if you can find nemo!</p>
    </div>
    </section>`); //wie kann ich bild hier einfügen? mit new Image?
    

    let gameContainer = document.querySelector("#game-container");

    let width = gameContainer.offsetWidth;
    let height = gameContainer.offsetHeight;


    let canvasGame= document.querySelector("canvas");

    canvasGame.setAttribute("width", width);
    canvasGame.setAttribute("height", height);

    let gameText= document.querySelector(".gameDescription");
    gameText.setAttribute("width", width);
    gameText.setAttribute("height", height);
    

    let game = new Game(canvasGame);

    document.addEventListener("keydown", function(){
      if (event.keyCode ===38){
        game.player.setDirectionY(-1);
      }
      if (event.keyCode === 40){
        game.player.setDirectionY(1);
      }
      if (event.keyCode === 37){
        game.player.setDirectionX(-1);
      }
      if (event.keyCode === 39 ){
        game.player.setDirectionX(1);
      }
    });

    document.addEventListener("keyup", function(event){
      if (event.keyCode === 37 || event.keyCode === 39){
        game.player.setDirectionX(0);
      }
      if (event.keyCode === 38 || event.keyCode === 40) {
        game.player.setDirectionY(0);
      }
    });

  
    
    game.startLoop();
    game.setGameOverCallback(buildGameOverScreen);
    game.setGameWonCallback(buildWonScreen);
  
   //function showScore(){
   // endScore= game.player.score;
   //return this.player.endScore;
   
  };
  
  
  
  function buildGameOverScreen(){
   let gameOverScreen = buildDom(`<section id="gameOverScreen">
   <div class="sharkflex">
   <img src="img/sharkgameover.png" width="300" height="300px">
   </div>
   <h1>Game Over!</h1>
   <p class="score"></p>
   <div class="flex-button">
   <button class="restart-button">Restart</button>
   <button class="newCharacter">Choose another character!</button>
   </div>
   </section>`);

   /*let scori = document.querySelector(".score");
   scori.innerHTML= this.player.endScore;*/
// wie kann ich auf etwas im gamdescreen zugreifen

   let restartButton = document.querySelector(".restart-button");
   restartButton.addEventListener("click", buildGameScreen);

   let characterButton = document.querySelector(".newCharacter");
   characterButton.addEventListener("click", buildSplashScreen);

  };
  
  
  
  function buildWonScreen(){
    let gameOverScreen = buildDom(`<section id="gameWonScreen">
    <div class="sharkflex">
    <img src="img/foundNemo.png" width="80%" height="90%">
    </div>
    <h1>You found Nemo!</h1>
    <div class="flex-button">
    <button class="restart-button">Restart</button>
    <button class="newCharacter">Choose another character!</button>
    </div>
    </section>`);
 
    let restartButton = document.querySelector(".restart-button");
    restartButton.addEventListener("click", buildGameScreen);

    let characterButton = document.querySelector(".newCharacter");
    characterButton.addEventListener("click", buildSplashScreen);
 
  };



buildSplashScreen();
};


main();
window.addEventListener("load", main); 


//function(){
 // this.background = this.ctx.drawImage(bg, 0, 0, canvasGame.width, canvasGame.height)
  //background.x += -(0.5);
//  background.x %= canvasGame.width;