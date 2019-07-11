class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`)
      .then(answer => answer.data)
      .catch(((err) => { `Blasting! ${err}` }));
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
      .then(answer => answer.data)
      .catch(((err) => { `Blasting! ${err}` }));
  }

  createOneRegister(name, occupation, weapon, cartoon) {
    const newCharacter = {
      name,
      occupation,
      weapon,
      cartoon,
    };

    axios.post(`${this.BASE_URL}/characters`, newCharacter)
      .then((answer) => {
        console.log(`Character create ${answer}`)
      })
      .catch(((err) => { `Blasting! ${err}` }));
  }

  updateOneRegister(id, name, occupation, weapon, cartoon) {
    const updateCharacter = {
      name,
      occupation,
      weapon,
      cartoon,
    }
    axios.put(`${this.BASE_URL}/characters/${id}`, updateCharacter)
      .then(answer => `${answer} updated`)
      .catch(((err) => { `Blasting! ${err}` }));
  }

  deleteOneRegister(id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
      .then(answer => `${answer}`)
      .catch(((err) => { `Blasting! ${err}` }));
  }
}
