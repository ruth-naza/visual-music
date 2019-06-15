import React, { useState, useEffect } from 'react' ;
import P5Wrapper from 'react-p5-wrapper';
import sketch from './Sketch';
import ButtonsBar from './ButtonsBar';
import octuopus from './OctopusGarden.mp3'
import rings from './Rings.mp3'
import './PlayerPage.css';

export default function PlayerPage({ setRoute }) {
  const [song, setSong] = useState(null);
  const [songArray, setSongArray] = useState([]);
  const [songStatus, setSongStatus] = useState('stop');
  const [isNewSong, setIsNewSong] = useState(false);
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

	return ( 
           <div>
           <div className="container">
        	 <div id="functionalities">
              <h1>Visual Music</h1>
        			<div className="row" id="row1">
                <img src={require("../../images/audio.png")} alt="music visualizer" height={200} width={600} />
              </div>
              <div className="row" id="row2">
                <button onClick={()=>setRoute('landingPage')} id="upload">Back to home</button>
                  <button onClick={() => nextSong()} id="upload">Switch-Song</button>
             </div>
               <button onClick={()=>setIsFullSize(!isFullSize)}> full-size </button>
            </div>
            <div>
            <P5Wrapper sketch={sketch} song={song} isNewSong={isNewSong} isFullSize={isFullSize} songStatus={songStatus}/>
            </div>
          <ButtonsBar  setSongStatus={setSongStatus} setIsNewSong={setIsNewSong} isFullSize={isFullSize} />
          </div>
          </div>
		)
}