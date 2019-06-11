let song;

function preload() {
  song = loadSound('./assets/js/p5/canvas/OctopusGarden.mp3');
}
function setup() {
   createCanvas(600, 400);
   background(0, 255, 0);
}


function draw() {
  if (song.isPlaying()) {
    background(255, 0, 0);
  } else {
    background(0, 255, 0);
  }
}

function mouseClicked() {
  if (song.isPlaying()) {
    song.stop()
  } else {
    song.play()
  }
}
