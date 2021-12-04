var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight = 300;
var score =0;

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //criar objetos de divisão
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //crie a 1ª linha de objetos plinko
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //crie a 2ª linha de objetos plinko
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //crie a 3ª linha de objetos plinko
for (var j = 75; j<=width; j=j+50){
  plinkos.push(new Plinko(j,275));
}
  
  //crie a 4ª linha de objetos plinko
for (var j = 50; j<width-10; j=j+50){
  plinkos.push(new Plinko(j,375));
}

  //criar objetos de partículas
  /*ball1 = new Particle(200,200,10);
  ball2 = new Particle(200,210,10);
  ball3 = new Particle(200,220.10);
  ball4 = new Particle(200,230,10);
  ball5 = new Particle(200,240,10);
  ball6 = new Particle(200,250.10);*/

  Engine.run(engine);
    
}
 


function draw() {
  rectMode(CENTER);
  background("black");
  textSize(20)
 
  Engine.update(engine);

  ground.display();
  /*ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();*/

  
  //exibir os plinkos
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //exibir os divisões
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //exibir as partículas
  if(frameCount%60 === 0) {
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
for (var h = 0; h<particles.length; h++) {
  particles[h].display();
}

}