var trex,trexrunning,ground,groundimage,invisibleground,cloudimage
function preload() {
cloudimage=loadImage("cloud.png")

  groundimage=loadImage("ground2.png");
  trexrunning=loadAnimation ("trex1.png","trex3.png","trex4.png") 
}

function setup() {
createCanvas(400, 400);
  trex = createSprite(200,200,10,10);
 trex.addAnimation ("running",trexrunning);
  trex.scale = 0.5;
trex.x = 50;
trex.y = 380;
 
  ground=createSprite(380,380,400,5)
ground.addImage(groundimage)
ground.velocityX=-7;
invisibleground=createSprite(50,390,400,5)
invisibleground.visible= false;
}

function draw() {
  background(150);

  if(ground.x<0){
  ground.x = ground.width/2;
}
 if(keyDown("space")&&trex.y>200){
    trex.velocityY = -8;
  } 
 trex.velocityY=trex.velocityY+0.5;
spawncloud();
  trex.collide(invisibleground)
  drawSprites();
}
function spawncloud(){
  if(frameCount%60===0){
    
 
 var cloud=createSprite(200,200,10,10);
    cloud.addImage(cloudimage);
cloud.velocityX=-5
cloud.scale=0.5
    cloud.depth=trex.depth ;
   trex.depth=trex.depth+1;
 cloud.y=random(280,320)
  }
}
