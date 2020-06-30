class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.axios = axios.create({
      baseUrl 
    })
  }

  getFullList() {
    return this.axios
      .get('/characters')
      .catch((error) => console.log(error));
  }

  getOneRegister(id) {
    return this.axios
      .get('/characters/${id}')
      .then((res) => {
        const charId = res.data;
        console.log(`character ID:`, charId);
      })
      .catch((error) => console.log("Error character", error));
  }

  createOneRegister(newChar) {
    this.axios
      .post('/characters', newChar)
      .then((res) => {
        console.log("New character:", res.data);
      })
      .catch((error) => console.log("Error new character", error));
  }

  updateOneRegister(id, updateOneChar) {
    this.axios
      .put('/characters/${id}', updateOneChar)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  }

  deleteOneRegister(id) {
    this.axios
      .delete('/characters/${id}')
      .then((res) => console.log("Character deleted", res.dara))
      .catch((error) => console.log(error));
  }
}
