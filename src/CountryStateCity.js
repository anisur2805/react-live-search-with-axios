import { useEffect, useState } from "react";
import csc from "country-state-city";

export default function CountryStateCity() {
    const [countries, setCountries] = useState([]);
    const [countryId, setCountryId] = useState();

    const [states, setStates] = useState([]);
    const [stateId, setStateId] = useState("");

    const [cities, setCities] = useState([]);

    useEffect(() => {
        const getAllCountries = async () => {
            try {
                let countries = await csc.getAllCountries();
                setCountries(countries);
            } catch (err) {
                console.log(err);
            }
        };
        getAllCountries();
    }, []);

    useEffect(() => {
        const getAllStates = async () => {
            try {
                let states = await csc.getStatesOfCountry(countryId);
                setStates(states);
            } catch (err) {
                console.log(err);
            }
        };
        getAllStates();
    }, [countryId]);

    useEffect(() => {
        const getAllCities = async () => {
            try {
                let cities = await csc.getCitiesOfState(countryId, stateId);
                setCities(cities);
            } catch (err) {
                console.log(err);
            }
        };
        getAllCities();
    }, [countryId, stateId]);

    const handleCountry = (event) => {
        setCountryId(event.target.value);
    };

    const handleState = (event) => {
        setStateId(event.target.value);
    };

    const countryMapping = () => {
        console.log( "countries", countries )
        return countries.map((country, index) => {
            return (
                <option value={country.isoCode} key={index}>
                    {country.name}
                </option>
            );
        });
    };

    const statesMapping = () => {
        return states.map((state, index) => {
            return (
                <option value={state.isoCode} key={index}>
                    {state.name}
                </option>
            );
        });
    };

    const citiesMapping = () => {
        return cities.map((city, index) => {
            return (
                <option value={city.stateCode} key={index}>
                    {city.name}
                </option>
            );
        });
    };

    return (
        <div className="App">
            <h1>Country State City</h1>
            <select value={countryId} onChange={(e) => handleCountry(e)}>
                <option>Select Country</option>
                {countryMapping()}
            </select>

            <select value={stateId} onChange={(e) => handleState(e)}>
                <option>Select State Name</option>
                {statesMapping()}
            </select>

            <select>
                <option>Select City</option>
                {citiesMapping()}
            </select>
        </div>
    );
}
