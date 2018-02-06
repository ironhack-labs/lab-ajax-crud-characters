class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.characterAPI = axios.create({
      baseURL: this.BASE_URL
    });
  }

  getFullList() {
    return this.characterAPI
      .get("/characters")
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.log("Oh No! Error!");
        console.log(error);
      });
  }

  getOneRegister(characterId) {
    return this.characterAPI
      .get(`/characters/${characterId}`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.log("Oh No! Error!");
        console.log(error);
      });
  }

  createOneRegister(newCharacter) {
    return this.characterAPI
      .post("/characters", newCharacter)
      .then(res => {
        console.log("post success");
        return res.data;
      })
      .catch(error => {
        console.log("Oh No! Error!");
        console.log(error);
      });
  }

  updateOneRegister(characterId, editCharacter) {
    return this.characterAPI
      .patch(`/characters/${characterId}`, editCharacter)
      .then(res => {
        return res.data;
      })
      .catch(error => {
        console.log("Oh No! Error!");
        console.log(error);
      });
  }

  deleteOneRegister(characterId) {
    return this.characterAPI
      .delete(`/characters/${characterId}`)
      .then(console.log("Character deleted!"))
      .catch(error => {
        console.log("Oh No! Error!");
        console.log(error);
      });
  }
}
