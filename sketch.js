
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world; 
var paper, ground;
var dustbin1, dustbin2, dustbin3;

function preload()
{
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(700,600,10);
	ground = new Ground(800,680,1600,20);
	dustbin1 = new Dustbin(1300,660,100,20);
    dustbin2 = new Dustbin(1240,620,20,100);
	dustbin3 = new Dustbin(1350,620,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
   

  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}
function keypressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:15, y: -15})
	}
}


