import React from 'react';


const ListeEvents = ({ api }) => { // on appel ici API directement qui est un props 



    return (
            <div className="result-api">
                <h1><strong>{api.fields.title}</strong></h1>
                {/*<h3>{api.fields.date_start}</h3>*/}
                <h4>{api.fields.date_description}</h4> {/*.split("<br />").join(" ")*/}
                <img src={api.fields.cover_url ? api.fields.cover_url : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Pas_d%27image_disponible.svg/1200px-Pas_d%27image_disponible.svg.png"} alt="ok" />
                {/* si tu trouves une image dans l'api tu affiches cette image sinon tu affiches le lien ci dessus "image non dispo"*/}
                <h5><em>{api.fields.address_name}</em> - {api.fields.address_street}, {api.fields.address_zipcode} {api.fields.address_city}</h5>
                <p>{api.fields.price_detail}</p>
                {/* ICI NE MARCHE PAS CONFLIT CSS VOIR PLUS BAS <p><a className="link" href={api.fields.access_link ? api.fields.access_link : "" }>{api.fields.access_link ? "Voir le site de l'évenement" : "" }</a></p>*/}
                {api.fields.access_link ? (<p><a className="link" href={api.fields.access_link}>Voir le site de l'évenement</a></p>) : ("")}
                {/* si il y a un lien dans l'api tu affiches le lien avenc sa classe CSS correspondante.......................................sinon tu affiches rien */}
            </div>
    
    );
};

export default ListeEvents;