
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint


var boy,boy_image;
var ground;
var sling;
var back_img;
var tree, tree_img;
var rock;
var mango1,mango2,mango3,mango4,mango5,mango6;
function preload()
{
	boy_image=loadImage("sprites/boy.png");
	back_img=loadImage("sprites/field.png");
	tree_img=loadImage("sprites/tree.png");

	
}

function setup() {
	createCanvas(1200, 800);





	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	ground=createSprite(600,770,1200,40);


	boy=createSprite(350,640,50,50);
	boy.addImage(boy_image);
	boy.scale= 0.2;

	tree=createSprite(900,450,20,20);
	tree.addImage(tree_img);
	tree.scale=0.55;


	rock =new stone(400,350);
	
	mango1=new mango(900,400);
	mango2=new mango(1100,200);





	sling= new Sling(rock.body,{x:250,y:540});
	

	Engine.run(engine);

	

	ground=Bodies.rectangle(600,770,1200,40,{isStatic:true});
	World.add(world,ground);


	boyBody=Bodies.rectangle(350,640,50,50,{isStatic:true});
	World.add(world,boyBody);

	treeBody=Bodies.rectangle(900,450,20,20,{isStatic:true});
	World.add(world, treeBody);

	


}


function draw() {
  rectMode(CENTER);
  background(back_img);
boy.x=boyBody.position.x;
boy.y=boyBody.position.y;
tree.x=treeBody.position.x;
tree.y=treeBody.position.y;


detectCollision(rock,mango1);
detectCollision(rock,mango2);
drawSprites();
  
  mango1.display();
	mango2.display();

	sling.display();

  rock.display();




 
}

function mouseDragged(){

	rock.body.position.x=mouseX;
	rock.body.position.y=mouseY;

}

function mouseReleased(){

	sling.fly();

}

function detectCollision(lstone,lmango){

	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y,)
	if(distance<-lmango.r-lstone.r)
	{

		Matter.Body.setStatic(lmango.body,false);
	}


}

