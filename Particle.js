class Particle {
  constructor(position) {
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.position = position.copy();
    this.lifespan = 255;
    this.w = random(1, 20);
    this.r = random(0, 255);
    this.g = random(0, 255);
    this.b = random(0, 255);
  }

  run() {
    this.update();
    this.display();
    this.checkEdges();
  }

  applyForce(aForce) {
    this.acceleration.add(aForce);
  }
  
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
    
    this.acceleration = createVector(0, 0);
  }

  display() {
    stroke(200, this.lifespan);
    strokeWeight(2);
    fill(this.r, this.g, this.b, this.lifespan);
    ellipse(this.position.x, this.position.y, this.w);
  }

  isDead() {
    return this.lifespan < 0;
  }

  checkEdges() {
    if (this.position.x > width || this.position.x < 0) {
      this.velocity.x *= -1; 
    }
    if (this.position.y > height || this.position.y < 0) {
      this.velocity.y *= -1;
    }
  }
}
