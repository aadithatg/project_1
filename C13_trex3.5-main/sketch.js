var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;
var cac1Img,cac2Img,cac3Img,cac4Img,cac5Img,cac6Img

var score = 0;

var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  
  cac1Img = loadImage("obstacle1.png")
  cac2Img = loadImage("obstacle2.png")
  cac3Img = loadImage("obstacle3.png")
  cac4Img = loadImage("obstacle4.png")
  cac5Img = loadImage("obstacle5.png")
  cac6Img = loadImage("obstacle6.png")


}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  
  text("score" + score,500,50)
  score = score + Math.round(frameCount/60)
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawnCactus();
  drawSprites();

}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 134
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

function spawnCactus() {
if(frameCount % 50 == 0) {
var cac  = createSprite(600,165,10,40)
cac.velocityX = -6
var rand = Math.round(random(1,6))
switch(rand) {
case 1:cac.addImage(cac1Img);
break;
case 2:cac.addImage(cac2Img);
break;
case 3:cac.addImage(cac3Img);
break;
case 4:cac.addImage(cac4Img);
break;
case 5:cac.addImage(cac5Img);
break;
case 6:cac.addImage(cac6Img);
break;

default:break
}
cac.scale = 0.5
cac.lifetime = 210
}





}