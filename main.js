"use strict";


let imgPlayer = new Image();


function main(){

  let mainSection = document.querySelector("main");
  function buildDom(html){
    mainSection.innerHTML = html;
    return mainSection;
  };


  //Build the Start Screen
  function buildSplashScreen(){

    let splashScreen = buildDom(`
    <section>
    <div id="background-wrap">
    <div class="bubble x1"></div>
    <div class="bubble x2"></div>
    <div class="bubble x3"></div>
    <div class="bubble x4"></div>
    <div class="bubble x5"></div>
    <div class="bubble x6"></div>
    <div class="bubble x7"></div>
    <div class="bubble x8"></div>
    <div class="bubble x9"></div>
    <div class="bubble x10"></div>
</div>
    <section id="splash">
    <h1 class="splashH1">Finding Nemo!</h1>
    <div class="starttext"> Please help us to find Nemo!</br>
    Choose your Character to start the game!</div>
    
    <div class="flex-button-splash">
    <div class="flex-img-splash">
    <img class="startImg" src="img/PinClipart.com_nemo-clip-art_443652.png" width="80">
    <button class="pearl start-button">Pearl!</button>
    </div>

    <div class="flex-img-splash">
    <img class="startImg" src="img/squirt.png" width="85">
    <button class="racker start-button">Racker!</button>
    </div>

    <div class="flex-img-splash">
    <img class="startImg" id="doryImg" src="img/dory2.png" width="105">
    <button class="dory start-button">Dory!</button>
    </div>
    </div>
    <p class="hiddentext starttext">Move your character by using the arrow keys. Avoid the sharks and swim to all the fish to see if you can find nemo!</p>

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
    imgPlayer.src = "img/dory2.png";
    buildGameScreen();
  })

  let buttonRacker = document.querySelector(".racker");
    buttonRacker.style.borderRadius = "30px";
    buttonRacker.addEventListener("click", function(){
      imgPlayer.src = "img/squirt.png";
      buildGameScreen();
    });


  };



  //Build the Game Screen //vid/Dragon Bite-SoundBible.com-1625781385.wav

  function buildGameScreen(){
    let gameScreen = buildDom(`
    <audio id="bite" src="vid/shark3.mov"></audio> 
    <audio id="fishSound" src="vid/smw_coin.wav"></audio>
    <audio id="gridSound" src="vid/smw_stomp_koopa_kid.wav"></audio>
    <audio id="levelSound" src="vid/smw_save_menu.wav"></audio>
    <audio id="startSound" src="vid/Bubbling-SoundBible.com-1684132696 (1).wav"></audio>



    <div class="gameScreen">
      <div id="game-border">
        <section id="game-container">
          <canvas></canvas>
        </section>
      </div>
      <div class="gameDescription">
        <p class="score scorelevel"></p>
        <p class="level scorelevel"></p>
        <img class="hiddentext" id="keyboard" src="img/keyboard_blue.png" width="100px" height="100px">
        <p class="hiddentext" id="textDescription">Move your character by using the arrow keys. Avoid the sharks and swim to all the fish to see if you can find nemo!</p>
      </div>
    </div>
    `); 
    
   
    let gameContainer = document.querySelector("#game-container");
    let gameText= document.querySelector(".gameDescription");

    //Add sound at the start
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


    //Set direction (player.js) by moving the arrows
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

    //Set direction (player.js) to 0 if key is not pressed
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

    //Sets highscore on local Browser to the points of the actual round if the highscore is lower than the points 
    if (points > JSON.parse(window.localStorage.getItem("highScore"))){
      window.localStorage.setItem("highScore", JSON.parse(points))
    }
  };

  
  
  //Build the Gameover Screen

  function buildGameOverScreen(){
    let gameOverScreen = buildDom(`
    <audio id="loseSound" src="vid/You-lose-sound-effect.mp3"></audio>
    <div id="background-wrap">
    <div class="bubble x1"></div>
    <div class="bubble x2"></div>
    <div class="bubble x3"></div>
    <div class="bubble x4"></div>
    <div class="bubble x5"></div>
    <div class="bubble x6"></div>
    <div class="bubble x7"></div>
    <div class="bubble x8"></div>
    <div class="bubble x9"></div>
    <div class="bubble x10"></div>
</div>
    <section id="gameOverScreen">
    <div class="ImgFlex">
    <img class="gameOverImg" src="img/sharkgameover.png" width="45%" height="100%">
    </div>
    <h1 class="gameOver">Game Over!</h1>
    <p class="endscore"></p>
    <p id="highscore"></p>
    <div class="flex-button-splash">
    <button class="restart-button">Restart</button>
    <button class="newCharacter">Choose another character!</button>
    </div>
    </section>`);


    let loseSound = document.getElementById("loseSound");

    
    let highScore = JSON.parse(window.localStorage.getItem("highScore"));
    let highscore = document.getElementById("highscore");
    if (points > highScore){
      highscore.innerHTML =`Highscore: ${points}`;
    } 
    else{
      highscore.innerHTML =`Highscore: ${highScore}`;
    }

    //Add the score from the Gamescreen to the Gameover Screen
    let endscore = document.querySelector(".endscore");
    endscore.innerHTML= `Score: ${points}`;
    endscore.style.color = "rgb(91, 204, 245)";
    endscore.style.fontSize = "30px";
    endscore.style.fontWeight = "bold";
    endscore.style.textAlign = "center";
    endscore.style.marginBottom = "20px";
    highscore.style.color = "rgb(91, 204, 245)";
    highscore.style.fontSize = "20px";
    highscore.style.fontWeight = "bold";
    highscore.style.textAlign = "center";
    highscore.style.marginBottom = "20px";

    //Add sound to Gameover Screen
    loseSound.play();

    //Add Eventlistener to the buttons to come to the Gamescreen or Startscreen
    let restartButton = document.querySelector(".restart-button");
    restartButton.addEventListener("click", buildGameScreen);
    let characterButton = document.querySelector(".newCharacter");
    characterButton.addEventListener("click", buildSplashScreen);

  };
  
  
  //Build the Won Screen

  function buildWonScreen(){
    let gameOverScreen = buildDom(`
    <audio id="wonSound" src="vid/Ta Da-SoundBible.com-1884170640.wav"></audio>
    <div id="background-wrap">
    <div class="bubble x1"></div>
    <div class="bubble x2"></div>
    <div class="bubble x3"></div>
    <div class="bubble x4"></div>
    <div class="bubble x5"></div>
    <div class="bubble x6"></div>
    <div class="bubble x7"></div>
    <div class="bubble x8"></div>
    <div class="bubble x9"></div>
    <div class="bubble x10"></div>
</div>
    <section id="gameWonScreen">
    <div class="ImgFlex">
    <img src="img/foundNemo.png" width="80%" height="90%">
    </div>
    <h1>You found Nemo!</h1>
    <p class="endscore"></p>
    <div class="flex-button-splash">
    <button class="restart-button">Restart</button>
    <button class="newCharacter">Choose another character!</button>
    </div>
    </section>`);
 
    let wonSound = document.getElementById("wonSound");

    //Add the Score from Gamescreen to the Wonscreen
    let endscore = document.querySelector(".endscore");
    endscore.innerHTML= `Score: ${points}`;
    endscore.style.color = "rgb(91, 204, 245)";
    endscore.style.fontSize = "30px";
    endscore.style.fontWeight = "bold";
    endscore.style.textAlign = "center";
    endscore.style.marginBottom = "30px"

    //Add sound to the WonScreen
    wonSound.play();

    //Add Eventlistener to the buttons to come to the Gamescreen or Startscreen
    let restartButton = document.querySelector(".restart-button");
    restartButton.addEventListener("click", buildGameScreen);
    let characterButton = document.querySelector(".newCharacter");
    characterButton.addEventListener("click", buildSplashScreen);
  };

buildSplashScreen();
};


main();
window.addEventListener("load", main); 


