class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(`${this.BASE_URL}/characters`)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      })
  }

  getOneRegister (id) {
    axios.get(`${this.BASE_URL}/characters/${id}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  createOneRegister (charObj) {
    axios.post(`${this.BASE_URL}/characters`, charObj)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  updateOneRegister (id, charObj) {
    axios.patch(`${this.BASE_URL}/characters/${id}`, charObj)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }
}
