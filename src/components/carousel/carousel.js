import React, { Component } from 'react';
import Carousel from 'react-material-ui-carousel';
// import {Paper} from '@material-ui/core';
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';

const styles = (theme) => ({
    main: {
        height: "300px",
    },
});

class RecentUserOppCarousel extends Component {
    render() {
        return (
            <>
                <Carousel
                    className="carousel"
                    navButtonsAlwaysVisible={true}
                    style={styles.main}
                >
                    {/* ITEM IN CAROUSEL!!! */}
                    <div>
                        <button>Hye</button>
                    </div>
                    <div>
                        <button>yo</button>
                    </div>
                </Carousel>
            </>
        );
    }
}


export default connect(RecentUserOppCarousel);
