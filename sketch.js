var bullet, speed, wall, weight, damage;




function setup() {
  createCanvas(1600,400);
  thickness = random(55,103)

  bullet = createSprite(50,200,50,50)
  wall = createSprite(1200,200,thickness,height/2)
  bullet.shapeColor = "blue"
  wall.shapeColor = "yellow"

  speed = random(223,321)
  weight = random(100,252) 
  bullet.velocityX = speed;


}

function draw() {
  background("white")
  background(255,255,255);  
  wall.depth = bullet.depth + 1

  if(Collision(bullet, wall))
  {
      bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)
  }

  if(damage > 10)
  {
    wall.shapeColor = "red"
  } else 
  {
    wall.shapeColor = "green"
  }
      

  drawSprites();

}

function Collision(b, w)
{
bRightEdge = b.x + b.width 
wLeftEdge = w.x
if(bRightEdge >= wLeftEdge)
{
return true
}
return false
}