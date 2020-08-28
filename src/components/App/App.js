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
          <h2 className="header">🔥 MASE SANTOS 🔥</h2>
          <h5 className="subtitle">
            Software Engineer | Shapeshifting Creative
          </h5>
        </div>
        <Carousel className="carousel" />
        <div>
          <h3>Let's Get Social</h3>
          <div>
            <a href="https://www.instagram.com/the.midwest.mami/">
              <img
                className="important-links"
                src={InstagramIcon}
                alt="Instagram Logo"
              />
            </a>
            <a href="https://twitter.com/themidwestmami">
              <img
                className="important-links"
                src={TwitterIcon}
                alt="Twitter Logo"
              />
            </a>
            <a href="https://community.girlboss.com/masesantos">
              <img
                className="important-links"
                src={GirlbossIcon}
                alt="Girlboss Logo"
              />
            </a>
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
