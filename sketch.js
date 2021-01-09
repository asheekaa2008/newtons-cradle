
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
	bob1= new Bob(200,500,40);
	bob2=new Bob(300,500,40);
	bob3=new Bob(400,500,40);
	bob4=new Bob(500,500,40);
	bob5=new Bob(600,500,40);
	roof=new Roof(100,200,700,30);

	rope1=new Roof(bob1.body,roof.body,-bobDiameter*2,0);
	rope2=new Roof(bob2.body,roof.body,-bobDiameter*2,0);
	rope3=new Roof(bob3.body,roof.body,-bobDiameter*2,0);
	rope4=new Roof(bob4.body,roof.body,-bobDiameter*2,0);
	rope5=new Roof(bob5.body,roof.body,-bobDiameter*2,0);
	




	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.dispaly();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.dispaly();
  rope5.display();
  
  drawSprites();
 
}



