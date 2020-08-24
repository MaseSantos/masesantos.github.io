import React, { Component } from 'react';
import Carousel from 'react-material-ui-carousel';
import { withStyles } from "@material-ui/core/styles";
import './carousel.css'

const styles = (theme) => ({
  main: {
    autoPlay: false,
    startAt: 1,
    animation: "slide",
  },
});

class InfoCarousel extends Component {
    render() {
        return (
          <>
            <Carousel
              className="carousel"
              navButtonsAlwaysVisible={true}
              style={styles.main}
              autoPlay={false}
              startAt={0}
              animation={"slide"}
              //   width={"50%"}
            >
              {/* ITEM IN CAROUSEL!!! */}
              <center>
                <div className="about-me">
                  <center>
                    <h3>About Me</h3>
                  </center>
                  <p>
                    <i>
                      I'm a software engineer and creative from Minnesota.
                      Passionate about learning new technologies and using code
                      to realize inclusive futures.
                    </i>
                  </p>
                </div>
              </center>
              <div className="buttons">
                <center>
                  {/* <a href="https://google.com" class="button">
                    Website
                  </a> */}
                  <a href="https://github.com/MaseSantos" class="button">
                    Github
                  </a>
                  <a href="https://github.com/MaseSantos" class="button">
                    LinkedIn
                  </a>
                </center>
              </div>
            </Carousel>
          </>
        );
    }
}


export default withStyles(styles)(InfoCarousel);
