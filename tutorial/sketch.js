/**
 * TUTORIAL START
 * 
 * こんにちは、
 * 
 */

// variable declarations
var counter = 0;
var rectPlayer;
let cnv, b;

// javascript array
const backgroundArray = [
    [224, 187, 228],
    [149, 125, 173],
    [210, 145, 188],
    [255, 223, 211]
]

class RectanglePlayer {
    constructor(name, x, y) {
      this.name = name;
      this.rectX = x;
      this.rectY = y;
      this.color = (255,255,255);
    }

    moveRight() {
        this.rectX += 10;
        this.color = (this.rectX/2, this.rectY/2, this.rectX/2);
        this.show();
    }

    moveLeft() {
        this.rectX -= 10;
        this.color = (this.rectX/2, this.rectY/2, this.rectX/2);
        this.show();
    }

    moveUp() {
        this.rectY -= 10;
    }

    moveDown() {
        this.rectY += 10;
    }

    show() {
        fill(this.color);
        rect(this.rectX, this.rectY, 100, 100);
    }
}

function increment() 
{
    let randomColor = backgroundArray[Math.floor(Math.random() * backgroundArray.length)];
    background(randomColor[0], randomColor[1], randomColor[2]);
    counter += 1;
}

function decrement() 
{
    let randomColor = backgroundArray[Math.floor(Math.random() * backgroundArray.length)];
    if (counter > 0) {
        background(randomColor[0], randomColor[1], randomColor[2]);
        counter -=1;
    }
}


function setup() 
{
    // Create the canvas
    cnv = createCanvas(displayWidth*0.9, displayHeight*0.8);

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
    rectPlayer = new RectanglePlayer('player1', displayWidth/2, displayHeight/2);
}



function draw() {
    fill('white');
    textSize(30);
    text("Current Page: " + counter.toString(), displayWidth*0.9-300, displayHeight*0.8-500);
    if (counter == 0) 
    {
        // set the background color
        // background(red, green, blue)
        b = background(222, 60, 95);
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
    else if (counter == 1) // TODO : split the drawing page into 2 seperate tutorials
    {
        fill(200,255,255);
        textSize(30);
        text("Shapes", 300, 120);

        //b = background(70, 184, 199);
        // Set colors
        stroke(127, 63, 120);
        // Set line weight
        strokeWeight(4);

        // A rectangle
        // rect(x_location, y_location, width, height)
        fill(235, 181, 45);
        rect(40, 40, 120, 40);

        // You can make a square by having the same width and height!
        fill(68, 201, 119);
        rect(40, 120, 40, 40);

        // An ellipse
        // ellipse(x_location, y_location, width, height)
        fill(136, 73, 191);
        ellipse(400, 440, 80, 80);

        // A triangle
        // triangle(x_location, y_location, x_location_2, y_location_2, x_location_3, y_location_3)
        fill(232, 145, 139);
        triangle(200, 300, 420, 300, 210, 80);
        
        // A quadrilateral or shape with 4 points
        // quad(x1, y1, x2, y2, x3, y3, x4, y4)
        fill(204);
        translate(300, 0);
        quad(400, 318, 316, 28, 306, 400, 244, 360);
        translate(300, 0);

        fill(227, 7, 55);
        arc(400, 300, 280, 280, PI, TWO_PI);

    }
    else if (counter == 2) 
    {
        let x1 = 225
        let y1 = 75;
        let x2 = 400;
        let y2 = 200;
        fill('black');
        square(x1, y1, 50);
        // move the white square to the black square and refresh the page
        fill('white');
        square(x2, y2, 50);
        let d = dist(x1, y1, x2, y2);
        if (d == 0) {
            fill(200,255,255);
            textSize(30);
            text("good job! go on to the next one", 310, 120);
        } else {
            fill(200,255,255);
            textSize(30);
            text("Move the white square to the black square", 310, 120);
        }
    }
    else if (counter == 3) 
    {   
        if (mouseIsPressed)
        {
            let x=mouseX;     
            let y=mouseY;
            fill(255, 255, 255);
            ellipse(x,y,20,20)
            ellipse(x-15,y+5,20,20)
            ellipse(x-25,y-5,20,20)
            ellipse(x-17,y-20,20,20)
            ellipse(x,y-15,20,20)
            fill (225, 225, 225);
            ellipse(x-12,y-7,22,22) 
        }
    }
    else if (counter == 4) {
        rectPlayer.show();
        
        if (keyIsDown(UP_ARROW)) {

            rectPlayer.moveUp();
        }
        if (keyIsDown(DOWN_ARROW)) {
            rectPlayer.moveDown();
        }
        if (keyIsDown(LEFT_ARROW)) {
            rectPlayer.moveLeft();
        }
        if (keyIsDown(RIGHT_ARROW)) {
            rectPlayer.moveRight();
        }
    }
    else 
    {
        /**
         * Write your code here!
         * Draw any picture you want
         */
        

    }    
}