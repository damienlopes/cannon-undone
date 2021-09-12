class CannonBall {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    var ball_features = { isStatic: true };
    this.ball = Bodies.circle(x, y, r, ball_features);
    World.add(world, this.ball);
    this.ballimg = loadImage("assets/cannonball.png");
  }

  display() {
    if (keyIsDown(DOWN_ARROW)) {
    }
    var pos = this.ball.position;
    push();
    imageMode(CENTER);
    image(this.ballimg, pos.x, pos.y, this.r, this.r);
    pop();
  }

  shooting() {
    console.log("hi");
    var velc = p5.Vector.fromAngle(((PI / 7) * 3.14) / 180);
    console.log ( velc.x * (180 / 3.14),)
    velc.mult(0.5);
    Matter.Body.setStatic(this.ball, false);
    Matter.Body.setVelocity(this.ball, {
      x: 15,
      y: 15,
    });
  }
}
