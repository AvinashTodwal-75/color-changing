var fixedRect;
var movingRect;
var avi;

function setup() {
  createCanvas(1200,600);

  fixedRect = createSprite(500,300,50,80);
  fixedRect.shapeColor = "red";

  movingRect = createSprite(200,200,60,70);
  movingRect.shapeColor = "yellow"

  avi = createSprite(700, 150, 50, 100);
  avi.shapeColor = "pink";
}

function draw() {
 background("lightblue");
 
 movingRect.x = World.mouseX;
 movingRect.y = World.mouseY;

 if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
   fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
   movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
   fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2
   ) {
     movingRect.shapeColor = "lime";
     fixedRect.shapeColor = "blue";
     avi.shapeColor = "purple";
     background("orange");
   }

 else {
   movingRect.shapeColor = "yellow";
   fixedRect.shapeColor = "red";
   avi.shapeColor = "pink";
   background("lightblue");
 }

 drawSprites();
}