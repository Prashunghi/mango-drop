class mango{
constructor(x,y){


var options={
isStatic:true,
restitution: 0,
friction: 1,
}

this.body=Bodies.circle(x,y,50,{options});
this.body.position.x=x;
this.body.position.y=y;
this.image=loadImage("sprites/mango.png");
World.add(world,this.body);


}

display(){

ellipseMode(CENTER);
ellipse(this.body.position.x,this.body.position.y,20);
imageMode(CENTER);
image(this.image,this.body.position.x,this.body.position.y,130,130);

}




}