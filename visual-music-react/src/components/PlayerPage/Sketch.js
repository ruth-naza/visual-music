// this canvas its only an example! some of the elemets here will probably stay and more important, like the
// full-size functionality or the point of pushing every miliSecond arg to an array,
// but the style, the shape of the draw etc are just v0.0.1 ...
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';
import * as p5 from 'p5';

// where is thie 'p' coming from? thank to react-p5-wrapper package we able to use p5.js syntax such preload or createCanvas, with tha addition of p.
export default function sketch(p) {
let shouldIPlay = false;
let shouldIDraw = false;
// creating emptey array, each milisecond in the audio should send arguement to here 
let MiliSecondsArray = [];
let song;
let sliderRed;
let sliderGreen;
let sliderBlue;
let amp;

// before there's a loaded song shouldIPlay = false, and after importing the first song turns to true. that equl to preload p5 method, but with option for dynamic prop song
const setShouldIPlay = () => {
  shouldIPlay = true
   }    
const setShouldIDraw = boolean => {
  shouldIDraw = boolean
}
 // those two functions below are for rerender as things happen in the app, the setup and draw vanila p5.js functions are next (adjust to the wrapper with p.)              
       
                 // this function re-render everytime that something in the props change, because of that all of the 'if' cases...
                  // this awfull name its according to react-p5-wrapper docs :/
            p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
                {props.isFullSize ?   p.resizeCanvas(p.windowWidth, p.windowHeight) :  p.resizeCanvas(p.windowWidth,400)};
                 if (shouldIPlay){
                    if (!props.isSongStop && !props.isSongPause && !song.isPlaying()) {
                     setShouldIDraw(true)
                     song.play()
                   } else if (!props.isSongStop && props.isSongPause) {
                     song.pause()
                   } else if (props.isSongStop) {
                     song.stop();
                     setShouldIDraw(false);
                     MiliSecondsArray= []
                              }}
                   if (props.isNewSong) {
                    song = p.loadSound(props.song);
                    setShouldIPlay()
                     }
                   }
            
            p.windowResized = function (props) {
                  if (MiliSecondsArray.length > p.windowWidth -70 ) {
                    MiliSecondsArray.splice(0 ,70 + MiliSecondsArray.length - p.windowWidth)
                  }
                   p.resizeCanvas(p.windowWidth,p.height)

                };

 p.setup = function() {
   p.createCanvas(p.windowWidth, 400);
// sliders can be adjust everything (!!) that running in the canvas, the song-pan, background colour etc... for the example i gave the sliders collor prop
   sliderRed = p.createSlider(0, 255, 100);
   sliderGreen = p.createSlider(0, 255, 0);
   sliderBlue = p.createSlider(0, 255, 255);
    //in this example the data that insert to the array and triger the lines draw, its the amp, not nessecary! (both amp and lines...)
    amp = new p5.Amplitude()
}

 p.draw = function() {
    const r = sliderRed.value();
    const g = sliderGreen.value();
    const b = sliderBlue.value();
    p.background(r, g, b);

  if (shouldIPlay){
    if(shouldIDraw){
          if(song.isPlaying()){
             let vol = amp.getLevel();
             MiliSecondsArray.push(vol);
          }
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
  } } 
}
}
