import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const DemoCarousel= ()=> {

        return (
            <Carousel >
                <div>
                    <img src="logo3.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="logo3.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="logo3.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }


export default DemoCarousel;