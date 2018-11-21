class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios
      .get(`${this.BASE_URL}/characters`)
      .then(allCharacters => {
        return allCharacters.data;
      })
      .catch(err => {
        return console.log(err);
      });
  }

  getOneRegister(id) {
    return axios
      .get(`${this.BASE_URL}/characters/${id}`)
      .then(character => {
        return character.data;
      })
      .catch(err => {
        return console.log(err);
      });
  }

  createOneRegister(character) {
    return axios
      .post(`${this.BASE_URL}/characters/`, character)
      .then(character => {
        return character;
      })
      .catch(err => {
        return console.log(err);
      });
  }

  updateOneRegister(id, character) {
    const updateCharacter = {
      id: id,
      name: character.name,
      occupation: character.occupation,
      cartoon: character.cartoon,
      weapon: character.weapon
    };

    return axios.patch(`${this.BASE_URL}/characters/${id}`, updateCharacter);

  }

  deleteOneRegister(id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then(() => {
      return ('Character has been successfully deleted')
    })
    .catch(err => {
      return ('Character not found')
    });
  }
}
