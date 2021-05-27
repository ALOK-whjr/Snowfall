var bgImg , snowImage , snow2Image;
var snow , selector;

function preload(){
	bgImg = loadImage("snow2.jpg");
	snowImage = loadImage("snow4.webp");
	snow2Image = loadImage("snow5.webp");
}

function setup() {
  createCanvas(800,400);
}

function draw() {
  background(bgImg);
  if(frameCount%25 === 0){
	selector = Math.round(random(1,2));
	snow = createSprite(random(50,750),0);  
	snow.velocityY = 2;
    if(selector === 1){
		snow.scale = 0.1;
		snow.addImage(snowImage);
	} else{
		snow.scale = 0.1;
		snow.addImage(snow2Image);
	}
  }
  drawSprites();
}