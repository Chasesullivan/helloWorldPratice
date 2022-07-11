import logo from './logo.svg';
import './App.css';

import * as React from 'react';
import Button from '@mui/material/Button';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          lebron is the G.O.A.T
          
          
          
        </p>
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
      
          Learn React
        </a>
        <Button variant="contained"  className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">Hello World</Button>;

<Button variant="contained" className="App-link"
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer">Youtube
        </Button>
        
          
          
        
      </header>
    </div>
  );
}

export default App;
