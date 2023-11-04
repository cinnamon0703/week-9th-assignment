class ParticleSystem {
  constructor(position){
  this.origin = position.copy();
  this.particles = []
  }
  
  addParticle() {
    this.particles.push(new Particle(this.origin));
  }
  
  add(aForce) {
    for (let p of this.particles) {
      p.applyForce(aForce);
    }
  }

 run() {
   for (let i = this.particles.length-1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
     
//      let g = createVector(0, 0.05);
//      p.applyForce(g);
     
    if (p.isDead()) {
      this.particles.splice(i, 1);
 }
}
 }
}
