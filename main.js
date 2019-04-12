console.log("here")
"use strict";


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
    <div> Help Dory to find Nemo</div>
    <button>Find Nemo!</button>
    </section>
    </section>`);
  
  let splashSc= document.querySelector("#splash");
  splashSc.style.backgroundColor = "white";
  splashSc.style.width= "80vh";
  splashSc.style.height= "70vh";


  let buttonStart = document.querySelector("button");
  buttonStart.style.borderRadius = "30px";
  buttonStart.addEventListener("click", buildGameScreen);
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
    setTimeout(()=>{buildGameOverScreen()}, 3000);

    const width = gameContainer.offsetWidth;
    const height = gameContainer.offsetHeight;

    console.log(width, height);

    const canvasGame= document.querySelector("canvas");

    canvasGame.setAttribute("width", width);
    canvasGame.setAttribute("height", height);
    canvasGame.style.backgroundColor = "aqua"; //background image goes here


    const game = new Game(canvasGame);

    //callback Gameover
    //eventlistener -keydown - keyup -keyleft -keyright


    game.startLoop();
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

