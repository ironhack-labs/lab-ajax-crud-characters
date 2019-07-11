class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.CharactersAPI = axios.create({
      baseURL: this.BASE_URL,
    });
  }

  getFullList() {
    return this.CharactersAPI.get('/characters')
      .then(response => response.data )
      .catch(err => console.log(err));
  }

  getOneRegister(id) {
    return this.CharactersAPI.get(`/characters/${id}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  }

  createOneRegister(createInfo) {
    return this.CharactersAPI.post('/characters', createInfo)
      .then(response => response.data);
      // .catch(err => console.log(err));
  }

  updateOneRegister(id, updateInfo) {
    return this.CharactersAPI.put(`/charaaaaacters/${id}`, updateInfo)
      .then(response => response.status);
      // .catch(err => console.log(err));
  }

  deleteOneRegister(id) {
    return this.CharactersAPI.delete(`/characters/${id}`)
      .then(response => response);
      // .catch(err => err);
  }
}