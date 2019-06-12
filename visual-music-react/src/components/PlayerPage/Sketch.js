import React from 'react'
import octuopus from './OctopusGarden.mp3'
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';
import * as p5 from 'p5';

// the sketch getting argument p stand for 'prototype' - for more info check react-p5-wrapper npm package
export default function sketch(p) {
// this example made just for the begging and to get used and famalliar with p5 syntax, and syntax adjust for react

// creating emptey array, each milisecond in the audio should send arguement to here 
let MiliSecondsArray = [];
let song;
let sliderRed;
let sliderGreen;
let sliderBlue;
let button;
let amp;

p.preload = function() {
  song = p.loadSound(octuopus);
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
        // this awfull name its from according to the docs :/
 p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.isFullSize){
 p.resizeCanvas(p.windowWidth, p.windowHeight); 
    } else {
      p.resizeCanvas(p.windowWidth,400)
    }
  };

  p.windowResized = function (props) {
    if (MiliSecondsArray.length > p.windowWidth -70 ) {
      MiliSecondsArray.splice(0 ,70 + MiliSecondsArray.length - p.windowWidth)
    }
    if (props.isFullSize){
  p.resizeCanvas(p.windowWidth, p.windowHeight); 
    } else {
      p.resizeCanvas(p.windowWidth,400)
    }
  };

 p.setup = function() {
   p.createCanvas(p.windowWidth, 400);
   sliderRed = p.createSlider(0, 255, 100);
   sliderGreen = p.createSlider(0, 255, 0);
   sliderBlue = p.createSlider(0, 255, 255);

   button = p.createButton('start/stop');
   button.mousePressed(toggleSong);
   //in this example the data that insert to the array its the amp, not nessecary!
    amp = new p5.Amplitude()
}

 p.draw = function() {
         // setting dinamic background when music played, i know its very basic, but its for start :) (using UnSplash API?)
    const r = sliderRed.value();
    const g = sliderGreen.value();
    const b = sliderBlue.value();
    p.background(r, g, b);

  if (song.isPlaying()) {
          // the 3 lines, check y p.height 
     let vol = amp.getLevel();
    MiliSecondsArray.push(vol);
    p.stroke(255);
    p.noFill();
    p.beginShape(); 
    for (let i = 0; i< MiliSecondsArray.length; i++) {
        let y = p.map(MiliSecondsArray[i], 0, 1, p.height / 4, 0)
        p.vertex(i, y);
    }
    p.endShape();
    p.stroke(255);
    p.noFill();
    p.beginShape(); 
    for (let i = 0; i< MiliSecondsArray.length; i++) {
        let y = p.map(MiliSecondsArray[i], 0, 1, p.height / 2, 0)
        p.vertex(i, y);
    }
    p.endShape();
    p.stroke(255);
    p.noFill();
    p.beginShape(); 
    for (let i = 0; i< MiliSecondsArray.length; i++) {
        let y = p.map(MiliSecondsArray[i], 0, 1, 3 * p.height / 4, 0)
        p.vertex(i, y);
    }
    p.endShape();
        // the margin-end of the blue line is 70
    if (MiliSecondsArray.length > p.windowWidth - 70) {
      MiliSecondsArray.splice(0 ,1)
    }
    p.stroke(0, 255 ,255);
    p.line(MiliSecondsArray.length, 0, MiliSecondsArray.length, p.height)
  } 
}
}