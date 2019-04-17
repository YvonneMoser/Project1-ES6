
function BackgroundImg (canvas){
  this.img = new Image();
  this.img.src = "img/LoopImg.jpg";
  this.speed = -2;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.x = 0;
};

BackgroundImg.prototype.draw = function (){
  this.ctx.drawImage(this.img, this.x, 0, this.img.width-1800,this.canvas.height);
  this.ctx.drawImage(this.img, this.x+this.img.width-1800, 0, this.img.width-1800,this.canvas.height);
 
  };


BackgroundImg.prototype.move = function (){
  if(this.x < 0 - this.img.width+1800){
    this.x = 0
  }else{
    this.x += this.speed;
  }
    
    //this.x %= this.canvas.width;
};