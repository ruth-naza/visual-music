let song;
let slider;
let button;
let sliderRate;
let amp;
let volHistory = [];

function preload() {
  song = loadSound('./assets/js/p5/canvas/OctopusGarden.mp3');
}
function toggleSong() {
   if (song.isPlaying()) {
    song.stop();
    volHistory= []
  } else {
    song.play()
  }
}
function setup() {
   createCanvas(600, 400);
   background(0, 255, 0); 
   button = createButton('start/stop');
   button.mousePressed(toggleSong);
   sliderRate= createSlider(1, 1.5, 0, 0.01)
   amp = new p5.Amplitude()
}


function draw() {
  if (song.isPlaying()) {
    background(0, 0, 0);
    song.rate(sliderRate.value())
    let vol = amp.getLevel();
    volHistory.push(vol);
    stroke(255);
    noFill();
    beginShape(); 
    for (let i = 0; i< volHistory.length; i++) {
        let y = map(volHistory[i], 0, 1, height / 2, 0)
        vertex(i, y);
    }
    endShape();
    if (volHistory.length > width - 20) {
      volHistory.splice(0,1)
    }
    stroke(0, 255 ,255);
    line(volHistory.length, 0, volHistory.length, height)


  } else {
    background(255, 0, 0);
  }
}

