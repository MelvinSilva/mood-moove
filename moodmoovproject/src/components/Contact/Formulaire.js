import React from 'react';

const Formulaire = () => {
    return (
        <div className='formulaire'>
            <h2>Contactez-nous</h2>
            <div className='formulaire__firstSecondName'>
                <input type='text' className='formulaire__name formulaire__filho' placeholder='Nom'/>
                <input type='text' className='formulaire__surname formulaire__filho' placeholder='Prénom' />
            </div>
            <input type='text' className='formulaire__email formulaire__filho' placeholder='Email' />
            <textarea className='formulaire__text formulaire__textaera' placeholder='Votre question' />
            <button type='submit' className='formulaire__envoie'>Envoyer</button>
        </div>
    )
};

export default Formulaire;