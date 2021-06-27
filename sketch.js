var spaceImg, tower;
var ufoImg, ufo, ufosGroup;
var rocket, rocketImg;
var excitingSound;
var gameEndSound;
var gameState = "play"

function preload(){
  spaceImg = loadImage("background.jpg");
  ufoImg = loadImage("ufo.png");
  rocketImg = loadImage("Rocket.png.png");
excitingSound = loadSound("mixkit-game-level-music-689.wav");
gameEndSound = loadSound("mixkit-arcade-retro-game-over-213.wav");
}

function setup() {
  createCanvas(600, 600);
  excitingSound.loop();

   space = createSprite(300,300);
   space.addImage("space",spaceImg);
  space.velocityY = 1;
  
  ufosGroup=new Group();
   

  rocket = createSprite(200,200,50,50);
  rocket.scale=0.050;
  rocket.addImage("rocket",rocketImg);

}

function draw() {
  background(200);
  
  if(gameState==="play"){ 


    if(keyDown("left_arrow")){
      rocket.x=rocket.x -3;
    }

    if(keyDown("right_arrow")){
       rocket.x=rocket.x +3;
    }

    if(keyDown("space")){
       rocket.velocityY=-5;
    }

rocket.velocityY=rocket.velocityY +0.8;

if(space.y > 400){
  space.y = 300
}


 
if(ufosGroup.isTouching(rocket) || rocket.y > 600 ){
  rocket.destroy();
  gameState="end";
  excitingSound.stop();
  
}

spawnUfos();
    drawSprites();
}

if(gameState==="end"){
 stroke("black");
 fill("red");
 textSize(30);
 text("GAME OVER",230,250);

}
}

function spawnUfos() {
  if(frameCount % 100 === 0) {
    var ufos = createSprite(200,-50,30,30);
    ufos.addImage(ufoImg);
    ufos.scale = 0.2;

    ufos.x=Math.round(random(120,400));
    ufos.velocityY = 2;
              

    ufos.lifetime = 800;
    ufosGroup.add(ufos);
 
  }
}