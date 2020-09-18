import axios from "axios"

const CORS_EVERYWHERE = 'https://cors-anywhere.herokuapp.com'
const CITY_URL = 'https://developers.zomato.com/api/v2.1/cities'
const RESTAURANTS_URL = 'https://developers.zomato.com/api/v2.1/search'
const API_KEY = process.env.REACT_APP_ZOMATO_API_KEY

export const fetchCityData = async (city) => {
    const response = await axios.get(`${CORS_EVERYWHERE}/${CITY_URL}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'user-key': `${API_KEY}`
        },
        params: {
            q: city
        }
    })
    return response.data
}

export const fetchRestaurants = async(city_id, query) => {
    const response = await axios.get(`${CORS_EVERYWHERE}/${RESTAURANTS_URL}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'user-key': `${API_KEY}`
        },
        params: {
            entity_id: `${city_id}`,
            entity_type: 'city',
            q: query,
            count: 9
        }
    })
    return response.data
}