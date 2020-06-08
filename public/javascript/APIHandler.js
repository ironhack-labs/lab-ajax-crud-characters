class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`)
    .then(res => {
      res.data.forEach(character => console.log(character))
      return res.data;
    })
    .catch(e => console.log(`There was an error when retrieving the full list: ${e}`));
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(res => {
      console.log(`Data response: ${res.data}`);
      return res.data;
    })
    .catch(e => console.log(`There was an error when retrieving one character: ${e}`))
  }

  createOneRegister(newChar) {
    return axios.post(`${this.BASE_URL}/characters`, newChar)
    .then()
    .catch(e => console.log(`There was an error when creating one character: ${e}`));
  }

  updateOneRegister(id, newInfo) {
    return axios
    .put(`${this.BASE_URL}/characters/${id}`, newInfo)
    .then()
    .catch(e => console.log(`There was an error when updating one character: ${e}`));
  }

  deleteOneRegister(id) {
    return axios
    .delete(`${this.BASE_URL}/characters/${id}`)
    .then()
    .catch(e => console.log(`There was an error when deleting one character: ${e}`));
  }
}
