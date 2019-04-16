console.log("here")
"use strict";


let imgPlayer = new Image();
let imgHeart = new Image();
imgHeart.src = "img/heart.png";

//Hintergrund?


function main(){

  let mainSection = document.querySelector("main");
  function buildDom(html){
    mainSection.innerHTML = html;
    return mainSection;
  };


  //Build the Start Screen
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
    <p class="starttext">Move your character by using the arrow keys. Avoid the sharks and swim to all the fish to see if you can find nemo!</p>

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



  //Build the Game Screen

  function buildGameScreen(){
    let gameScreen = buildDom(`
    <audio id="bite" src="vid/Apple_Bite-Simon_Craggs-1683647397.mp3"></audio>
    <audio id="fishSound" src="vid/smw_coin.wav"></audio>
    <audio id="gridSound" src="vid/smw_stomp_koopa_kid.wav"></audio>
    <audio id="levelSound" src="vid/smw_save_menu.wav"></audio>
    <audio id="startSound" src="vid/Bubbling-SoundBible.com-1684132696 (1).wav"></audio>



    <div class="bla">
      <div id="game-border">
        <section id="game-container">
          <canvas></canvas>
        </section>
      </div>
      <div class="gameDescription">
        <p class="score scorelevel"></p>
        <p class="level scorelevel"></p>
        <img id="keyboard" src="img/keyboard (2).png" width="100px" height="100px">
        <p id="textDescription">Move your character by using the arrow keys. Avoid the sharks and swim to all the fish to see if you can find nemo!</p>
      </div>
    </div>
    `); //wie kann ich bild hier einfügen? mit new Image?
    
   
    let gameContainer = document.querySelector("#game-container");
    let gameText= document.querySelector(".gameDescription");
    let startSound = document.getElementById("startSound");

    startSound.play();

    //Make the canvas responsive
    let width = gameContainer.offsetWidth;
    let height = gameContainer.offsetHeight;
    window.addEventListener("resize", ()=> {
    width = gameContainer.offsetWidth;
    height = gameContainer.offsetHeight;
    canvasGame.setAttribute("width", width);
    canvasGame.setAttribute("height", height);
    gameText.setAttribute("width", width);
    gameText.setAttribute("height", height);
    })

    let canvasGame= document.querySelector("canvas");

    canvasGame.setAttribute("width", width);
    canvasGame.setAttribute("height", height);
    

    gameText.setAttribute("width", width);
    gameText.setAttribute("height", height);
    
    //Create a new game
    let game = new Game(canvasGame);

    //Set direction by moving the arrows
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

    //Set direction to 0 if key is not pressed
    document.addEventListener("keyup", function(event){
      if (event.keyCode === 37 || event.keyCode === 39){
        game.player.setDirectionX(0);
      }
      if (event.keyCode === 38 || event.keyCode === 40) {
        game.player.setDirectionY(0);
      }
    });

  
    //Starts the loop (game.js)
    game.startLoop();
    game.setGameOverCallback(buildGameOverScreen);
    game.setGameWonCallback(buildWonScreen);
   
  };
  
  
  //Build the Gameover Screen

  function buildGameOverScreen(){
    let gameOverScreen = buildDom(`
    <audio id="loseSound" src="vid/You-lose-sound-effect.mp3"></audio>

    <section id="gameOverScreen">
    <div class="sharkflex">
    <img src="img/sharkgameover.png" width="300" height="300px">
    </div>
    <h1>Game Over!</h1>
    <p class="endscore"></p>
    <div class="flex-button">
    <button class="restart-button">Restart</button>
    <button class="newCharacter">Choose another character!</button>
    </div>
    </section>`);

    let loseSound = document.getElementById("loseSound");


    let endscore = document.querySelector(".endscore");
    endscore.innerHTML= `Score: ${points}`;
    endscore.style.color = "rgb(255, 110, 0)";
    endscore.style.fontSize = "30px";
    endscore.style.fontWeight = "bold";
    endscore.style.textAlign = "center";
    endscore.style.marginBottom = "30px";

    loseSound.play();

    let restartButton = document.querySelector(".restart-button");
    restartButton.addEventListener("click", buildGameScreen);

    let characterButton = document.querySelector(".newCharacter");
    characterButton.addEventListener("click", buildSplashScreen);

  };
  
  
  //Build the Won Screen

  function buildWonScreen(){
    let gameOverScreen = buildDom(`
    <audio id="wonSound" src="vid/Ta Da-SoundBible.com-1884170640.wav"></audio>
    <section id="gameWonScreen">
    <div class="sharkflex">
    <img src="img/foundNemo.png" width="80%" height="90%">
    </div>
    <h1>You found Nemo!</h1>
    <p class="endscore"></p>
    <div class="flex-button">
    <button class="restart-button">Restart</button>
    <button class="newCharacter">Choose another character!</button>
    </div>
    </section>`);
 
    let wonSound = document.getElementById("wonSound");


    let endscore = document.querySelector(".endscore");
    endscore.innerHTML= `Score: ${points}`;
    endscore.style.color = "rgb(255, 110, 0)";
    endscore.style.fontSize = "30px";
    endscore.style.fontWeight = "bold";
    endscore.style.textAlign = "center";
    endscore.style.marginBottom = "30px"

    wonSound.play();


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