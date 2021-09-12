const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var cannonBall;
var ball;
var balls = []
function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angle = 20
  tower = new Tower (100,370,150,300)
  cannon = new Cannon (150, 180, 120,200)
 
}

function draw() {
  background(189);
  image (backgroundImg, 0, 0, 1200, 600)
  
  tower.display()
  cannon.display()
  for(var i=  0; i < balls.length; i = i +1 ) {
    balls[i].display()
  }
  
}

function keyPressed () {
if (keyCode == DOWN_ARROW){
  ball = new CannonBall (150, 180, 50) 
  balls.push (ball)

}
}

function keyReleased () {
  if (keyCode == DOWN_ARROW){
    balls[balls.length-1].shooting()
    
  }

  

}
function showcannonballs ()
{}