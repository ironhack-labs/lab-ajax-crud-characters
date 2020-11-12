class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }


  getFullList () {
    return axios
      .get(`${this.BASE_URL}/characters`)
      .then(response => {
        console.log(response.data);
      }) 
  }

    

  getOneRegister (id) {
    return axios
    .put(`${this.BASE_URL}/characters/${id}`);

  }

  createOneRegister (newcharacter) {
    return axios
    .post(`${this.BASE_URL}/characters`, newcharacter)
    
  };

  

  updateOneRegister (id, updatedCharacter) {
    return axios
    .put(`${this.BASE_URL}/characters/${id}`, updatedCharacter);

  }

  deleteOneRegister () {
    return axios
    .delete(`${this.BASE_URL}/${id}`);
  }
}
