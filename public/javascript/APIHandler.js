class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList () {
    const allCharacters = await axios(`${this.BASE_URL}/characters`);
    console.log("All characters:", allCharacters);
    return allCharacters.data;
  }

  async getOneRegister (id) {
    const oneCharacter = await axios(`${this.BASE_URL}/characters/${id}`);
    return oneCharacter.data;
  }

  async createOneRegister (newChar) {
    const addedChar = await axios.post(`${this.BASE_URL}/characters`, newChar);

    // const response = await fetch(`${this.BASE_URL}/characters`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newChar),
    // });
    // const addedChar = await response.json();

    console.log("New character added:", addedChar);
    return addedChar.data;
  }

  async updateOneRegister (id, charUpdateInfo) {
    const updatedChar = await axios.patch(`${this.BASE_URL}/characters/${id}`, charUpdateInfo);
    return updatedChar.data;
  }

  async deleteOneRegister (id) {
    const deletedChar = await axios.delete(`${this.BASE_URL}/characters/${id}`);
    return deletedChar.data;
  }
}
