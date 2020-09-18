import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid'
import MerchantCard from '../merchant-card'
import styles from '../css-and-ui-library/main-page.modules.css'
import {fetchCityData, fetchRestaurants} from '../api-call/api'

const MainPage = () => {

  const [merchants, setMerchants] = useState([])

  const [location, setLocation] = useState('Jakarta')

  let input = ""

  useEffect(() => {
    fetchCityData(location).then((cities) => {
      const city_id = cities.location_suggestions[0].id
      fetchRestaurants(city_id, location).then((merchants) => {
        setMerchants(merchants.restaurants)
      })
    })
  }, [location])

  return (
    <Grid container alignItems="center" justify="center" direction="column">
      <div>GoZomato</div>
      <div>
        <input 
          placeholder={"Search for a city"}
          onChange={(event) => {input = event.target.value}}/>
        <button onClick={(() => {
          setLocation(input)
        })}>Change City</button>
      </div>
      <Grid container item xs={12} alignItems="center" justify="center">
        {merchants.map((merchant, index) => (
          <MerchantCard
            props={merchant}
            key={index}/>
        ))}
      </Grid>
    </Grid>
  );
};

export default MainPage;
