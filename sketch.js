const Constraint=Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  roof; 
var bob1, bob2, bob3, bob4, bob5
var rope1, rope2, rope3, rope4, rope5
var bobDiameter
//var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5


function setup() {
    createCanvas(800, 600);
bobDiameter=(40);
object1=new Object (200,400,10,10);

    engine = Engine.create();
    world = engine.world;
    /*bob1=new Bob (300,200,50);
    bob2=new Bob (100,200,50);
    bob3=new Bob (150,200,50);
    bob4=new Bob (200,200,50);
    bob5=new Bob (250,200,50);
    roof=new Roof(300,100,200,20);
    rope1= new Rope (bob1.body,roof.body,-bobDiameter*2,0)
    rope2= new Rope (bob2.body,roof.body,-bobDiameter*1,0)
    rope3= new Rope (bob3.body,roof.body,-bobDiameter*0,0)
    rope4= new Rope (bob4.body,roof.body,-bobDiameter*-1,0)
    rope5= new Rope (bob5.body,roof.body,-bobDiameter*-2,0)*/

    bob1 = new Bob(200,400,20);
     bob2 = new Bob(240,400,20); 
     bob3 = new Bob(280,400,20);
      bob4 = new Bob(320,400,20); 
      bob5 = new Bob(360,400,20);
       roof = new Roof(360,200,350,20); 
       rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,10); 
         rope2 = new Rope(bob2.body,roof.body,-bobDiameter,10); 
         rope3 = new Rope(bob3.body,roof.body,0,10); 
         rope4 = new Rope(bob4.body,roof.body,bobDiameter,10);
     rope5 = new Rope(bob5.body,roof.body,bobDiameter*2,10);


    //Create the Bodies Here.


    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  drawSprites();

  //object1.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  roof.display()
  rope1.display()
 rope2.display()
 rope3.display()
 rope4.display()
 rope5.display()
}

function keyPressed(){
    if(keyCode===UP_ARROW){
 Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-50, y:-50})
    }
}




