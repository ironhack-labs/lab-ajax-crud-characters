class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios
    .get(this.BASE_URL+"/characters")
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
  }

  getOneRegister (id) {
    axios
    .get(this.BASE_URL+`/characters/${id}`)
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
  }

  createOneRegister (newCharacter) {
    axios
    .post(`${this.BASE_URL}/characters/`, newCharacter)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  updateOneRegister (editChar) {
    axios
    .patch(`${this.BASE_URL}/characters/${editChar.id}`, editChar)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  deleteOneRegister (id) {
    axios
    .delete(this.BASE_URL+`/characters/${id}`)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }
}
