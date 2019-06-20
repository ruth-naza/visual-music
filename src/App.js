import React, {useState} from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import PlayerPage from './components/PlayerPage/PlayerPage';
import SignIn from './components/forms/SignIn';
import Register from './components/forms/Register';
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
    : <div> 
      <SignIn />
      <Register />
     </div>
  } 
      </div> )
}

export default App;
