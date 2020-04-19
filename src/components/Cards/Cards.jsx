import React from 'react'
import {Card ,CardContent, Typography, Grid} from '@material-ui/core'
import styles from './Cards.module.css'
import Countup from 'react-countup'
import cx from 'classnames'
import Loader from 'react-loader-spinner'

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {  // Functional (arrow =>) component using const keyword 
    console.log(confirmed);
    if(!confirmed){
        return <Loader
        type="Circles"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={30} //3 secs
        />
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={5} justify="center">
                <Grid item component={Card} x5={12} md={3} className={cx (styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>Infected</Typography>
                        <Typography variant="h4" className={styles.number}>
                        <Countup start={0} end={confirmed.value} duration={1} separator=","/>
                        </Typography>
                        <Typography color="textSecondary" variant="h6">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body5">Number of active cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} x5={12} md={3} className={cx (styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>Recovered</Typography>
                        <Typography variant="h4">                        
                        <Countup start={0} end={recovered.value} duration={1} separator=","/>
                        </Typography>
                        <Typography color="textSecondary" variant="h6">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body5">Number of recoveries</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} x5={12} md={3} className={cx (styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>Deaths</Typography>
                        <Typography variant="h4">
                        <Countup start={0} end={deaths.value} duration={1} separator=","/>
                        </Typography>
                        <Typography color="textSecondary" variant="h6">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body4" >Number of Deaths </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
