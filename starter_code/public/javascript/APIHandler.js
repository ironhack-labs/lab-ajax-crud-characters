class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
    .then(res => res.data);
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(res => res.data);
  }

  createOneRegister (character) {
    
    return axios.post(`${this.BASE_URL}/characters/`, character)
      .then(rep => console.log(rep))
      .catch(err => console.log(err))
  }

  updateOneRegister (id, character) {
    
    return axios
    .patch(`${this.BASE_URL}/characters/${id}`, character)
  }

  deleteOneRegister (id) {
    axios
      .delete(`${this.BASE_URL}/characters/${id}`).catch(err => console.log(err))
  }
}
