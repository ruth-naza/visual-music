// this example made just for the begging and to get used and famalliar with p5 syntax

// creating emptey array, each milisecond in the audio should send arguement to here 
let MiliSecondsArray = [];

function preload() {
  song = loadSound('./assets/js/p5/canvas/OctopusGarden.mp3');
}

function toggleSong() {
   if (song.isPlaying()) {
    song.stop();
        // it's possible in p5 to do a command such song.pause() and song.resume(). 
        // in case that the song fully stop, the next line delete the current history
    MiliSecondsArray= []
  } else {
    song.play()
  }
}

function setup() {
   createCanvas(600, 400);
   background(1000, 0, 255); 
           // creating sliders, first position-arg for width second for height
   sliderRed = createSlider(0, 255, 100);
   sliderRed.position(200, 200);
   sliderGreen = createSlider(0, 255, 0);
   sliderGreen.position(200, 350);
   sliderBlue = createSlider(0, 255, 255);
   sliderBlue.position(200, 500);

   button = createButton('start/stop');
   button.mousePressed(toggleSong);
   //in this example the data that insert to the array its the amp, not nessecary!
   amp = new p5.Amplitude()
}


function draw() {
  if (song.isPlaying()) {

        // setting dinamic background when music played, i know its very basic, but its for start :) (using UnSplash API?)
    const r = sliderRed.value();
    const g = sliderGreen.value();
    const b = sliderBlue.value();
    background(r, g, b);

          // the 3 lines, check y height 
     let vol = amp.getLevel();
    MiliSecondsArray.push(vol);
    stroke(255);
    noFill();
    beginShape(); 
    for (let i = 0; i< MiliSecondsArray.length; i++) {
        let y = map(MiliSecondsArray[i], 0, 1, height / 2, 0)
        vertex(i, y);
    }
    endShape();
    stroke(255);
    noFill();
    beginShape(); 
    for (let i = 0; i< MiliSecondsArray.length; i++) {
        let y = map(MiliSecondsArray[i], 0, 1, height / 4, 0)
        vertex(i, y);
    }
    endShape();
    stroke(255);
    noFill();
    beginShape(); 
    for (let i = 0; i< MiliSecondsArray.length; i++) {
        let y = map(MiliSecondsArray[i], 0, 1, 3 * height / 4, 0)
        vertex(i, y);
    }
    endShape();
        // the margin-end of the blue line is 50
    if (MiliSecondsArray.length > width - 50) {
      MiliSecondsArray.splice(0,1)
    }
    stroke(0, 255 ,255);
    line(MiliSecondsArray.length, 0, MiliSecondsArray.length, height)


  } else {
    background(100, 0, 255);
  }
}

