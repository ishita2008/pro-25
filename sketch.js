
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper
var box1,box2
var box3


function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	paper=new Paper(100,470,70)

	ground=new Ground(200,550,1500,30)

	box1=new Box(600,400,20,20)


	Engine.run(Engine)
	


	
  
}


function draw() {
	
  background("violet");

  

 

  paper.display();

  box1.display();
  

  ground.display();
  




  keypressed();


  
  drawSprites(); 
  
 
}
function keypressed() {
	if(keyDown(UP_ARROW)){
	
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
		
	}
}
	


