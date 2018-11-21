class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`)
      .then((characters) => {
        return characters.data
      })
      .catch(err => console.log(err))
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
      .then((character) => {
        return character.data
      })
      .catch(err => console.log(err))

  }

  createOneRegister(name, occupation, weapon, cartoon) {
    axios.post(`${this.BASE_URL}/characters`, { name: name, occupation: occupation, weapon: weapon, cartoon: cartoon })
      .then((test) => {
        console.log(test.data)
      })
  }

  updateOneRegister(id, name, occupation, weapon, cartoon) {
    axios.put(`${this.BASE_URL}/characters/${id}`, { name: name, occupation: occupation, weapon: weapon, cartoon: cartoon })
      .then((character) => {
        console.log(character.data.id)
        console.log(character.data.name)
        console.log(character.data.occupation)
        console.log(character.data.cartoon)
        console.log(character.data.weapon)
      })
      .catch((err) => console.log("Character not found " + err))
  }

  deleteOneRegister(id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
      .then(() => {
        console.log("Character has been succefully deleted")
      })
      .catch((err) => console.log("Character not found " + err))
  }
}
