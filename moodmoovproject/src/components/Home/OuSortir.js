import React from 'react';
const OuSortir = () => {
    return (
        <form className='ouSortir'>
            <p className='ouSortir__text'>OU SORTIR ?</p>
            <select className='ouSortir__btn1'>
                <option value="">--Arrondissement--</option>
                <option value="75001">Paris 75001</option>
                <option value="75002">Paris 75002</option>
                <option value="75003">Paris 75003</option>
                <option value="75004">Paris 75004</option>
                <option value="75005">Paris 75005</option>
                <option value="75006">Paris 75006</option>
                <option value="75007">Paris 75007</option>
                <option value="75008">Paris 75008</option>
                <option value="75009">Paris 75009</option>
                <option value="75010">Paris 75010</option>
                <option value="75011">Paris 75011</option>
                <option value="75012">Paris 75012</option>
                <option value="75013">Paris 75013</option>
                <option value="75014">Paris 75014</option>
                <option value="75015">Paris 75015</option>
                <option value="75016">Paris 75016</option>
                <option value="75017">Paris 75017</option>
                <option value="75018">Paris 75018</option>
                <option value="75019">Paris 75019</option>
                <option value="75020">Paris 75020</option>
            </select>
            <input className='ouSortir__date' value={""} type="date" id="start" name="trip-start required"
       min="2022-01-01" max="2025-12-31" />
        <select className='ouSortir__btn1'>
                <option value="">--Genre--</option>
                <option value="Art+contemporain">Art Contemporain</option>
                <option value="Atelier">Atelier</option>
                <option value="BD">BD</option>
                <option value="Balade">Balade</option>
                <option value="Brocante">Brocante</option>
                <option value="Cin%C3%A9ma">Cinéma</option>
                <option value="Cirque">Cirque</option>
                <option value="Clubbing">Clubbing</option>
                <option value="Concert">Concert</option>
                <option value="Conf%C3%A9rence">Conférence</option>
                <option value="Danse">Danse</option>
                <option value="Enfants">Enfants</option>
                <option value="Expo">Expo</option>
                <option value="Gourmand">Gourmand</option>
                <option value="Histoire">Histoire</option>
                <option value="Humour">Humour</option>
                <option value="Innovation">Innovation</option>
                <option value="LGBT">LGBT</option>
                <option value="Litt%C3%A9rature">Littérature</option>
                <option value="Loisirs">Loisirs</option>
                <option value="Musique">Musique</option>
                <option value="Nature">Nature</option>
                <option value="Peinture">Peinture</option>
                <option value="Photo">Photo</option>
                <option value="Salon">Salon</option>
                <option value="Sciences">Sciences</option>
                <option value="Solidarit%C3%A9">Solidarité</option>
                <option value="Spectacle+musical">Spectacle musical</option>
                <option value="Sport">Sport</option>
                <option value="Street-art">Street-art</option>
                <option value="Th%C3%A9%C3%A2tre">Théatre</option>    
            </select>
            <button className='ouSortir__btnVal'>VALIDER</button>
        </form>
    );
};
export default OuSortir;