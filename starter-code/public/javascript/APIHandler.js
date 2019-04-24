class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(`${this.BASE_URL}/characters`)
      .then(characters => {
        console.log(characters.data);
        return characters.data
      })
      .catch(err => {
        alert(err);
      });
  }

  getOneRegister(id) {
    axios
    .get(`${this.BASE_URL}/characters/${id}`)
    .then(character => {
      console.log(character.data);
      return character.data
    })
    .catch(err => {
      alert(err);
    });

  }

  createOneRegister(attributes) {
    axios
    .post(`${this.BASE_URL}/characters`, attributes)
    .then(response => {
      console.log('character created',response);
      return newcharacter.data
    })
    .catch(err => {
      alert(err);
    });
  }

  updateOneRegister(id, attributes) {

    axios.patch(`${this.BASE_URL}/characters/${id}`, attributes)
    .then(response => {
          console.log('update successful: ', response);
          return response;
    })
    .catch(error => {
        console.log(error);
    })
  }

  deleteOneRegister(id) {
    return axios
      .delete(`${this.BASE_URL}/characters/${id}`)
      .then(response => {
        console.log('delete successful', response);
        return response;
      })
      .catch(err => 
        console.log(err));
  }
}
