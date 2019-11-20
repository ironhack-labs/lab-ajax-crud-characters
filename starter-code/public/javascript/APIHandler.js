class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios({
      method: "GET",
      url: `${this.BASE_URL}/characters`,
    })
      .then(response => {
        // return JSON.parse(response.data)
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      });
  }

  getOneRegister (id) {
    axios({
      method: "GET",
      url: `${this.BASE_URL}/characters/${id}`,
    })
      .then(response => {
        // return JSON.parse(response.data)
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      });
  }

  createOneRegister (input) {
    axios.post(`${this.BASE_URL}/characters`, input)
  }

  updateOneRegister (id, input) {
    axios.put(`${this.BASE_URL}/characters/${id}`, input)
  }

  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
  }
}
