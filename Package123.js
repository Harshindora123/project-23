class Package123  
  {
    constructor(x,y,width,height)
    {
        var options={
            isStatic:true
        }

        this.Package123Object=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.Package123Object);
        this.width=width;
        this.height=height;
        
    }

  display()
  {
      rectMode(CENTER);
      fill("red");
      rect(this.Package123Object.position.x,this.Package123Object.position.y,this.width,this.height);

  }
}