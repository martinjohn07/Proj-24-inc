
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbin,ground,box1,box2,Box

function preload()
{	
}

function setup() {
	createCanvas(800, 700);

	
	box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground = new Ground(200,height,400,20)








engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	

	
 	World.add(world, ground);

}


function draw() {
  rectMode(CENTER);
 
 background(0);
  



box1.display()
box2.display()
rect.display()

  drawSprites();
 
}



