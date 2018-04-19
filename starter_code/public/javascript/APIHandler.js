class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`)
    .then(response => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
  }

  createOneRegister(newData) {
    return axios.post(`${this.BASE_URL}/characters`, {newData})
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
  }

  updateOneRegister (id, data) {
    return axios.patch(`${this.BASE_URL}/characters/${id}`, {data})
      .then( character => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  }

  deleteOneRegister(id) {
   return axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
  }
}
