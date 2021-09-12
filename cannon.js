class Cannon {
    constructor (x,y,w,h) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h 
    angleMode (CENTER)

    this.angle = PI/7

    this.Cannonimg = loadImage ("assets/canon.png")
    this.Cannonbaseimg = loadImage ("assets/cannonBase.png")
    }

    display () {
        if (keyIsDown(RIGHT_ARROW)) {
            this.angle = this.angle + 0.01
        }

        if (keyIsDown(LEFT_ARROW)) {
            this.angle = this.angle - 0.01
        }

   
        fill ("grey")
        push () 
        translate (this.x,this.y)
        rotate (this.angle)
        imageMode (CENTER)
        image ( this.Cannonimg,0,0, this.w, this.h)
        
        pop ()
        image(this.Cannonbaseimg, 15, 60, 200, 200);
        //arc (this.x - 125, this.y + 130, 140, 200, PI, TWO_PI)
        noFill ()
    }
}