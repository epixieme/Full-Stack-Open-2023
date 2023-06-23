import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY

const baseUrl  = "https://studies.cs.helsinki.fi/restcountries/api/all"
const weatherURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`


const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)

}

const getWeather = (country)=>{
  const request = axios.get(`${weatherURL}${country}?unitGroup=metric&include=days&key=${API_KEY}
  &contentType=json`) 
  return request.then(response => response.data)
 
}


export default {getAll, getWeather}