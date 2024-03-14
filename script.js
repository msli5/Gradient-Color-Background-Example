//introduce the variable
let topColor; 
let bottomColor;

function setup() {
  // Code here runs only once
  createCanvas(800, 600);
  

}

function draw() {
  // Code here runs continuously
  background(255);

  //pick your beginning and ending gradient colors
  topColor=color(255, 230, 255);
  bottomColor=color(102, 255, 102);

  //n/2 is used to evenly split the color into half on the canvas
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newColor = lerpColor(topColor,bottomColor,n/2);
    stroke(newColor);
    line(0,y,width, y);

  }


  

}

