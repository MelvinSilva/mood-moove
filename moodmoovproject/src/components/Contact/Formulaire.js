import React from 'react';

const Formulaire = () => {

    const envoiceAlert = () => {
        alert("Votre message à bien été envoyé");
    }

    return (
        <form className='formulaire' onSubmit={(alert) => envoiceAlert(alert)}>
            <h2>Contactez-nous</h2>
            <div className='formulaire__firstSecondName'>
                <input required type='text' className='formulaire__name formulaire__filho' placeholder='Nom'/>
                <input required type='text' className='formulaire__surname formulaire__filho' placeholder='Prénom' />
            </div>
            <input required type='text' className='formulaire__email formulaire__filho' placeholder='Email' />
            <textarea required className='formulaire__text formulaire__textaera' placeholder='Votre question' />
            <button type='submit' className='formulaire__envoie'>Envoyer</button>
        </form>
    )
};

export default Formulaire;