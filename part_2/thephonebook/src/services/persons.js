import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

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

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const deleteObj = (id, newObject) => {
    const request = axios.delete(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject)=>{
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)

}


export default { 
  getAll,
  create,
  deleteObj,
  update

}