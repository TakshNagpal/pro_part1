function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

/// The game is a person who attempts to grow in size as he recieves more candy during running. 
/// PC - The person
/// NPC - The candy and finish line
/// A computer game