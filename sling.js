class Sling{
    constructor(bodyA, ptb){
        var options = {
            bodyA: bodyA,
            pointB: ptb,
            stiffness: 0.02,
            length: 10
        }
        this.pt=ptb;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
 

    fly(){
this.sling.bodyA=null

    }

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var posB = this.pt;
        strokeWeight(4);
        line(pointA.x, pointA.y, posB.x, posB.y);
        }
    }
    
}