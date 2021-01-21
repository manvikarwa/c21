var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  wall = createSprite(1000, 200, 50, 80);
  wall.shapeColor = "green";
  wall.debug = true;
  car = createSprite(200, 200, 50, 50);
  car.shapeColor = "green";
  car.debug = true;
  car.velocityX = 7;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  //if(isTouching1(car,wall)){
   // car.velocityX = 0;
  //}

  bouceoff1(car,wall);
  drawSprites();


}

