class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  //Get all the characters info from http://localhost:8000/characters
  async getFullList () {
    const characters = await axios.get(`${this.BASE_URL}/characters`)
    return characters.data

  }
  //Get a single character info from http://localhost:8000/characters/:id
  async getOneRegister () {
    const character = await axios.get(`${this.BASE_URL}/characters/${id}`)
      return character.data
  }
//Create a single character posting the data to http://localhost:8000/characters
  async createOneRegister () {
    const createCharacter = await axios.post(`${this.BASE_URL}/characters`, character)
      return createCharacter
  }
  //Delete a single character through his id in http://localhost:8000/characters/:id
  async updateOneRegister () {
    const editCharacter = await axios.put(`${this.BASE_URL}/characters/${id}`, char)
    return editCharacter

  }
//Edit a single character through his id in http://localhost:8000/characters/:id
  async deleteOneRegister () {
    await axios.delete(`${this.BASE_URL}/characters/${id}`)    
  }
}
