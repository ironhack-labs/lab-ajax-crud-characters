class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(`${this.BASE_URL}/characters`).then(({ data }) => {
      return data
    }).catch(err => console.log(err))
  }

  getOneRegister () {
    axios.get(`${this.BASE_URL}/characters/:id`).then(data => {
      return data
    }).catch(err => console.log(err))
  }

  createOneRegister (obj) {
    axios.post(`${this.BASE_URL}/characters`, obj).then(data => {
      return data
    }).catch(err => console.log(err))
  }

  updateOneRegister (id, obj) {
    axios.patch(`${this.BASE_URL}/characters/:id`, obj).then(data => {
      return data
    }).catch(err => console.log(err))
  }

  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}/charcaters/:id`).then(data => {
      return data
    }).catch(err => console.log(err))
  }
}
