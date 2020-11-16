
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  
  monkey = createSprite(100,360,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,400,600,20);
  ground.velocityX = 3;
  
  bananaGroup = createGroup();
  obstaclesGroup = createGroup();
  
}


function draw() {
background("White");

 console.log(ground.x);
  
  textSize(15);
  fill("Green");
  text("survivalTime: "+survivalTime,300,50);
  
  survivalTime = Math.ceil(frameCount/frameRate());

  if(ground.x>300){
    ground.x = ground.width/2;
  }
  
  if(keyDown("Space") && monkey.y >=340){
    monkey.velocityY=-15;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8; 
  
  spawnbanana();
  spawnobstacles();
 
  
 monkey.collide(ground); 
  
 drawSprites();  
}

function spawnbanana(){
  if(frameCount % 80 === 0){
   banana = createSprite(600,200,20,20);
   banana.addImage(bananaImage);
   banana.scale = 0.1;
   banana.y = Math.round(random(180,250));
   banana.velocityX = -4;
   banana.lifetime = 300;
    
   banana.depth = monkey.depth;
   monkey.depth = monkey.depth+1;
    
   bananaGroup.add(banana);
  }
  
}

function spawnobstacles(){
  if(frameCount % 300 === 0){
  obstacles = createSprite(400,375,20,20);
  obstacles.scale = 0.1;
  obstacles.addImage(obstaceImage);
  obstacles.velocityX = -4;
  obstacles.lifetime = 100;
    
  obstaclesGroup.add(obstacles);  
  }
  
}


