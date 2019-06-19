import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';
import * as p5 from 'p5';

export default function sketch(p) {
let shouldIPlay = false;
let shouldIDraw = false;
let MiliSecondsArray = [];
let song;
let amp;
let bg = (0);
let offsetX = 0;


const setShouldIPlay = () => {
  shouldIPlay = true
   }    
const setShouldIDraw = boolean => {
  shouldIDraw = boolean
}
            p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
                {props.isFullSize ?   p.resizeCanvas(p.width, p.windowHeight) :  p.resizeCanvas(p.width,400)};
                if (props.canvasBG) {
                 bg = p.loadImage(props.canvasBG)
               }
                if (shouldIPlay){
                    if (props.songStatus === 'play' && !song.isPlaying()) {
                     setShouldIDraw(true)
                     song.play()
                   } else if (props.songStatus === 'pause') {
                     song.pause()
                   } else if (props.songStatus === 'stop') {
                     song.stop();
                     setShouldIDraw(false);
                     MiliSecondsArray= []
                              }}

                   if (props.isNewSong) {
                    song = p.loadSound(props.song);
                    setShouldIPlay()
                     }

                   }
                           
            p.windowResized = function () {
                  p.resizeCanvas(p.windowWidth,p.height)
                };

 p.setup = function() {
   p.createCanvas(p.windowWidth, 400);
    amp = new p5.Amplitude();
  }

 p.mouseDragged = function() {
    offsetX += (p.mouseX - p.pmouseX)/3;
  }

 p.draw = function() {
    p.background(bg);
    if (MiliSecondsArray.length > p.windowWidth - 70) {
        p.translate(-MiliSecondsArray.length - 70 + p.windowWidth + 2 * offsetX , 0);
       }
  if (shouldIPlay){
   if(shouldIDraw){
    if(song.isPlaying()){
             let vol = amp.getLevel();
             MiliSecondsArray.push(vol);
          }
    p.stroke(255, 0 , 255);
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
    p.stroke(190, 255 , 0);
    p.noFill();
    p.beginShape(); 
    for (let i = 0; i< MiliSecondsArray.length; i++) {
        let y = p.map(MiliSecondsArray[i], 0, 1, 3 * p.height / 4, 0)
        p.vertex(i, y);
    }
    p.endShape();
    p.stroke(0, 255 ,255);
    p.line(MiliSecondsArray.length, 0, MiliSecondsArray.length, p.height);
 
  } 
 }
}
}
