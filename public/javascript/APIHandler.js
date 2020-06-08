class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios
    .get(`${this.BASE_URL}/characters/`)
    .then(response => {
      const character = response.data;
      console.log('Response from the API - all characters datas: ', character);
    })
    .catch(err => console.log(err));
  }

  getOneRegister (id) {
    axios
    .get(`${this.BASE_URL}/characters/${id}`)
    .then(response => {
      const characterDetail = response.data;
      console.log('a single character details: ', characterDetail);
    })
    .catch(err => console.log(err));
  }

  createOneRegister (newPerson) {
    axios
    .post(`${this.BASE_URL}/characters`, newPerson)
    .then(response => {
      console.log('new character: ', response.data);
    })
    .catch(err => console.log(err));
  }

  updateOneRegister (id, updateChar) {
    axios
    .put(`${this.BASE_URL}/characters/${id}`, updateChar)
    .then(response => {
      console.log(response)
    })
    .catch(err => console.log(err));
  }

  deleteOneRegister (id) {
    axios
    .delete(`${this.BASE_URL}/characters/${id}`)
    .then(response => {
      console.log('character deleted: ', response);
    })
    .catch(err => console.log(err));
  }
}