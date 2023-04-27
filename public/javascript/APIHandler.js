class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList () {
const characters = await axios(`${this.BASE_URL}/characters`);
console.log(characters)
return characters.data

  }

  async getOneRegister (id) {
    const charactersId = await axios(`${this.BASE_URL}/characters/${id}`);
console.log(charactersId)
return charactersId.data

  }

  async createOneRegister (newChar) {
    const createChar = await axios.post(`${this.BASE_URL}/characters`, newChar);
console.log(createChar)
return createChar.data

  }

  async updateOneRegister (id, updatedData) {
    
    const updatedChar = await axios.put(`${this.BASE_URL}/characters/${id}`, updatedData);
    console.log(updatedChar)
    return updatedChar.data
    
  }

  async deleteOneRegister (id) {
    const deletedChar = await axios.delete(`${this.BASE_URL}/characters/${id}`);
    console.log(deletedChar)
    return deletedChar.data
    
  }
}
