import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const DemoCarousel = () => {

    return (

        <div className='carouselmodif'>
            <Carousel >

                <div>
                    <img src="../assets/Moodday/amis.png" />
                    <p className="legend">Photo 1</p>
                </div>
                <div>
                    <img src="../logo3.png" />
                    <p className="legend">Photo 2</p>
                </div>
                <div>
                    <img src="../logo3.png" />
                    <p className="legend">Photo 3</p>
                </div>

            </Carousel>
        </div>
    );
}


export default DemoCarousel;