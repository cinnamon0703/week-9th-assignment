class Particle {
  constructor(position) {
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.position = position.copy();
    this.w = random(1, 20);
    this.r = random(0, 255);
    this.g = random(0, 255);
    this.b = random(0, 255);
    this.shape = random(3);
  }

  run() {
    this.update();
    this.checkEdges();
    this.display();
  }

  applyForce(aForce) {
    this.acceleration.add(aForce);
  }
  
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration = createVector(0, 0);
  }

  display() {
    stroke(200);
    strokeWeight(2);
    fill(this.r, this.g, this.b);
    if (this.shape == 0) {
      ellipse(this.position.x, this.position.y, this.w); 
    } else if (this.shape == 1) {
      rect(this.position.x, this.position.y, this.w, this.w); 
    } else {
      triangle(this.position.x, this.position.y, this.position.x, this.position.y, this.position.x, this.position.y,); 
    }
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
