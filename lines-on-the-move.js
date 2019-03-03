function setup() {
  createCanvas(400, 400);
	 colorMode(HSB);
}

function draw() {
  background(255);

  for (var x = 10; x < width-10; x = x + 10) {
		stroke(x/2, 100, 100)
    line(x, height/2,200*(mouseX-200)/(200-mouseY)+x,0);
 }
}
