class APIHandler {
  constructor (baseUrl) {
    this.axios = axios.create({baseURL : baseUrl});
  }

  getFullList () {
    return this.axios.get('/characters').then(data=>data.data);
  }

  getOneRegister (id) {
    return axios.get('/characters/${id}').then(data=>data.data);
  }

  createOneRegister (character) {
    return axios.post('/characters', character).then(data=>data.data);
  }

  updateOneRegister (id, character) {
    return axios.post('/characters/${id}', character).then(data=>data.data);
  }

  deleteOneRegister (id) {
    return axios.delete('/characters/${id}').then(data=>data.data);
  }
}
