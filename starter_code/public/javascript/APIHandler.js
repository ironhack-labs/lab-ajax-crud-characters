class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`http://localhost:8000/characters/`);
  }

  getOneRegister (id) {
    return axios.get(`http://localhost:8000/characters/${id}`);
  }

  createOneRegister (charObj) {
    return axios.post(`http://localhost:8000/characters/`, charObj);
  }

  updateOneRegister (id, charObj) {
    return axios.patch(t`http://localhost:8000/characters/${id}`, charObj);
  }

  deleteOneRegister (id) {
    return axios.delete(`http://localhost:8000/characters/${id}`);
  }
}
