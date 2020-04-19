import React, { useState, useEffect } from 'react'
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';

import styles from './Chart.module.css'

const Chart = ({data: {confirmed, recovered, deaths}, country}) => {  // Functional (arrow =>) component using const keyword 
    const [dailyData, setDailyData] = useState([]); // Hooks 

    useEffect(() => {
      const fetchApi = async () => {
          setDailyData(await fetchDailyData());
      }   
    
      fetchApi();
    }, []);

    const lineChart = (
        dailyData.length ? (
        <Line
        data={{
            labels: dailyData.map(({date}) => date), //Loop through date and get present specific date
            datasets: [{
                data: dailyData.map(({confirmed}) => confirmed),
                label:'Infected',
                borderColor:'#3333ff',
                fill:true,
            }, {
                data: dailyData.map(({deaths}) => deaths),
                label:'Infected',
                borderColor:'red',
                backgroundColor:'rgb(87, 87, 87)',
                fill:true,
            }],
        }}
        />) : null
    );

    console.log(confirmed,recovered,deaths)

    const barChart = (
        confirmed ? (
            <Bar 
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    label:'People',
                    backgroundColor:[
                        'rgba(255, 0, 0, 0.5)',
                        'rgba(0, 255, 0, 0.5)',
                        'rgba(87, 87, 87, 0.5)',
                    ],
                    data:[confirmed.value, recovered.value, deaths.value]
                }]
            }}
            options={{
                legend:{display: false},
                title: { display: true, text:`Current state in ${country}`}
            }}
            />
        ) : null
    )
    return(
        <div className={styles.container}>
        {country ? barChart:lineChart}
        </div>
        
    )
}


export default Chart;
