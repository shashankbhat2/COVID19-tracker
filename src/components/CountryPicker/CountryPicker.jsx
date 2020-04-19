import React, {useEffect,useState} from 'react'
import {NativeSelect, FormControl, InputLabel} from '@material-ui/core'
import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../api'


const CountryPicker = ({handleCountryChange}) => {  // Functional (arrow =>) component using const keyword 
    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            setFetchedCountries (await fetchCountries())
        }

        fetchApi();
    }, [setFetchedCountries]);


    return(
        <FormControl variant="outlined" className={styles.formControl}>
            <NativeSelect className={styles.picker} defaultValue="Country-wise" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="" className={styles.picker} >&nbsp;Country-wise</option>
                <option value="" className={styles.picker} placeholder="Countrywise">&nbsp;Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country} className={styles.picker} >&nbsp;{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}



export default CountryPicker;
