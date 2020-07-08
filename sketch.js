var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,paper
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    box1=new Dustbin(width/2,height-60,120,20);
	box2=new Dustbin(width/2-60,height-115,20,120);
	box3=new Dustbin(width/2+60,height-115,20,120);
	ground=new Ground(width/2,height-50,width,15);
	paper=new Paper(width/2,100,20)

	Engine.run(engine);
  
}


function draw() {
  background(0);
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paper.display();
  drawSprites();
 
}



