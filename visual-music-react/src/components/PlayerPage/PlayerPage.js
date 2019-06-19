import React, { useState, useEffect } from 'react' ;
import P5Wrapper from 'react-p5-wrapper';
import sketch from './Sketch';
import ButtonsBar from './ButtonsBar';
import octuopus from './OctopusGarden.mp3';
import rings from './Rings.mp3';
import './PlayerPage.css';

export default function PlayerPage({ setRoute }) {
  const [song, setSong] = useState(null);
  const [songArray, setSongArray] = useState([]);
  const [songStatus, setSongStatus] = useState('stop');
  const [isNewSong, setIsNewSong] = useState(false);
  const [counter, setCounter] = useState(1)
  const [canvasBG, setCanvasBG] = useState(require('../../figma/canvasBG/1.svg'))
  const [isFullSize, setIsFullSize] = useState(false);

useEffect(() => {
      let newArray = [ rings ];
      setSongArray(newArray);
      return () => console.log
      },
[])

useEffect(() =>{
      setSong(songArray[songArray.length -1])
      setSongStatus('stop');
      setIsNewSong(true);
     return () => console.log
    },
 [songArray])

  const nextSong = () => {     
    if (song === octuopus) {
      let newArray = [...songArray, rings]
      setSongArray(newArray)
    } else {
      let newArray = [...songArray, octuopus]
      setSongArray(newArray)
    }
  }

  const nextBG = () => {
    if (counter === 1){
        setCanvasBG(require('../../figma/canvasBG/2.svg'))
        setCounter(2)}
    else if (counter === 2) {
        setCanvasBG(require('../../figma/canvasBG/3.svg'))
        setCounter(3)
    }
    else if (counter === 3) {
        setCanvasBG(require('../../figma/canvasBG/4.svg'))
        setCounter(4)
    }
    else {
        setCanvasBG(require('../../figma/canvasBG/1.svg'))
        setCounter(1)
}
  }
  

	return ( 
           <div>
            <div className="container">
          	 <div id="functionalities">
                  <h1>Visual Music</h1>
            			<div className="row" id="row1">
                  <img src={require("../../images/audio.png")} alt="music visualizer" height={200} width={600} />
                  </div>
                 <button onClick={()=>setIsFullSize(!isFullSize)}> full-size </button>
             </div>
              <div>
               <P5Wrapper sketch={sketch} song={song} isNewSong={isNewSong} isFullSize={isFullSize} songStatus={songStatus} canvasBG={canvasBG} />
             </div>
             <ButtonsBar  setSongStatus={setSongStatus} setIsNewSong={setIsNewSong} isFullSize={isFullSize} />
             <button onClick={()=>setRoute('landingPage')} id="upload">Back to home</button>
             <button onClick={() => nextBG()} id="upload">Switch-BG</button>
             <button onClick={() => nextSong()} id="upload">Switch-Song</button>
            </div>
          </div>
		)
}