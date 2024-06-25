class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.axiosInstance = axios.create({
      baseURL: this.BASE_URL
    });
  }

  getFullList() {
    return this.axiosInstance.get('/characters')
      .then(response => response.data)
      .catch(error => console.error(error));
  }

  getOneRegister(id) {
    return this.axiosInstance.get(`/characters/${id}`)
      .then(response => response.data)
      .catch(error => console.error(error));
  }

  createOneRegister(characterData) {
    return this.axiosInstance.post('/characters', characterData)
      .then(response => response.data)
      .catch(error => console.error(error));
  }

  updateOneRegister(id, updateData) {
    return this.axiosInstance.put(`/characters/${id}`, updateData)
      .then(response => response.data)
      .catch(error => console.error(error));
  }

  deleteOneRegister(id) {
    return this.axiosInstance.delete(`/characters/${id}`)
      .then(response => response.data)
      .catch(error => console.error(error));
  }
}
