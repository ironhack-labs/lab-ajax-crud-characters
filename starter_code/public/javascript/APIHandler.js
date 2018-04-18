class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
      .then( characters => {
        console.log(characters);
        return character;
      } )
      .catch( e => console.log(e) );
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
      .then( character => {
        console.log(character);
        return character;
      } )
      .catch( e => console.log(e) );
  }

  createOneRegister (data) {
    return axios.post(`${this.BASE_URL}/characters`, data)
      .then( character => {
        console.log("Characted created");
        return character;
      })
      .catch( e => console.log(e) );
  }

  updateOneRegister (id, data) {
    return axios.patch(`${this.BASE_URL}/characters/${id}`, data)
      .then( character => {
        console.log("Character updated");
        return character;
      })
      .catch( e => console.log(`Character not found: ${e}`))

  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
      .then( () => console.log("Character has been successfully deleted"))
      .catch( e => console.log(`Character not found: ${e}`) );
  }
}
