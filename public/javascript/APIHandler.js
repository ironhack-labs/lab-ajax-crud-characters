//supongoo que debes d requerir axis s
const axios = require('axios');


class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(this.BASE_URL + '/characters').then(({
      console.log(this);
    }) => {
      // printChars(data)
    })
  }

  getOneRegister() {
    return axios.get(`${this.BASE_URL}/characters/${id}`).then(({
      console.log(req.params);
    }) => {
      // printChars(data)
    })
  }

  createOneRegister(name,occupation,weapon,cartoon) {
    axios.post(`${this.BASE_URL}/characters/`,
    {
      name,
      occupation,
      weapon,
      cartoon
    })
      .then(response => {
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  updateOneRegister() {

  }

  deleteOneRegister(id) {
    return axios.delete (`${this.BASE_URL}/characters/${id}`)
  }
}
