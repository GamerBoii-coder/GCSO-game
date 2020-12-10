var aventador63,wall; 

var speed,weight;





function setup() {

  createCanvas(1600,400);
  
  aventador63 = createSprite(50, 200, 50, 50);
aventador63.shapeColor = "white"
chiron.velocityX = Math.round(random(55,90));


wall = createSprite(1400,200,60,height/2);
wall.shapeColor = "yellow";


weight = random(400,1500)
}

function draw() {
  background("black");  
  
  if(wall.x - aventador63.x < (aventador63.width + wall.width)/2)
  {
    aventador63.velocityX = 0;
    var wreck = 0.5 * weight * speed * speed/22509;

    if(wreck > 180)
    {
      aventador63.shapeColor = "red";
    }
    if(wreck < 180 && wreck > 100)
    {
      aventador63.shapeColor = "yellow";
    }
    if(wreck < 100)
    {
      aventador63.shapeColor = "lime";
    }
  }
     









  drawSprites();
}