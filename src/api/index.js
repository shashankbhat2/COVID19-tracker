import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';


export const fetchData = async (country) => {
    let changeableUrl = url;
    
    if(country){
        changeableUrl = `${url}/countries/${country}`;
    }

    try{
        const {data: {confirmed, recovered, deaths, lastUpdate }} = await axios.get(changeableUrl);

        const modifiedData = {confirmed, recovered, deaths, lastUpdate };

        console.log(modifiedData);
        return modifiedData;

    }
    catch (error) {
        console.error('data not found')
    }
}

export const fetchDailyData = async () => {
    try{
        const {data} = await axios.get(`${url}/daily`)
    
        const modifiedData = data.map((dailydata) => ({
            confirmed: dailydata.confirmed.total,
            deaths: dailydata.deaths.total,
            date: dailydata.reportDate,
        }));

        return modifiedData;
    }
    catch (error){

    }
}

export const fetchCountries = async () => {
    try{
        const { data: {countries}} = await axios(`${url}/countries`)
        
        return countries.map((country) => country.name)
    }
    catch (error){
        console.log(error)
    }
}

