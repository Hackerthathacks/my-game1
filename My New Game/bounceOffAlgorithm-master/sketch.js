//var tank;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10;
var bullet;



function preload() {
  tankImage = loadImage("images/Pngitem_6855005.png");
  tankiImage = loadImage("images/tanki.png");
  blueTankImage = loadImage("images/bluetank.png");
  bulletImage = loadImage("images/tankbullet1.png")
  
}
function setup() {
var canvas = createCanvas(500,500);
tank = createSprite(10000,800);
tank.addImage(tankImage);

tanki = createSprite(400,200);
tanki.addImage(tankiImage);
tanki.scale = 0.2;


blueTank = createSprite(100,200)
blueTank.addImage(blueTankImage);
blueTank.scale = 0.2;

wall1 = createSprite(500,0,1000,30)
wall1.shapeColor = "gray";
wall2 = createSprite(500,500,1000,30)
wall2.shapeColor = "gray";
wall3 = createSprite(500,250,30,500)
wall3.shapeColor = "gray";
wall4 = createSprite(0,250,30,500)
wall4.shapeColor = "gray";
}

function draw() {
background("white")

if (keyDown("space")) {
  bullet = createSprite(tanki.x,tanki.y)
  bullet.addImage(bulletImage)
  bullet.scale = 0.2;
  bullet.velocityX = -15; 
}
if (keyDown("G")) {
  bullet = createSprite(blueTank.x,blueTank.y)
  bullet.addImage(bulletImage)
  bullet.scale = 0.2;
  bullet.velocityX = 15;
  bullet.bounceOff(wall1);
  bullet.bounceOff(wall2);
  bullet.bounceOff(wall3);
  bullet.bounceOff(wall4);
}




if (keyDown(DOWN_ARROW)) {
tanki.y = tanki.y + 10;
}
if (keyDown(UP_ARROW)) {
tanki.y = tanki.y - 10;

}



if (keyDown("S")) {
blueTank.y = blueTank.y + 10;
}
if (keyDown("W")) {
blueTank.y = blueTank.y - 10;

}
    if(tankiisTouching(bullet)) {
tanki.x=1000000;

    }

  drawSprites();

}
 














