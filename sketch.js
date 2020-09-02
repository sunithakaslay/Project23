var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, engine, world;
var boxLeftSprite, boxLeftBody, boxBottomSprite, boxBottomBody, boxRightSprite, boxRightBody, boxPosition;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,50);
	groundSprite.shapeColor="white";

	boxPosition=width/2-100;
 	boxY=590;


 	boxLeftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxLeftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBottomSprite=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBottomSprite.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+40, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxRightSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxRightSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10, {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 ellipseMode(RADIUS);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
    
  if(keyDown("LEFT_ARROW")){
	 helicopterSprite.x = helicopterSprite.x - 20;
	
	 Matter.Body.translate(packageBody,{x:-20,y:0});
  }else if (keyDown("RIGHT_ARROW")) {
	helicopterSprite.x = helicopterSprite.x + 20;
	
	Matter.Body.translate(packageBody,{x:20,y:0});
  }
  else if(keyDown("DOWN_ARROW")){
	 Matter.Body.setStatic(packageBody,false);
  }
 // console.log(packageBody);
  drawSprites();
 
}

