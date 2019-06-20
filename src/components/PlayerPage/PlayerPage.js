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
  const [counter, setCounter] = useState(2)
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
    if (counter === 4){
        setCounter(1);
        setCanvasBG(require('../../figma/canvasBG/4.svg'))
      }   
    else {
        setCanvasBG(require(`../../figma/canvasBG/${counter}.svg`))
}
  }

  const divStyle = {
  padding: "1%",
  position: "fixed",
  left: "0",
  bottom: "0%",
  height: "95%",
  width: "100%"
};

  const phantomStyle = {
  display: "fixed",
  padding: "7%",
  height: "90%",
  width: "100%"
};
  

	return ( 
           <div>
            <div className="container">
          	 <div id="functionalities">
                  <h1>Visual Music</h1>
            			<div className="row" id="row1">
                  <img src={require("../../images/audio.png")} alt="music visualizer" height={200} width={600} />
                  </div>
                   <div style={isFullSize ? phantomStyle : null}>
                   <div style={isFullSize ? divStyle : null}>
                 <button onClick={()=>setIsFullSize(!isFullSize)}> full-size </button>
                   </div>
                   </div>
             </div>
              <div>
               <P5Wrapper sketch={sketch} song={song} isNewSong={isNewSong} isFullSize={isFullSize} songStatus={songStatus} canvasBG={canvasBG} />
             </div>
             <ButtonsBar  setSongStatus={setSongStatus} setIsNewSong={setIsNewSong} isFullSize={isFullSize} />
             <button onClick={()=>setRoute('landingPage')} id="upload">Back to home</button>
             <button onClick={() => {setCounter(counter + 1); nextBG()}} id="upload">Switch-BG</button>
             <button onClick={() => nextSong()} id="upload">Switch-Song</button>
            </div>
          </div>
		)
}