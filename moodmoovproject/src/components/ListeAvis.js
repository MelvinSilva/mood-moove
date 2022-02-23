import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"

const ListeAvis = ({ article }) => { // on appel ici article directement qui est un props

    useEffect(()=> { // effet d'apparition des articles avec le scroll
        Aos.init({duration: 2000})

    }, [])

    const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString('fr-FR', { // modification de la date 
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        })
        return newDate
    }
    

    return (
        <div data-aos="fade-up">   
            <div className="article">
                <div className="card-header">
                    <h3>{article.author.toUpperCase()}</h3>
                    <em>Posté le : {dateParser(article.date)}</em>
                </div>
                <p className="content">{article.content}</p>
                <p className="note">{article.author} <em>évalue son expèrience avec <span><strong>{article.star/20} ★</strong></span></em></p>
            </div>
        </div>
    );
};

export default ListeAvis;