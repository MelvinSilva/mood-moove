import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Rating } from 'react-simple-star-rating';
import ListeAvis from './ListeAvis';


const Avis = () => {
    const [newsData, setNewsData] = useState([]);
    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("")
    const [rating, setRating] = useState(0) // valeur a zero etoile


    useEffect(() => {
        getData()

    }, [])

    const getData = () => {
        axios.get("http://localhost:3001/articles")
            .then((res) => setNewsData(res.data)); // appel de l'API locale (JSON)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3001/articles", { // envoi du formulaire 
            author: author,
            content: content,
            date: Date.now(), // date du jour
            star: rating,
        }).then(() => {    // remise a zero value
            setAuthor("");
            setContent("");
            getData(); // chercher la data
        })

    };

    // Remise a zero
    const handleRating = (rate) => {
        setRating(rate)
        
    }

    return (
        <div>
            <div className="news-container">
                <h1>Donnez nous votre avis</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input onChange={(e) => setAuthor(e.target.value)} type="text" placeholder="Nom" required value={author} />
                    <textarea onChange={(e) => setContent(e.target.value)} placeholder="Votre commentaire" required value={content}></textarea>
                    <div className='stars'>
                        <Rating
                            onChange={(e) => setRating(e.target.value)} value={rating}
                            onClick={handleRating}
                            ratingValue={rating}
                            size={40}
                            label
                            precision
                            transition
                            fillColorArray={['#f17a45', '#f19745', '#f1a545', '#f1b345', '#f1d045']}
                            emptyColor='#8a1c1c30'
                            className='foo' // Will remove the inline style if applied
                        />
                        {/* Use rating value */}


                    </div>
                    <input type="submit" value="Envoyer" />

                </form>
                <ul>
                    {newsData
                        .sort((a, b) => b.date - a.date) // classement plus recent plus ancien
                        .map(article => (
                            <ListeAvis key={article.id} article={article} />
                        ))}</ul>
            </div>
        </div>
    );
};

export default Avis;