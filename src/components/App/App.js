import React from 'react';
import Carousel from '../carousel/carousel';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src="images/profile-pic.png" className="App-logo" alt="logo" />
        <h2>Mase Santos</h2>
        <h5>Software Engineer | Shapeshifting Creative</h5>
        <Carousel />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button>hey</button> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </div>
    </div>
  );
}

export default App;
