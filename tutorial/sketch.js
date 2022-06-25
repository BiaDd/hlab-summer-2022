/**
 * TUTORIAL START
 * 
 * こんにちは、
 * 
 */

var counter = 0;


function increment() {
    counter += 1;
}

function decrement() {
    if (counter > 0) 
        counter -=1;
}


function setup() {
    // Create the canvas
    createCanvas(displayWidth*0.9, displayHeight*0.8);

    button = createButton('つづく');
    button.position(displayWidth*0.79, displayHeight*0.69);
    button.style('font-size', '30px');
    button.style('background-color', color(200,255,255));
    button.size(150, 50);
    button.mousePressed(increment);

    button = createButton('もどる');
    button.position(displayWidth*0.11, displayHeight*0.69);
    button.style('font-size', '30px');
    button.style('background-color', color(200,255,255));
    button.size(150, 50);
    button.mousePressed(decrement);
}

function draw() {
    if (counter == 0) {
        // set the background color
        // background(red, green, blue)
        background(222, 60, 95);
        /**
         * This is how you write
         * 
         * textSize() sets the size of the text
         * textSize(50) sets text size 50
         * 
         * text() takes in the text and the location you want
         * text("hello world!", 100, 100) writes out hello world at 100, 100
         * 
         */
        textSize(30);
        text("こんにちは、チュートリアルへようこそ", 310, 100);
        textSize(20);
        text("click on the buttons below", 460, 200);
        text("\(★ω★)/", 310, 300);
        fill(200,255,255);
        
    }
    else if (counter == 1) {
        background(70, 184, 199);
        // Set colors
        fill(250, 160, 182, 157);
        stroke(127, 63, 120);

        // A rectangle
        //  rect(x_location, y_location, width, height)
        rect(40, 120, 120, 40);

        // You can make a square by having the same width and height!
        rect(40, 40, 40, 40);

        // An ellipse
        ellipse(240, 240, 80, 80);
        // A triangle
        triangle(300, 100, 320, 100, 310, 80);
        
        // A design for a simple flower
        translate(580, 200);
        ellipse(0, 0, 30, 30);
        noStroke();
        for (let i = 0; i < 10; i ++) {
            ellipse(0, 30, 20, 80, 20);
            rotate(PI/5);
        }

        fill(204);
        quad(189, 18, 216, 18, 216, 360, 144, 360);

        fill(255);
        arc(479, 300, 280, 280, PI, TWO_PI);
    }
    else {
        /**
         * Write your code here!
         * Draw any picture you want
         */
        background(252, 252, 252);
    }
}



/*
function mousePressed() {
    fill(200, mouseY, mouseX);
    rectMode(CENTER);
    rect(mouseX, mouseY, 50, 50);
}
  
*/