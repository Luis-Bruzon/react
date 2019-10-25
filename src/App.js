import React from 'react';
import logo from './MYtineraryLogo.png';
import logo2 from './circled-right-2.png';
import logo3 from './homeIcon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Find your perfect trip. designed by insiders who knows and love their cities.
        </p>
        <p>
          Start Browsing
        </p>
          <img src={logo2} className="App-logo2" alt="logo2" />
          <p>
          Want to build your own Mytinerary?
        </p>
        <p class="inline-p">Log in </p>
        <p class="inline-p">Create account </p>
        <img src={logo3} className="App-logo3" alt="logo3" /> 
        </header>
    </div>
    
  );
}


export default App;

