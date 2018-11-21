class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(`${this.BASE_URL}/characters`)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => console.log(error))
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(characters => {
      return characters})
    .catch(error => console.log(error))
  }

  createOneRegister () {

    const newChar = {
      name: document.getElementById('addName').value,
      occupation: document.getElementById('addOcupation').value,
      weapon: document.getElementById('addWeapon').value,
      cartoon: document.getElementById('ifCartoon').checked
    }

    return axios.post(`${this.BASE_URL}/characters`, newChar);
  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
