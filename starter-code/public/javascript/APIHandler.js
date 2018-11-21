class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
    .then(response => response.data)
    .catch(err => {console.log(err)})
  }

  getOneRegister (id) {
    axios.get(`${this.BASE_URL}/characters/${id}`)
    .then((response) => {
      response.data})
    .catch(err => {console.log(err)})
  }

  createOneRegister (obj) {
    axios.post(`${this.BASE_URL}/characters`, obj)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  updateOneRegister (id, obj) {
    axios.put(`${this.BASE_URL}/characters/${id}`, obj)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then(response => console.log("character has been deleted"))
    .catch(error => console.log("character not found"));
  }
}
