import axios from "axios";

const baseUrl  = "https://studies.cs.helsinki.fi/restcountries/api/all"




const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
  // const nonExisting = {
  //   id: 10000,
  //   name: 'Test User',
  //   number:31231213,
  // }
  // return request.then(response => response.data.concat(nonExisting))
}


export default {getAll}