class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`)
    .then(res => res.data);
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(res => res.data);
  }

  createOneRegister(character) {
    axios.post(`${this.BASE_URL}/characters`, character)
    .then(function(response) {
    })
    .catch(function(error) {
        console.log(error);
    });
  }

  updateOneRegister() {}

  deleteOneRegister() {}
}
