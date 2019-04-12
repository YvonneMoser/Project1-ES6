console.log("here")
"use strict";

let imgPlayer = new Image();




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
    <img src="img/background.png" width="130">
    <button class="start-button">Choose Nemo!</button>
    </div>

    <div class="flex-img">
    <img src="img/dory-icon.png" width="100">
    <button class="dory">Choose Dori</button>
    </div>

    </section>
    </section>`);
  
  let splashSc= document.querySelector("#splash");
  splashSc.style.backgroundColor = "white";
  splashSc.style.width= "80vh";
  splashSc.style.height= "70vh";


  let buttonStart = document.querySelector(".start-button");
  buttonStart.style.borderRadius = "30px";
  buttonStart.addEventListener("click", function(){
    imgPlayer.src = "img/background.png";
    buildGameScreen();
  });

let buttonDory = document.querySelector(".dory");
buttonDory.style.borderRadius= "30px";
buttonDory.addEventListener("click", function(){
  imgPlayer.src = "img/dory-icon.png";
  buildGameScreen();
})

  };




  function buildGameScreen(){
    let gameScreen = buildDom(`<section id="game-container">
    <canvas></canvas>
    <div>
    <img>
    <p>Move Dory by using the arrows. Be aware of the sharks and swim to all the clownfish to see if you can find nemo!</p>
    </div>
    <section>`); //wie kann ich bild hier einfügen? mit new Image?

    let gameContainer = document.querySelector("#game-container");

    const width = gameContainer.offsetWidth;
    const height = gameContainer.offsetHeight;

    console.log(width, height);

    const canvasGame= document.querySelector("canvas");

    canvasGame.setAttribute("width", width);
    canvasGame.setAttribute("height", height);
    canvasGame.style.backgroundColor = "aqua"; //background image goes here


    const game = new Game(canvasGame);

    game.startLoop();
    game.setGameOverCallback(buildGameOverScreen);
    game.setGameWonCallback(buildWonScreen);


    document.addEventListener("keydown", function(){
      if (event.keyCode ===38){
        game.player.setDirectionY(-1);
      }
      else if (event.keyCode === 40){
        game.player.setDirectionY(1);
      }
      else if (event.keyCode === 37){
        game.player.setDirectionX(-1);
      }
      else if (event.keyCode === 39){
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
        //eventlistener -keydown - keyup -keyleft -keyright

  };
  
  
  
  function buildGameOverScreen(){
   let gameOverScreen = buildDom(`<section>
   <h1>Game Over!</h1>
   <button class="restart-button">Restart</button>
   </section>`);

   let restartButton = document.querySelector(".restart-button");
   restartButton.addEventListener("click", buildGameScreen);

  };
  
  
  
  function buildWonScreen(){
    let gameOverScreen = buildDom(`<section>
    <h1>You found Nemo!</h1>
    <button class="restart-button">Restart</button>
    </section>`);
 
    let restartButton = document.querySelector(".restart-button");
    restartButton.addEventListener("click", buildGameScreen);
 
  };



buildSplashScreen();
};


main();
window.addEventListener("load", main); 

