import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ListeEvents from './ListeEvents';
import { useContext } from 'react';
import DisplayApi from './DisplayApi';

const DemoCarousel = () => {
const {resultApi} = useContext(DisplayApi)
    return (

        <div className='carouselmodif'>
            <Carousel >
                <div>
                    {resultApi.map((api, key) => (  // on map le tableau avec les données de notre api SI  le formulaire a été soumis (&& = rendu conditionnel)
                        <ListeEvents api={api} key={key} />   // "api" est un props connecté à ListeEvents
                    ))}
                </div>
            </Carousel>
        </div>
    );
}


export default DemoCarousel;