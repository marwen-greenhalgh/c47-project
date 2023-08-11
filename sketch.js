var pc_running,pc
var npc_running,npc
var ground, invisibleGround, groundImage;
var bulletGroup, bulletImage;
function preload(){
  pc_running = loadAnimation("idle_front.png","idle_left.png","idle_right.png","idle_back.png")
  groundImage = loadImage("tank.jpg");
  npc_running = loadAnimation("idle_npc_left.png","walk1_npc_left.png")
  bulletImage = loadImage("bullet.png");
  
 /* trex_collided = loadAnimation("trex_collided.png");
  
  
  
  cloudImage = loadImage("cloud.png");
  
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
  
  restartImg = loadImage("restart.png")
  gameOverImg = loadImage("gameOver.png")
  
  jumpSound = loadSound("jump.mp3")
  dieSound = loadSound("die.mp3")
  checkPointSound = loadSound("checkPoint.mp3")*/
}
function setup() 
{
  createCanvas(1200,800);
 
  ground = createSprite(200,180,width,20);
  ground.addImage(groundImage)
  ground.velocityX = -2
  pc = createSprite(50,550,20,50);
  pc.addAnimation("running", pc_running);
  pc.scale=2 
  npc = createSprite(width-50,550,20,50)
  npc.addAnimation("running", npc_running);
  npc.scale=2 
  invisibleGround = createSprite(200,555,400,10);
  invisibleGround.visible = false;
}

function draw() 
{
background("tank.jpg");
if (ground.x < width/2){
  ground.x = ground.width/2;
}
if((keyDown("space")) ) {
  pc.velocityY = -12;
  touches=[]
}
pc.collide(invisibleGround);
pc.velocityY = pc.velocityY + 0.8
drawSprites()
}

function spawnbullets() {
  
  
    bullet.addImage(bulletImage);
    bullet.scale = 0.5;
    cloud.velocityX = 3;
    
    
    cloud.lifetime = 200;
    

    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
  
    cloudsGroup.add(cloud);
  }
  
