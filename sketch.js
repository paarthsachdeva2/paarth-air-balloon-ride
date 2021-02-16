var balloon;
var background,backgroundImage;
var balloonImage;
var database

function preload(){
backgroundImage=loadImage("Hot Air Ballon-01.png");
balloonImage=loadImage("Hot Air Ballon-02.png");
}


function setup() {
  createCanvas(2000,500);
  database=firebase.database;
  var balloon=createSprite(400, 200, 50, 50);
  balloon.addImage(balloonImage);
}

function draw() {
  background(backgroundImage);  

   if(keyDown(LEFT_ARROW)){
     balloon.x = balloon.x-10;
   }
   else if(keyDown(RIGHT_ARROW)){
     balloon.x = balloon.x+10;
   }
   else if(keyDown(UP_ARROW)){
     balloon.y = balloon.y-10;
   }
   else if(keyDown(DOWN_ARROW)){
     balloon.y = balloon.y+10;
   }

  drawSprites();
}