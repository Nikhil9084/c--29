class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.sling);
    }

    attach(body){

    this.sling.bodyA = body;


    }

    fly(){
        this.sling.bodyA =null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            strokeWeight(4);
            stroke("red")
           // write stroke() to set the color to red

           // Write line() to draw a line from pointA to pointB
           line(pointA.x, pointA.y, pointB.x, pointB.y);

        }
    }
    
}