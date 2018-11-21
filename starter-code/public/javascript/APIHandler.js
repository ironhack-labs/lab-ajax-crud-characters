class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios
      .get(`${this.BASE_URL}/characters`)
      .then(characters => characters.data);
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`).then(character => {
      return character;
    });
  }

  createOneRegister(character) {
    try {
    if (character.name === '') throw error
    return axios.post(`${this.BASE_URL}/characters/`, character);
    } catch (err) {
      $('#new-character-form button').addClass('redButton');
    }
  }

  updateOneRegister(id, character) {
    
    try {
      return axios.patch(`${this.BASE_URL}/characters/${id}`, character);
    } catch (err) {
      $('#edit-character-form button').addClass('redButton');
    }
  }

  deleteOneRegister(id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`);
  }
}
