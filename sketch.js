const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var binImg,bin;

function preload(){
    binImg = loadImage("Images/dustbingreen.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    paper = new Paper();

    bin = createSprite(964,520,20,20);
    bin.addImage(binImg);
    bin.scale = 0.45;
  
    //veronnum kondum thonalle...
   //i changed name to bin  for a change...
   // eppozhum oru change vende....
//creating parts of bin
    binPart1 = new Dustbin(902,505,10,120);
    binPart2 = new Dustbin(962,565,130,10);
    binPart3 = new Dustbin(1024,505,10,120);
}

function draw(){
    background("gray");
    Engine.update(engine);

    //text(mouseX+","+mouseY,200,200);

    paper.display();
    ground.display();
    binPart2.display();
    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:74,y:-75});
    }
}
