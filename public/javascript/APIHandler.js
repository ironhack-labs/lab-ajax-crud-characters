const { default: Axios } = require("axios");

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl
    this.axiosApp = axios.create({baseURL: baseUrl})
  }

  getFullList () {
    return axios
      .get(`/characters`)
      .then(response => { console.log(response.data) })
      .catch(err => console.log("Error is: ", err));
  }
  

  getOneRegister (id) {
    return axios
      .get(`/characters/${id}`)
      .then(response => { console.log(response.data) })
      .catch(err => console.log("Error is: ", err))
  }

  createOneRegister (obj) {

    return axios
    .post(`/characters`, obj)
    .then(response => { console.log("Personaje creado", response) })
    .catch(err => console.log('Error is: ', err))
  }

  updateOneRegister (id, obj) {
    
    return axios
      .patch(`/characters/${id}`, obj)
      .then(response => { console.log('Response from the API is: ', response) })
      .catch(error =>  console.log("The error is: ", error))
  }

  deleteOneRegister (id) {
    return axios
    .delete(`/characters/${id}`)
    .then(response => {console.log('Personaje eliminado', response) })
    .catch(err => console.log('Error is: ', err))
  }
}
