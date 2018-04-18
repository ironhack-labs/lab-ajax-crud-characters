class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }


  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
        .then(res => {
          return res.data;
        })
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
        .then(res => {
          return res.data;
        })

  }

  createOneRegister(newCharacter) {
    return axios.post(`${this.BASE_URL}/characters`, newCharacter)
        .then(res => {
          res.data;

        })
        .catch(e => {
          console.log(e);
        })

  }

  updateOneRegister (id, updateCharacter) {
    return axios.patch(`${this.BASE_URL}/characters/${id}`, updateCharacter)
    .then(res =>{ 
      res.data
    })
    .catch(e => {
      console.log("Character not found");

    })
  }

  deleteOneRegister (id) {
    let a = false;
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then(() => {
      console.log("Character has been successfully deleted");
      return   a = true;
    })
    .catch(e => {
      console.log("Character not found");
      return a = false;
    })
  }
}
