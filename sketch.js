const Engine = matter.Engine;
const World = matter.World;
const Bodies = matter.Bodies;

var Engine, world;
var Ground;


function setup() {
  createCanvas(400,400);
  engine = engine.create();
  world = engine.world;

  var ground_options ={
    isStatic: true
  }
 
  ground = Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world.ground);
  
  var ball_options ={
    restitution: 1.0
  }

  ball = Bodies.circle(200,100,20, ball_options);
  World.add(world.ball);
  
  console.log(ground);

}

function draw() {
  background(255,255,255);
  engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x.ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x.ball.position.y,20,20);

  




  drawSprites();
}