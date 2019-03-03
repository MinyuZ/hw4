function setup() {
  createCanvas(400, 400);
	 colorMode(HSB);
}

function draw() {
  background(255);

  for (var x = 20; x < width-20; x = x + 20) {
		stroke(x/2, 100, 100)
    line(x, height/2, mouseX, mouseY);
  }
}
