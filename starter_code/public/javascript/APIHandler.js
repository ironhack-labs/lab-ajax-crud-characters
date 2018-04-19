class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(`${this.BASE_URL}/characters`)
          .then(response => {
            console.log(response.data)
            return response.data
          })
  }

  getOneRegister (id) {
    axios.get(`${this.BASE_URL}/characters/${id}`)
          .then(response => {
            console.log(response.data)
            return response.data
          })
  }

  createOneRegister () {
    axios.post(`${this.BASE_URL}/characters/${id}`)
          .then(response => {
            console.log("Item created")
            return response.data
          })
  }

  updateOneRegister () {
    axios.patch(`${this.BASE_URL}/characters/${id}`)
          .then(response => {
            console.log("Item deleted")
            return response.data
          })
  }

  deleteOneRegister () {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
          .then(response => {
            console.log(response.data)
            return response.data
          })
  }
}
