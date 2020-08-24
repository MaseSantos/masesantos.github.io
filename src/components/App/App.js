import React from 'react';
import Carousel from '../carousel/carousel';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img
          src="images/profile-pic.png"
          className="user-pic"
          alt="Picture of Mase"
        />
        <div>
          <h2 className="header">🔥 MASE SANTOS 🔥</h2>
          <h5 className="subtitle">
            Software Engineer | Shapeshifting Creative
          </h5>
        </div>
        <Carousel className="carousel" />
        <div>
          <h3>Let's Get Social</h3>
          <div className="important-links">
            <img
              src="images/social-icons-01.png"
              alt="Twitter Link"
              width="5%"
            />
            <img
              src="images/social-icons-03.png"
              alt="Instagram Link"
              width="5%"
            />
            <img
              src="images/social-icons-05.png"
              alt="Girlboss Link"
              width="5%"
            />
          </div>
          {/* <img
                  src="images/social-icons-06.png"
                  alt="DEV Link"
                  width="5%"
                  height="5%"
                /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
