import React from 'react';

const ListeAvis = ({ article }) => { // on appel ici article directement qui est un props

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
        <div className="article">
            <div className="card-header">
                <h3>{article.author.toUpperCase()}</h3>
                <em>Posté le : {dateParser(article.date)}</em>
            </div>
            <p className="content">{article.content}</p>
            <p className="note"><span>●</span> {article.author} <em>a donné une note de : <span><strong>{article.star}/100</strong></span></em></p>
        </div>
    );
};

export default ListeAvis;