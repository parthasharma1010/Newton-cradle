const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1, bobObject2, bobObject3, bobObject4,bobObject5, roofObject, 
var rope1, rope2, rope3, rope4, rope5;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

bobObject1=new Bob(200,450,70);
bobObject2=new Bob(200,500,70);
bobObject3=new Bob(200,550,70);
bobObject4=new Bob(200,600,70);
bobObject5=new Bob(200,650,70);
roofObject=new Roof(width/2,100,width,20);
rope1 = new Rope(bobObject1.body,roofObject.body, -bobDiameter*2,0)
rope2 = new Rope(bobObject2.body,roofObject.body, -bobDiameter*2,0)
rope3 = new Rope(bobObject3.body,roofObject.body, -bobDiameter*2,0)
rope4 = new Rope(bobObject4.body,roofObject.body, -bobDiameter*2,0)
rope5 = new Rope(bobObject5.body,roofObject.body, -bobDiameter*2,0)

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



