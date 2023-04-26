class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList () {
    const fullList = await axios.get(`${this.BASE_URL}/characters`);
    console.log(`Here's the full list ${fullList}`);
    return fullList.data;
  }

  async getOneRegister (id) {
    const oneItem = await axios.get(`${this.BASE_URL}/characters/${id}`);
    console.log(`Here's the one item: ${oneItem}`);
    return oneItem.data;
  }
  
  async deleteOneRegister (id) {
    const itemToDelete = await axios.delete(`${this.BASE_URL}/characters/${id}`);
    console.log(`Item to delete: ${itemToDelete}`);
    return itemToDelete.data;
  }

  async createOneRegister (newCharacter) {
    const addedCharacter = await axios.post(`${this.BASE_URL}/characters/`, newCharacter);
    console.log(`Newly created item: ${addedCharacter}`);
    return addedCharacter.data;
  }

  async updateOneRegister (updatedCharacter) {
    const itemToUpdate = await axios.put(`${this.BASE_URL}/characters/`, updatedCharacter);
    console.log(`Item updated: ${itemToUpdate}`);
    return itemToUpdate.data;
  }
}
const ApiHandle = new APIHandler('http://localhost:8000');