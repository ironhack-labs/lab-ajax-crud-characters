class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get("${this.BASE_URL}/characters").then(fullCharacters => {
      // const fullCharacters = fullCharacters.data;
      return fullCharacters;
    });
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`).then(oneCharacter => {
      return oneCharacter;
    });
  }

  createOneRegister(obj) {
    const { name, occupation, cartoon, weapon } = obj;
    return axios
      .post(`${this.BASE_URL}/characters`, {
        name,
        occupation,
        cartoon,
        weapon
      })
      .then(createdCharacter => {
        return createdCharacter;
      })
      .catch(err => {
        // No idea if this is right: "It returns the wrong fields if there is some error"
        console.log(err);
      });
  }

  updateOneRegister(id, obj) {
    const { name, occupation, cartoon, weapon } = obj;
    return axios
      .patch(`${this.BASE_URL}/characters/${id}`, {
        name,
        occupation,
        cartoon,
        weapon
      })
      .then(updatedCharacter => {
        return updatedCharacter;
      })
      .catch(() => {
        return "Character not found";
      });
  }

  deleteOneRegister(id) {
    return axios
      .delete(`${this.BASE_URL}/characters/${id}`)
      .then(() => {
        return "Character has been successfully deleted";
      })
      .catch(() => {
        return "Character not found";
      });
  }
}
