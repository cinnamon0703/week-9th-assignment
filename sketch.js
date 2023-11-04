let gravity;
let systems = [];

function setup() {
  createCanvas(720, 400);
  
  gravity = createVector(0,random(-1,1));
}

function draw() {
  background(51);
  let wind = createVector(random(-10,10),random(-10,10));
  let n = createVector(0,0);
  for(let s of systems) {
    s.addParticle();
    s.run();
    s.add(gravity);
    if(keyIsPressed === true) {
      s.add(wind)
    } else {
      s.add(n)
    }
  }
  
}

function mouseClicked() {
  let mpos = createVector(mouseX, mouseY);
  let s = new ParticleSystem(mpos);
  systems.push(s);
  
  
  
}

