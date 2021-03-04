class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`);
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`);
  }

  createOneRegister(newCharacter) {
    const { id, name, occupation, weapon, cartoon } = newCharacter;
    if (!name || !occupation || !weapon || !cartoon) {
      throw new Error("Error: please, fill all fields to create new character"); //Todo: It should be the name of the wrong fields
    } else {
      return axios.post(`${this.BASE_URL}/characters`, {
        id,
        name,
        occupation,
        weapon,
        cartoon,
      });
    }
  }

  updateOneRegister(id, updateCharacter) {
    const { name, occupation, weapon, cartoon } = updatedCharacter;
    if (!updatedCharacter.id) {
      return console.log("Character not found");
    } else {
      return axios.patch(`${this.BASE_URL}/characters/${id}`, {
        name,
        occupation,
        weapon,
        cartoon,
      });
    }
  }

  deleteOneRegister(id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`);
  }
}
