import { React, useContext } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import DisplayApi from './DisplayApi';
import NotResult from './NotResult';

const DemoCarousel = () => {
    const { resultApi } = useContext(DisplayApi)



    return (
        <div className='carouselmodif'>
            {resultApi.length === 0 && <NotResult />} {/* si aucun evenements on affiche le composant NotResult */}
            {/* si il y a au moins un evenement on affiche le Carousel ci dessous */}
            {resultApi.length > 0 && <Carousel className="componentCarousel" infiniteLoop showIndicators={false}>
                {resultApi.map((api, key) => ( // on map le tableau avec les données de notre api SI)
                    <div api={api} key={key} >
                        <div className="card-carousel"><h1>{api.fields.title}</h1>
                            {api.fields.date_description && <h5><span>📅 </span>DATE :<br /> {api.fields.date_description.split("<br />").join(" ")}</h5>}<br />
                            {api.fields.address_name && <h5><span>📍 </span>ADRESSE :<br /> {api.fields.address_name} - {api.fields.address_street}, {api.fields.address_zipcode} {api.fields.address_city}</h5>}<br />
                            {api.fields.price_detail &&  <h5><span>💶 </span> PRIX :<br />{api.fields.price_detail}</h5>}<br />
                            {api.fields.access_link && <p><a className="link" href={api.fields.access_link}>Voir le site de l'évenement</a></p>}
                        </div>
                        <img src={api.fields.cover_url ? api.fields.cover_url : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Pas_d%27image_disponible.svg/1200px-Pas_d%27image_disponible.svg.png"} alt="ok" />
                    </div>

                ))}
            </Carousel>}
        </div>
    );
}


export default DemoCarousel;