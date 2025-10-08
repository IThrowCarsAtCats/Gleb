var gleb = 0

//The setup function only happens once
function setup() {
	createCanvas(1200, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(145,255,255); //an RGB color for the canvas' background
  //circle
  stroke(0,0,0) // an RGB color for the circle's border
  strokeWeight(15)
  fill(gleb,255,0,); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(600, 250,400,500); // center of canvas, 20px dia
  stroke(mouseX)
  strokeWeight(0)
  fill(0,0,0)
  ellipse(500, 175, 125, 125)
  ellipse(700, 175, 125, 125)
  strokeWeight(15)
  stroke(0,0,0)
  line(475,350,600,400)
  line(715,350,600,400)
  stroke(255,255,255)
  fill(mouseX,mouseY,gleb)
  strokeWeight(10)
  textFont("Papyrus")
  textSize (40)
  color(200,200,200)
  text("GLEEB", 200,400)
  text("GLORB", 850,400)

}

function mousePressed(){
  if (gleb >= 255) {
    gleb=0;
  } else  
    gleb = gleb + 15;
  }