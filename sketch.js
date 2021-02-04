const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const Bodies = Matter.Bodies  

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;
var backgroundIMG;
 
function preload(){

backgroundIMG = loadImage("plinko.jpg");

}

function setup() {
  createCanvas(800,730);

 engine = Engine.create();
 world = engine.world;
 ground = new Ground(width/2, height, width, 20)
 
 for (var k = 40; k <=width; k = k + 60){
   divisions.push(new Divisions(k, height-divisionHeight/3,13, divisionHeight))
 }

 for (var j = 45; j <=width; j=j+50){
   plinkos.push(new Plinko(j,75))}

   for (var j = 50; j <=width-20 ; j=j+50){
    plinkos.push(new Plinko(j,175))
  }

  for (var j = 55; j <=width; j=j+50){
    plinkos.push(new Plinko(j,275))
  }

  
  for (var j = 40; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,375))
  
  }
}

function draw() {
  
  strokeWeight(5);
  stroke("green")

  background("cyan");
 
  Engine.update(engine);
  for (var i = 0; i<divisions.length; i++){
    divisions[i].display();
  }

  for (var i = 0; i<plinkos.length; i++){
    plinkos[i].display();
  }

  if (frameCount% 20 === 0){
    particles.push(new Particle(random(width/2 -20,width/2 +30),10,10))
    score++;
  }

  for (var i = 0; i<particles.length; i++){
    particles[i].display();
  }
  ground.display();
  
}