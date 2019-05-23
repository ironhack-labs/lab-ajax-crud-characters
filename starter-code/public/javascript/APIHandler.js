class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {

    return axios.get(`${this.BASE_URL}/characters`)
      .then(response => response.data)
  }

  getOneRegister(id) {

    axios.get(`${this.BASE_URL}/characters` + id)
      .then(response => response.data)
      .catch(error => console.log(error))
  }


  createOneRegister(name, occupation, cartoon, weapon) {

    const character = { name, occupation, cartoon, weapon }

    axios.post(`${this.BASE_URL}/characters`, character)
      .then(response => response.data)
      .catch(error => console.log(error))
  }

  updateOneRegister(id, name, occupation, cartoon, weapon) {

    const character = { name, occupation, cartoon, weapon }

    axios.put/* NO PATCH :D */(`${this.BASE_URL}/characters` + id, character)
      .then(response => response.data)
      .catch(error => "No character with that id#")
  }

  deleteOneRegister(id) {

    axios.delete(`${this.BASE_URL}/characters` + id)
      .then(response => "Character destroyed!")
      .catch(error => "No character with that id#")
  }
}
