
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var gameState="PLAY";
var background,backgrondImg;
var Enemy,EnemyAnimation;
var bird,birdImg;

function preload()
{
birdImg=loadAnimation("bird.gif");	
backgroundImg=loadAnimation("2Ct5.gif");
EnemyAnimation=loadAnimation("eagle obstacle.gif");
}

function setup() {
	createCanvas(1000, 500);
	obstacleGrp=new Group();
backgr=createSprite(490,250,800,700);
backgr.addAnimation("moving",backgroundImg);
bird=createSprite(60,200,50,50);
bird.addAnimation("flying",birdImg);
bird.scale=0.4;
bird.debug=true;
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

backgr.scale=2;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if (gameState==="PLAY") 
	{
  
  if (keyCode===UP_ARROW) {
	  bird.velocityY=-3;
  }
  if (keyCode===DOWN_ARROW) {
	bird.velocityY=3;
}

spawnObstacles();
if (obstacleGrp.isTouching(bird)) {
	gameState==="END";
}

}

  drawSprites();
   if(gameState==="END"){
	textSize(30);
	fill("red");
text("gameOver",500,200);
backgr=velocityX=0;
bird.visible=false;
obstacleGrp.destroyEach();

}
}

function spawnObstacles(){
	if (frameCount%200===0) {
		var rand=Math.round(random(50,400))
		obstacle=createSprite(1000,rand,30,100);
obstacle.addAnimation("moving",EnemyAnimation);
obstacle.debug=true;
obstacle.setCollider("rectangle",0,0,160,80);
obstacle.velocityX=-3;
obstacle.lifetime=400;
obstacle.scale=1.2;
obstacleGrp.add(obstacle);
	}
}

