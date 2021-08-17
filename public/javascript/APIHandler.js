class APIHandler {
  constructor (baseUrl) {
    //this.BASE_URL = baseUrl;
    this.api = axios.create({ baseURL: baseUrl });
  }

  // getFullList () {
  //   axios
  //   .get('http://localhost:8000/characters')
  //   .then(response => {
  //     const data = response.data;
  //     console.log(data);
  //   })
  // }

  getFullList () {
    return this.api.get('/characters')
      .then((response) => {
        const allCharInfo = response.data;
        return allCharInfo
      })
  }

  getOneRegister (id) {
    return this.api.get(`/characters/${id}`)
      .then((response) => {
        const oneCharInfo = response.data;
        return oneCharInfo
      })
  }

  createOneRegister (newCharacter) {
    return this.api.post('/characters', newCharacter)
  }

  updateOneRegister (id, updatedCharacter) {
    return this.api.patch(`/characters/${id}`, updatedCharacter)
      .catch((err) => 'Character not found')
  }

  deleteOneRegister (id) {
    return this.api.delete(`/characters/${id}`)
      .then(() => 'Character has been successfully deleted')
      .catch((err) => 'Character not found')
  }
}
