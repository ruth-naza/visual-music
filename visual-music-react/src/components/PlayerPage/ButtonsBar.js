import React from 'react';
import Play from '../../figma/play.svg';
import Stop from '../../figma/stop.svg';
import Pause from '../../figma/pause.svg'



// i put very-basic figma buttons and copy beneath the buttons that was alredy... 
// anyway its not for being shiny right now, more about orginzing some tech-env
export default function ButtonsBar({setIsSongStop, setIsSongPause,setIsNewSong, isFullSize}) {

const footerStyle = {
  padding: "1%",
  position: "fixed",
  left: "0",
  bottom: "15%",
  height: "0%",
  width: "100%"
};

const phantomStyle = {
  display: "fixed",
  padding: "7%",
  height: "2%",
  width: "100%"
};

 return (
      <div style={isFullSize ? phantomStyle : null}>
      <div style={isFullSize ? footerStyle : null}>
 	 	<img className="pointer" src={ Play } onClick={()=>{setIsNewSong(false); setIsSongStop(false); setIsSongPause(false)}} alt="play" />
 	 	<img className="pointer" src={ Stop } onClick={()=>{setIsSongStop(true); setIsSongPause(false)}} alt="stop" />
 	 	<img className="pointer" src={ Pause } onClick={()=>{setIsSongStop(false); setIsSongPause(true)}} alt="pause"/>
 	 <div id="icons">
                    <i onClick={()=>{setIsNewSong(false); setIsSongStop(false); setIsSongPause(false)}} className="fas fa-play pointer"></i>
                    <i onClick={()=>{setIsSongStop(false); setIsSongPause(true)}} className="fas fa-pause pointer"></i>
                    <i className="fas fa-camera-retro pointer"></i>
                </div>
                </div>
                </div>
)}