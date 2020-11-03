
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbin,ground

function preload()
{	
}

function setup() {
	createCanvas(800, 700);


	
ground=createSprite(width/2, height-35, width,10);
ground.shapeColor=("yellow");


Matter.Bodies.circle(200,100,20)




engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	Matter.Bodies.circle(200,100,20)

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

}


function draw() {
  rectMode(CENTER);
 
 background(0);
  





  drawSprites();
 
}



