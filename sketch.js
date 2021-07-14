const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var side;

var btn1;


function setup() {
  createCanvas(600,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(200,390,800,20);
  right = new Ground(590,350,15,400);
  left = new Ground(450,350,15,100);
  top_wall = new Ground(200,05,800,10);
  side = new Ground(8,200,10,400)

  var ball_options = {
    restitution : 0.95
  }

  btn1 = createImg("right.png");
  btn1.position(220,30);
  btn1.mouseClicked(hForce);
  btn1.size(50,50)

  ball = Bodies.circle(200,100,20, ball_options);
  World.add(world,ball)
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  side.show()
  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y,20);
}

function hForce(){
  Matter.Body.applyForce(ball,{x : 0, y : 0}, {x : 0.03, y : 0});

}
