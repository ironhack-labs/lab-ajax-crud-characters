class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList (characters) {
     const allCharacters = await axios(`${this.BASE_URL}/${characters}`);
     return allCharacters.data;
  }

  async getOneRegister (characters, id) {
    const oneCharacter = await axios(`${this.BASE_URL}/${characters}/${id}`);
    return oneCharacter.data;
  }

  async createOneRegister (characters,character) {
    axios.post(`${this.BASE_URL}/${characters}`, character)
  }

 async updateOneRegister (characters, characterData,id) {
    const oneCharacter = await axios.put(`${this.BASE_URL}/${characters}/${id}`, characterData);
    return oneCharacter
  }

  async deleteOneRegister (characters, id) {
    const deleteCharacter = await axios.delete(`${this.BASE_URL}/${characters}/${id}`)
    return deleteCharacter.data;
  }
}
