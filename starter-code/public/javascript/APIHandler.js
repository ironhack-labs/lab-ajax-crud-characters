class APIHandler {
  constructor(baseUrl) {
    this.CharactersURL = axios.create({
      baseUrl: baseUrl
    });

    
    
    
  }

  getFullList() {
    
    `https://minions-api.herokuapp.com/characters`

  }

  getOneRegister() {
    
    `https://minions-api.herokuapp.com/characters/${id}`

  }

  createOneRegister() {
    
    `https://minions-api.herokuapp.com/characters`

  }

  updateOneRegister() {
    
    `https://minions-api.herokuapp.com/characters/${id}`

  }

  deleteOneRegister() {
    
    `https://minions-api.herokuapp.com/characters/${id}`

  }
}
