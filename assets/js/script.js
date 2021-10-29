let particleSystem = [];
let particleNum = 30;

function setup () {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < particleNum; i++) {
    //pushes particles into array
    particleSystem.push(new particle());
  }
  
}

function draw () {
 background (220);
 // draws particles inside array
 for (let i = 0; i < particleNum; i++) {
   particleSystem[i].move();
   particleSystem[i].display('purple');
   particleSystem[i].limit();
   if (i === 28) {
     particleSystem[i].display('black');
   }
 }
}

// class - data - constructor - functionality

class particle {
  //constructor is basically the setup
  constructor() {
    // use this. when inside of object
    this.xPos = random (width);
    this.yPos = random (height);
    // first paramater is speed in x-axis second paramater is speed in y-axis
    this.speed = createVector(random(-2, 2), random(-2, 2)); 
    this.size = random(0,10);
    this.c = random(0, 255);
  }
  // function that moves particles
  move () {
    this.xPos = this.xPos + this.speed.x;
    this.yPos = this.yPos + this.speed.y;
  }

  //display
  display () {
    noStroke();
    fill(this.c);
    circle( this.xPos, this.yPos, this.size);
    stroke(this.c);
    line(this.xPos, this.yPos, windowWidth/2, windowHeight/2)
  }

  // bounce particles around edge of canvas
  limit () {
    if (this.xPos > width || this.xPos < 0) {
      this.speed.x = -1 * this.speed.x
    }
    if (this.yPos > height || this.yPos < 0) {
      this.speed.y = -1 * this.speed.y
    }
  }

}