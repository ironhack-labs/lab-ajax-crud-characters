class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(`${this.BASE_URL}/characters`)
    .then(res => {
      console.log(`Data response: ${res.data}`);
    })
    .catch(e => console.log(`There was an error when retrieving the full list: ${e}`));
  }

  getOneRegister (id) {
    axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(res => {
      console.log(`Data response: ${res.data}`);
    })
    .catch(e => console.log(`There was an error when retrieving one character: ${e}`))
  }

  createOneRegister (newChar) {
    axios.post(`${this.BASE_URL}/characters`, newChar)
    .then( res => {
      console.log(`New character created: ${res.data}`)
      this.getFullList()
    })
    .catch(e => console.log(`There was an error when creating one character: ${e}`));
  }

  updateOneRegister (id, newInfo) {
    axios
    .put(`${this.BASE_URL}/characters/${id}`, newInfo)
    .then(res => {
      console.log(`Updated character: ${res.data}`);
      this.getFullList();
    })
    .catch(e => console.log(`There was an error when updating one character: ${e}`));
  }

  deleteOneRegister (id) {
    axios
    .delete(`${this.BASE_URL}/characters/${id}`)
    .then(res => {
      console.log(`Deleted character: ${res.data}`);
      this.getFullList();
    })
    .catch(e => console.log(`There was an error when deleting one character: ${e}`));
  }
}
