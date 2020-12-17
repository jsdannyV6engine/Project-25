var ground;
var world, engine;
var dustbin_part1,dustbin_part2,dustbin_part3;
var paper;
var ground;
var dustbinImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
 	dustbinImg = loadImage("dustbinFinal.png")
}

function setup() 
{
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20)
	dustbin_part1= new Dustbin(600,670,200,20);
	dustbin_part2=new Dustbin(500,610,20,150);
	dustbin_part3=new Dustbin(710,610,20,150);
	paper= new Paper (100,600,50);

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("white");
  image(dustbinImg,505,430,200,238);
  Engine.update(engine);

 paper.display();
 ground.display();
 dustbin_part1.display();
 dustbin_part2.display();
 dustbin_part3.display();
}

function keyPressed()
{

	if(keyCode === UP_ARROW) 
	{

   Matter.Body.applyForce(paper.body,paper.body.position,{x:410,y:-410});

	}



}

