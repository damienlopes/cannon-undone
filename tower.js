class Tower {
    constructor(x,y,w,h){
        var gp = { isStatic: true };
        this.tower = Bodies.rectangle(x, y, w, h, gp);
        World.add(world, this.tower);
       this.w = w
       this.h = h
       this.towerimg = loadImage("assets/tower.png")
    }
    display() {
        push ()
        imageMode (CENTER)
        image(this.towerimg,this.tower.position.x, this.tower.position.y, this.w, this.h);    
      pop() 
    }
    }