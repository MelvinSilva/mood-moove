import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const DemoCarousel = ( { api }) => {

    return (

        <div className='carouselmodif'>
            <Carousel >

                <div>
                    <img src={api.fields.cover_url ? api.fields.cover_url : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Pas_d%27image_disponible.svg/1200px-Pas_d%27image_disponible.svg.png"} alt="ok" />   
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