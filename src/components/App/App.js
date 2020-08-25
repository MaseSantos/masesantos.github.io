import React from 'react';
import Carousel from '../carousel/carousel';
import './App.css';
import ProfilePic from "../../images/profile-pic.png"
import InstagramIcon from "../../images/social-icons-03.png";
import TwitterIcon from "../../images/social-icons-01.png";
import GirlbossIcon from "../../images/social-icons-05.png";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={ProfilePic} className="user-pic" alt="Picture of Mase" />
        <div>
          <h2 className="header">🔥 THE MIDWEST MAMI 🔥</h2>
          <h5 className="subtitle">
            Software Engineer | Shapeshifting Creative
          </h5>
        </div>
        <Carousel className="carousel" />
        <div>
          <h3>Let's Get Social</h3>
          <div>
            <img
              className="important-links"
              src={InstagramIcon}
              alt="Instagram Logo"
            />
            <img
              className="important-links"
              src={TwitterIcon}
              alt="Twitter Logo"
            />
            <img
              className="important-links"
              src={GirlbossIcon}
              alt="Girlboss Logo"
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
