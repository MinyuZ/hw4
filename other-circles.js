function setup() {
  createCanvas(400, 400);
	rectMode(CENTER);
}

var x = []; // new empty array
var y = []; // new empty array

function draw() {
  background(255);
  noFill();

  x.push(mouseX); // equivalent to append(x, mouseX)
  y.push(mouseY); // equivalent to append(y, mouseY)

  for (var i = 0; i < x.length; i = i + 10) {
    strokeWeight(3);
		beginShape();
		vertex(x[i]+x.length-i, y[i]+y.length-i);
		vertex(x[i]+i-x.length, y[i]+i-y.length);
		vertex(y.length+y[i]-i-30, x.length+x[i]-i-30);
		endShape();
  }

  x = x.slice(-59); // keep the last 50 x values
  y = y.slice(-59); // keep the last 50 y values
}
