
function setup() {
    // Create the canvas
    createCanvas(720, 400);
    background(200);

    // Set colors
    fill(204, 101, 192, 127);
    stroke(127, 63, 120);
    
    // A rectangle
    rect(40, 120, 120, 40);

    rect(40, 40, 40, 40);

    // An ellipse
    ellipse(240, 240, 80, 80);
    // A triangle
    triangle(300, 100, 320, 100, 310, 80);

    // A design for a simple flower
    translate(580, 200);
    noStroke();
    for (let i = 0; i < 10; i ++) {
      ellipse(0, 30, 20, 80);
      rotate(PI/5);
    }
  }


  /**
  function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    //let div = createDiv('').size(10, 10);
    //div.center();
    //noLoop();
  }

  function draw() {
    background(100);
    translate(width/2, height/2 + 250);

    branch(100);
  }

  function branch(len) {
    push();
    if (len > 10) {
      strokeWeight(map(len, 10, 100, 1, 15));
      stroke(70, 40, 20);
      line(0,0,0,-len);
      translate(0, -len);
      rotate(random(-20, -30));
      branch(len * random(0.7,0.9));
      rotate(random(50, 60));
      branch(len * random(0.7,0.9));
    }
    else {
      //var r = 80 + random(-20, 20);
      //var g = 120 + random(-20, 20);
      //var b = 40 + random(-20, 20);

      var r = 220 + random(-20, 20);
      var g = 120 + random(-20, 20);
      var b = 170 + random(-20, 20);

      fill(r, g, b, 150);
      noStroke();

      beginShape();

      for (var i = 45; i < 135; i++) {
        var rad = 15;
        var x = rad * cos(i);
        var y = rad * sin(i);
        vertex(x, y);
      }
      for (var i = 135; i > 40; i--) {
        var rad = 15
        var x = rad * cos(i);
        var y = rad * sin(-i) + 20;
        vertex(x, y);
      }
      endShape(CLOSE);
    }

    pop();

  }
  **/
