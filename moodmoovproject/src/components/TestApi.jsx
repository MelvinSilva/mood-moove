import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const TestApi = () => {

const [test, setTest] = useState([])

useEffect(() => {
    axios.get(`https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&rows=500`)
    .then((res) => {
        setTest(res.data.records)
        console.log(res.data.records)
    })
}, [])


    return (
        <div>
            <ul className="field-list">
                {test.map((testing) => (
                    <div>
                        <p><strong>{testing.fields.title}</strong></p>
                        <img src={testing.fields.cover_url} witdh="100" height="100"/>
                        <p><em>{testing.fields.address_name}</em> - {testing.fields.address_street}, {testing.fields.address_zipcode} {testing.fields.address_city}</p><br />

                        
                    </div>
                    
                ))}
            </ul>
        </div>
    );
};

export default TestApi;