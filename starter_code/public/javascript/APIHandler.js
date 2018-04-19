class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
    .then(res => {
      res.data
    })
    .catch(err => {
      err
    })
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(res => {
      res.data
    })
    .catch(err => {
      err
    })
  }

  createOneRegister (newData) {
    axios.post(`${this.BASE_URL}/characters`,{newData})
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  updateOneRegister (id, update) {
    return axios.patch(`${this.BASE_URL}/characters/${id}`,{update})
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
}
