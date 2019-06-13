import React, { useState, useEffect } from 'react' ;
import P5Wrapper from 'react-p5-wrapper';
import sketch from './Sketch';
import ButtonsBar from './ButtonsBar';
import octuopus from './OctopusGarden.mp3'
import rings from './Rings.mp3'
import './PlayerPage.css';

export default function PlayerPage({ setRoute }) {
  const [song, setSong] = useState(null);
  const [isNewSong, setIsNewSong] = useState(false)
  const [isSongStop, setIsSongStop] = useState(true);
  const [isSongPause, setIsSongPause] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
// useEffect its React hooks equl to ComponentDidMount() (and some more... :) )
// the empty brackets in the end of the function holds the triger for re-render the effect.
// right now, there's only local music so the effect need to be render only at the first-render path (there no mp3 import at Sketch.js),
// but after getting API output, a arguement in this brackets will triger the effect every new song, and we will be able to rid of toglleSong()
//  that made for local music purpuse and for figuering how draw diffrent song on the sketch and send dynamic song into the useEffect function
useEffect(() =>{
  setSong(octuopus);
  setIsSongStop(true);
  setIsNewSong(true);
  setIsSongPause(false)
  return () => console.log }
   , [])


  const toggleSong = () => {
    setIsSongStop(true);
    if (song === octuopus) {
      setSong(rings)
    } else {
      setSong(octuopus)
    }
    setIsNewSong(true);
    setIsSongPause(false)
  }

	return ( <div className="App">
           <div className="container">
        	 <div id="functionalities">
              <h1>Visual Music</h1>
        			<div className="row" id="row1">
                <img src={require("../../images/audio.png")} alt="music visualizer" height={200} width={600} />
              </div>
              <div className="row" id="row2">
                  <button onClick={()=>setRoute('landingPage')} id="upload">Back to home</button>
                  <button onClick={() => toggleSong()} id="upload">Switch-Song</button>
             </div>
               <button onClick={()=>setIsFullSize(!isFullSize)}> full-size </button>
            </div>
             <div className="p5center">
            <P5Wrapper sketch={sketch} song={song} isNewSong={isNewSong} isFullSize={isFullSize} isSongStop={isSongStop} isSongPause={isSongPause}/></div>
          </div>
          <ButtonsBar setIsSongStop={setIsSongStop} setIsSongPause={setIsSongPause} setIsNewSong={setIsNewSong} isFullSize={isFullSize} />
          </div>
		)
}