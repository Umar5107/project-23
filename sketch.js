const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var user, player_base;
var system, computer_base;
var base1img, base2img, playerimg;



function preload(){
base1img = loadImage("assets/base1.png");
base2img = loadImage("assets/base2.png");
playerimg = loadImage("assets/player.png");
 
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   player_base = new PlayerBase(300,height/2, 180, 150);
   computer_base = new ComputerBase(width-300,height/2,180,150);

   user = new Player(285,player_base.body.position.y-153,50,180);
   system = new Computer(width-285,computer_base.body.position.y-153,50,180);
  


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  player_base.display();
  computer_base.display();


   //display Player and computerplayer
   user.display();
   system.display();


}
