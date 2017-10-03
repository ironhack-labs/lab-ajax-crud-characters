class APIHandler {
  constructor () {
    this.characters = axios.create({baseURL:"https://ih-crud-api.herokuapp.com/characters"});
    this.fullList = [];
    this.searchedCharacter = "";
  }

  getFullList () {
    return this.characters.get("/").
    then(response => {
      this.fullList = response.data;
      console.log(response.data);
      return response.data;
  });
}

  getOneRegister (id) {
    return this.characters.get(`${id}`).
    then(response => {
      return response.data;  // done but with no handling of errors.
    });
  }

  createOneRegister (name, occupation, debt, weapon) {
    return this.characters.post("/", {
      name: name,
      occupation: occupation,
      debt: debt,
      weapon: weapon
    }).then(response => response.data);
  }

  updateOneRegister (name, occupation, debt, weapon, id) {
      return this.characters.patch(`${id}`, {
      name: name,
      occupation: occupation,
      debt: debt,
      weapon: weapon
    }).then(response => response.data);
  }

  deleteOneRegister (id) {
    return this.characters.delete(`${id}`);
  }
}
