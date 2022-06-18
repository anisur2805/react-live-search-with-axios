import React, { useEffect, useState } from 'react';
import './CountryStateCity.css';

function CountryStateCity() {
    const [country, setCountry] = useState({});
    const [countryId, setCountryId] = useState('');
    const [state, setState] = useState([]);
    const [stateId, setStateId] = useState('');
    const [city, setCity] = useState([]);
    
    useEffect(()=> {
        const fetchCountries = async ()=> {
            const res = await fetch('')
            setCountry( await res.json())
        }
        fetchCountries();
    })
    const handleCountry = (e) => {
        setCountryId( e.target.value );
    }
    
    return (
        <div>
            <select name="country" onChange={ (e) => handleCountry(e) }>
                <option value="">--Select Country</option>
                <option value="1">One</option>
            </select>

            <select name="state">
                <option value="">--Select State</option>
            </select>

            <select name="city">
                <option value="">--Select City</option>
            </select>

            {
                Object.entries()
            }
        </div>
    );
}

export default CountryStateCity;