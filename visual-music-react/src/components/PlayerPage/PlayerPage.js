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
  const [isNewSong, setIsNewSong] = useState(false);
  const [isSongStop, setIsSongStop] = useState(true);
  const [isSongPause, setIsSongPause] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
// useEffect its React hooks equl to ComponentDidMount() and ComponentDidUpdate() (and actually so much more... :) )
// the brackets in the end of the function holds the triger for re-render the effect. in our case it's every time that the songArray updtae,
// the useEffect set the 'song' state to the last song in the array, and changing 'isNewSong' state to 'true' for re-active the Sketch ('isNewSong' turns back false when song start play...)  
// right now, there is only local music, and becuase of that the first useEffect function insert the first item into the songArray,
// but after receving API music in nextSong function, even the first song will get into the second useEffect function, and we'll delete the first one (or triger the first API call if needed...)
useEffect(() => {
      let newArray = [ rings ];
      setSongArray(newArray);
      return () => console.log
       },
[])

useEffect(() =>{
      setSong(songArray[songArray.length -1])
      setIsSongStop(true);
      setIsSongPause(false);
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
            <P5Wrapper sketch={sketch} song={song} isNewSong={isNewSong} isFullSize={isFullSize} isSongStop={isSongStop} isSongPause={isSongPause}/></div>
          </div>
          <ButtonsBar setIsSongStop={setIsSongStop} setIsSongPause={setIsSongPause} setIsNewSong={setIsNewSong} isFullSize={isFullSize} />
          </div>
		)
}