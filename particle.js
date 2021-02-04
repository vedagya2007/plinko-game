class Particle{
    constructor(x,y,r){
        var options ={ 
            restitution: 0.4 }
            this.r = r;
            this.color = color(random(0,260), random(0,105), random(0,315)) , random(0,167) , random(0,220), random(0,240), random(0,390)
            
            this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
            }
}