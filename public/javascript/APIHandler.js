class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`)
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
  }

  createOneRegister(newCharacter) {
    const {
      name,
      occupation,
      cartoon,
      weapon
    } = newCharacter;

    if (!name || !occupation || !cartoon || !weapon) {
      document.getElementById('send-data').style.backgroundColor = 'red';
      document.getElementById('send-data').innerHTML = 'Error';
      setTimeout(() => {
        document.getElementById('send-data').style.background = 'none';
        document.getElementById('send-data').innerHTML = 'Create';
        document.getElementById('new-character-form').reset();
      }, 1500)
      throw new Error('Please, create a valid character. It must contain name, occupation, cartoon and weapon fields.')
    }

    return axios.post(`${this.BASE_URL}/characters`, newCharacter);
  }

  updateOneRegister(id, updatedCharacter) {
    // if (!updatedCharacter.id) {
    //   return console.log('Character not found');
    // }
    return axios.put(`${this.BASE_URL}/characters/${id}`, updatedCharacter)
  }

  deleteOneRegister(id) {
    if (id == 1 || id == 2 || id == 3) {
      alert(`Character with id ${id} can't be deleted!`);
      return;
    }
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
  }
}