class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.axiosInstance = axios.create({
      baseURL: this.BASE_URL 
    });
  }

  // all characters
  getFullList() {
    return this.axiosInstance.get('/characters')
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  }

  // character by id
  getOneRegister(id) {
    return this.axiosInstance.get(`/characters/${id}`)
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  }

  // new character
  createOneRegister(characterData) {
    return this.axiosInstance.post('/characters', characterData)
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  }

  // update character
  updateOneRegister(id, updateData) {
    return this.axiosInstance.put(`/characters/${id}`, updateData)
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  }

  // delate character
  deleteOneRegister(id) {
    return this.axiosInstance.delete(`/characters/${id}`)
      .then(response => console.log("Character deleted"))
      .catch(error => console.error(error));
  }
}
