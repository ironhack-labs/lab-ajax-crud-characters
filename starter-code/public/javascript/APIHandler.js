class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = axios.create({
      baseURL: "https://minions-api.herokuapp.com"
    });
  }

  getFullList() {
    return this.BASE_URL.get('https://minions-api.herokuapp.com/characters')
      .then(allCharacters => allCharacters.data)
      .catch(error => console.log('Oh No! Error is: ', error))

  }

  getOneRegister() {
    // return this.BASE_URL.get('https://minions-api.herokuapp.com/characters/:id')
    //   .then(OneCharacter => OneCharacter.data)
    //   .catch(error => console.log('Oh No! Error is: ', error))
    let id = document.querySelector('character-id').value

    this.axiosApp.get(`characters/${id}`)
      .then(response => {
        document.querySelector('name').value = response.data.name
        document.querySelector('ocupation').value = response.data.occupation
        document.querySelector('weapon').value = response.data.weapon
        document.querySelector('cartoon').checked = response.data.cartoon
      })
  }
  createOneRegister() {
    this.BASE_URL.post('https://minions-api.herokuapp.com/characters')
  }

  updateOneRegister() {
    this.BASE_URL.put('https://minions-api.herokuapp.com/characters/:id')
  }

  deleteOneRegister() {
    this.BASE_URL.delete('https://minions-api.herokuapp.com/characters/:id')
    this.app.delete(`characters/${id}`)
      .catch(err => console.log("Ha habido un error: ", err))
  }
}