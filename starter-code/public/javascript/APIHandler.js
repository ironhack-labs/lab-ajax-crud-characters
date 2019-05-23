class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`https://minions-api.herokuapp.com/characters`);
    // .then(response => {
    //   const { id, name, occupation, cartoon, weapon } = response.data;
    // })
    // .catch(error => console.log(error));

    // It receives NO parameters
    // It returns the full characters list
    // It returns JSON
  }

  getOneRegister(id) {
    console.log("entro en one register");
    return axios.get(`https://minions-api.herokuapp.com/characters/${id}`);

    // It receives the character ID as a parameter(route)
    // It returns the character with the indicated id
    // It returns JSON
  }

  createOneRegister(newCharacter) {
    axios.post(`https://minions-api.herokuapp.com/characters`, newCharacter);
    // It receives an object as a parameter, with the following format: { name: string, occupation: string, cartoon: boolean, weapon: string }
    // It returns the created character if there are no errors
    // It returns the wrong fields if there is some error
    // It returns JSON
  }

  updateOneRegister(character) {
    axios.put(
      `https://minions-api.herokuapp.com/characters/${character_id}`,
      character
    );
    // It receives the character id as a parameter(route)
    // It receives an object as a parameter, with the following format: { name: string, occupation: string, cartoon: boolean, weapon: string }
    // All the fields are optional
    // It returns the updated character if there are no errors
    // It returns "Character not found" if there is no character with the indicated id
    // It returns JSON / text
  }

  deleteOneRegister(id) {
    axios.delete(`https://minions-api.herokuapp.com/characters/${id}`, id);
    // It receives the character id as a parameter(route)
    // It returns "Character has been successfully deleted" if there are no errors
    // It returns "Character not found" if there is no character with the indicated id
    // It returns text
  }
}
