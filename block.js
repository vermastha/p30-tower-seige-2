class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibi=255;
        World.add(world, this.body);
      }
      display(){
        console.log(this.body.speed);
        if(this.body.speed <5){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }else{
        World.remove(world, this.body);
        push();
       // tint(this.visibi)
        this.visibi = this.visibi -5;
        tint(255, this.visibi)
       // rect(0,0,this.width, this.height);
       
       rect(0,0,this.width, this.height);
        pop();
        
      }
      }
}