class Paper 
{
  constructor(x, y,radius) 
  {
    var options = 
    {
        'restitution':0.8,
        'friction':0.3,
        'density':1.2
        
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    this.image = loadImage("paper.png");
    this.radius = 90;
    
    World.add(world, this.body);
  }
  display()
  {
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    imageMode(RADIUS);
    rotate(angle);
    ellipseMode(CENTER);
    strokeWeight(4);
    stroke("white");
    fill("white");
    ellipse(0, 0, this.radius);
    image(this.image,-50,-50,this.radius,this.radius);
    pop();
  }
};
