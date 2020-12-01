class stone{
constructor(x,y){


    var options={
        isStatic: false,
        restitution:0,
        friction:1,
        density:1.2

    }

    this.body=Bodies.circle(x,y, 40,options);
   this.body.position.x=x;
   this.body.position.y=y;
   this.image=loadImage("sprites/stone.png")
    World.add(world,this.body);
}
 display(){
ellipseMode(RADIUS);
ellipse(this.body.position.x,this.body.position.y,10);
imageMode(CENTER);
image(this.image,this.body.position.x,this.body.position.y,120,120);

    }


    



    
}








