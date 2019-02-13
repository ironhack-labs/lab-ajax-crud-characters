// const axios = require('axios')


class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
    .then(response => response.data)
    .catch(e=>console.log(e))

  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)

    .then(response => response.data)

    .catch(e=>console.log(e))
  }

  createOneRegister (data) {
    return axios.post(`${this.BASE_URL}/characters`, data)
    .then(response => response.data)
    .catch(e=>console.log(e))
  }



  updateOneRegister (id, data) {
    return axios.put(`${this.BASE_URL}/characters/${id}`, data)
    .then(response=>response.data)
    .catch(e=>console.log(e))
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)

    .then(response=>response.data)
    .catch(e=>console.log(e))
  }
}
