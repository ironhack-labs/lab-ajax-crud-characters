class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios
    .get(this.BASE_URL)
    .then(response => console.log(response) )
    .catch(err => console.log(err))
  }

  getOneRegister (id) {
    axios
    .get(`${this.BASE_URL}/${id}`)
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }

  createOneRegister (name, occupation, weapon, cartoon) {
    axios
    .post(`${this.BASE_URL}`, {name, occupation, weapon, cartoon})
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }

  updateOneRegister (id, name, occupation, weapon, cartoon) {
    axios
    .patch(`${this.BASE_URL}/${id}`, {name, occupation, weapon, cartoon})
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }

  deleteOneRegister (deleteId) {
    axios
    .delete(`${this.BASE_URL}/${deleteId}`)
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }
}
