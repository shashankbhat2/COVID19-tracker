import React, { Component } from 'react';
import { Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import { fetchData } from './api'
import Loader from 'react-loader-spinner'
import covid19 from './img/covid.png'
import {Typography} from '@material-ui/core'
import Footer from './components/Footer';
class App extends Component{
  state = {
    data: {},
    country: '',
  } 

  async componentDidMount () {
    const fetchedData = await fetchData();

    this.setState({data: fetchedData})
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    //Fetch the data
    //Set state
    this.setState({data: fetchedData, country: country})
  }

  render(){
    const {data, country} = this.state; 
     if(!Cards && !Chart && !CountryPicker){
        return <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={30} //3 secs
        />
    }

    return(
      <div className={styles.container}>
        <a href="/"><img className={styles.image} alt="COVID-19 GLOBAL TRACKER" src={covid19} /></a>
        <p className={styles.subline}>Tracker</p>
        <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>
        <Cards data={data}></Cards>
        <Chart data={data} country={country}></Chart>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;

