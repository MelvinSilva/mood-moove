import React from 'react';
import axios from 'axios';
import { useEffect } from 'react'; 
import { useState } from 'react';
import ListeEvents from './ListeEvents';


const BlocUnik = () => {

    const [dataApi, setDataApi] = useState([])
    const [date, setDate] = useState("")
    const [genre, setGenre] = useState("")
    const [arrondissement, setArrondissement] = useState("")
    const [search, setSearch] = useState("")


    // APPEL DE L'API GENERALE
    useEffect(() => {
        axios.get(`https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-${searchFilter}&rows=500`)
            .then((res) => {
                setDataApi(res.data.records)
            })

    }, [search])  


    const searchFilter = `${search === "" ? "" : `&q=${search}`}`
    const dateFilter = `${date === "" ? "" : `&q=date_start%3E%22${date}%22`}`
    // condition stocké dans une variable pour filtrer si l'utilisateur ne selectionne aucune date

    const submitForm = (e) => { // fonction qui appel l'api au moment du click sur le formulaire
        e.preventDefault();
        axios.get(`https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-${searchFilter}${dateFilter}${genre}${arrondissement}&rows=500`)
            .then((res) => {
                setDataApi(res.data.records)
            })
    }


    return (
        <div>
            <div className='unik'>
                <form className='ouSortir' onSubmit={(e) => submitForm(e)}>
                    <p className='ouSortir__text'>OU SORTIR ?</p>
                    <input className="search" placeholder="Recherche ici" onChange={(e) => setSearch(e.target.value)}/>
                    <select className='ouSortir__btn1' onChange={(e) => setArrondissement(e.target.value)}>
                        <option value="">--Arrondissement--</option>
                        <option value="&refine.address_zipcode=75001">Paris 75001</option>
                        <option value="&refine.address_zipcode=75002">Paris 75002</option>
                        <option value="&refine.address_zipcode=75003">Paris 75003</option>
                        <option value="&refine.address_zipcode=75004">Paris 75004</option>
                        <option value="&refine.address_zipcode=75005">Paris 75005</option>
                        <option value="&refine.address_zipcode=75006">Paris 75006</option>
                        <option value="&refine.address_zipcode=75007">Paris 75007</option>
                        <option value="&refine.address_zipcode=75008">Paris 75008</option>
                        <option value="&refine.address_zipcode=75009">Paris 75009</option>
                        <option value="&refine.address_zipcode=75010">Paris 75010</option>
                        <option value="&refine.address_zipcode=75011">Paris 75011</option>
                        <option value="&refine.address_zipcode=75012">Paris 75012</option>
                        <option value="&refine.address_zipcode=75013">Paris 75013</option>
                        <option value="&refine.address_zipcode=75014">Paris 75014</option>
                        <option value="&refine.address_zipcode=75015">Paris 75015</option>
                        <option value="&refine.address_zipcode=75016">Paris 75016</option>
                        <option value="&refine.address_zipcode=75017">Paris 75017</option>
                        <option value="&refine.address_zipcode=75018">Paris 75018</option>
                        <option value="&refine.address_zipcode=75019">Paris 75019</option>
                        <option value="&refine.address_zipcode=75020">Paris 75020</option>
                    </select>

                    <input onChange={(e) => setDate(e.target.value)} className='ouSortir__date' type="date" id="date" />

                    <select className='ouSortir__btn1' onChange={(e) => setGenre(e.target.value)}>
                        <option value="">--Genre--</option>
                        <option value="&refine.tags=Art+contemporain">Art Contemporain</option>
                        <option value="&refine.tags=Atelier">Atelier</option>
                        <option value="&refine.tags=BD">BD</option>
                        <option value="&refine.tags=Balade">Balade</option>
                        <option value="&refine.tags=Brocante">Brocante</option>
                        <option value="&refine.tags=Cin%C3%A9ma">Cinéma</option>
                        <option value="&refine.tags=Cirque">Cirque</option>
                        <option value="&refine.tags=Clubbing">Clubbing</option>
                        <option value="&refine.tags=Concert">Concert</option>
                        <option value="&refine.tags=Conf%C3%A9rence">Conférence</option>
                        <option value="&refine.tags=Danse">Danse</option>
                        <option value="&refine.tags=Enfants">Enfants</option>
                        <option value="&refine.tags=Expo">Expo</option>
                        <option value="&refine.tags=Gourmand">Gourmand</option>
                        <option value="&refine.tags=Histoire">Histoire</option>
                        <option value="&refine.tags=Humour">Humour</option>
                        <option value="&refine.tags=Innovation">Innovation</option>
                        <option value="&refine.tags=LGBT">LGBT</option>
                        <option value="&refine.tags=Litt%C3%A9rature">Littérature</option>
                        <option value="&refine.tags=Loisirs">Loisirs</option>
                        <option value="&refine.tags=Musique">Musique</option>
                        <option value="&refine.tags=Nature">Nature</option>
                        <option value="&refine.tags=Peinture">Peinture</option>
                        <option value="&refine.tags=Photo">Photo</option>
                        <option value="&refine.tags=Salon">Salon</option>
                        <option value="&refine.tags=Sciences">Sciences</option>
                        <option value="&refine.tags=Solidarit%C3%A9">Solidarité</option>
                        <option value="&refine.tags=Spectacle+musical">Spectacle musical</option>
                        <option value="&refine.tags=Sport">Sport</option>
                        <option value="&refine.tags=Street-art">Street-art</option>
                        <option value="&refine.tags=Th%C3%A9%C3%A2tre">Théatre</option>
                    </select>
                    <button type="submit" className='ouSortir__btnVal'>VALIDER</button>
                </form>

            </div>
            <div>
                {dataApi.map((api, key) => (   // on map le tableau avec les données de notre api
                    <ListeEvents api={api} key={key} />   // "api" est un props connecté à ListeEvents
                ))}
            </div>
        </div>
    );
};

export default BlocUnik;