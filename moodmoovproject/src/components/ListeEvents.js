import React from 'react';
import Header from './Header';


const ListeEvents = ({ api }) => { // on appel ici API directement qui est un props 

    return (
        <div>
            <p><strong>{api.fields.title}</strong></p>
            <img src={api.fields.cover_url} witdh="100" height="100" alt="ok" />
            <p><em>{api.fields.address_name}</em> - {api.fields.address_street}, {api.fields.address_zipcode} {api.fields.address_city}</p>
            <p>{api.fields.price_detail}</p>
            <p><a href={api.fields.access_link}>Voir l'évenement</a></p><br /><br /><br />
        </div>
    );
};

export default ListeEvents;