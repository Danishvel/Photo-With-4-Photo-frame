function preload(){

}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.position(110, 200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 50, 50, 300, 300);

fill(0, 0, 255);
  stroke(0, 0, 255);
  circle(35, 35, 70, 70);
  circle(365, 37, 70, 70);
  circle(35, 365, 70, 70);
  circle(365, 365, 70, 70);
  fill(255, 0, 255);
  stroke(255, 0, 255);
  rect(65, 15, 270, 40);
  rect(15, 65, 40, 270);
  rect(65, 345, 270, 40);
  rect(345, 65, 40, 270);
}

function take_snapshot(){
    Name = document.getElementById("name").value;
    save(Name + ".png");
}

function Next1() {
    window.location = "index3.html";
}