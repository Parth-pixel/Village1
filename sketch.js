var bg;
var ground, man, man1, farmer, farmer1;
var moneyGroup, enenemyGroup;
var coin;
var ground2;
var groundImage;
var invisibleGround;
var score = 0;
var man1;
var gameState = "start";
var tile1image,tile2image,tile3image,tile4image,tile5image;




function preload(){
 bg = loadImage("images/farm2.png");
 man = loadAnimation("images/Run__000.png","images/Run__001.png","images/Run__002.png",
 "images/Run__003.png","images/Run__004.png","images/Run__005.png",
 "images/Run__006.png","images/Run__007.png","images/Run__008.png","images/Run__009.png");
 farmer = loadAnimation("images/Run (1).png","images/Run (2).png","images/Run (3).png",
 "images/Run (4).png","images/Run (5).png","images/Run (6).png","images/Run (7).png","images/Run (8).png");
 coin = loadImage("images/coin.png");
 groundImage = loadImage("images/ground.jpg");
 tile1image = loadImage("images/tile1.png")
 tile2image = loadImage("images/tile2.png")
 tile3image = loadImage("images/tile3.png")
 tile4image = loadImage("images/tile4.png")
 tile5image = loadImage("images/tile5.png")
}

function setup() {
  createCanvas(1500,650);
  ground = createSprite(1400,450,20,20);
  ground.addImage(bg);
  ground.velocityX = -5;
  ground.scale = 0.4;

  ground2 = createSprite(800,650,20,20);
  ground2.addImage(groundImage);
  ground2.velocityX = -5;
  
  invisibleGround = createSprite(390,560,700,20);
  invisibleGround.visible = false;
 
  farmer1 = createSprite(50,500,20,20);
  farmer1.addAnimation("running",farmer);
  farmer1.scale = 0.4;
  //farmer1.velocityX=2;
  farmer1.debug = true;
  farmer1.setCollider("rectangle",0,0,100,100);

enemyGroup = new Group();
moneyGroup = new Group();
  //farmer1.velocityX = 1;
}

function draw() {
  if(gameState === "intro"){
    background(bg);
    text("Hello Everyone.. These villagers are suffering from poverty and need money. Please help them in collecting some money. Let's go. Press Enter to play")
    if(keyDown(ENTER)){
      gamestate === "start";
    }
  }
  
  if(gameState === "start"){
  text("Save Your Village",100,100);
background("white");
if(ground.x<0){
  ground.x = 1100;
}
if(ground2.x<600){
  ground2.x = ground2.width/2;
}
if(keyDown(UP_ARROW)){
  farmer1.y = farmer1.y - 10 ;
}
farmer1.y = farmer1.y  + 3;

if(score === 10){
  ground.velocityX = -10;
  ground2.velocityX = -10;
}
//if(keyDown("space") && farmer1.y >= 159) {
 // farmer1.velocityY = -12;
//}

//farmer1.velocityY = farmer1.velocityY + 0.8

push();
textSize(20);
text("Score: "+score,50,50);
pop();

if(farmer1.isTouching(moneyGroup)){
  moneyGroup.destroyEach();
  score = score+1;
}
//farmer1.collide(ground);
spawnEnemy();
money();
spawnObstacles();
farmer1.collide(invisibleGround);
drawSprites();
  }
}

function spawnEnemy(){
  if(frameCount%100 === 0){
   var man1 = createSprite(1600,750,20,20);
    man1.addAnimation("running",man);
    man1.scale = 0.3;
    man1.velocityX = -3;
    enemyGroup.add(man1);
  }
 

}

function money(){
  if(frameCount%100 === 0){
    var money = createSprite(2000,600,20,20);
    money.addImage(coin);
    money.velocityX = -3;
    money.scale = 0.05;
    money.debug = false;
    money.setCollider("rectangle",0,0,money.width, money.height);
    moneyGroup.add(money);
    money.y = Math.round(random(100,550));
  }
}

function spawnObstacles(){
  if(frameCount%150 === 0){
   var hurdle = createSprite(1950,600,100,100);
   hurdle.velocityX = -4;
   var rand = Math.round(random(1,3));
   switch(rand) {
     case 1: hurdle.addImage(tile1image);
         break;
     case 2: hurdle.addImage(tile2image);
         break;
     case 3: hurdle.addImage(tile3image);
         break;
     case 4 : hurdle.addImage(tile4image);
         break;
     case 5 : hurdle.addImage(tile5image);
         break;


         default:break;
  }
}
}