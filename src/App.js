import React, {useState} from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import PlayerPage from './components/PlayerPage/PlayerPage';
import './App.css';

function App() {
  const [route, setRoute] = useState('landingPage');
  return (
    <div className="App">
  {
    (route === 'landingPage') ?
    <LandingPage setRoute={setRoute} /> 
    : (route === 'playerPage') ?
    <PlayerPage setRoute={setRoute} />
    : <div> { 'has been err' } </div>
  } 
      </div> )
}

export default App;
