class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios
      .get(`${this.BASE_URL}/characters`)
      .then(responseFromAPI => {
        console.log(responseFromAPI.data); 
      })
      .catch(err => console.log('Error while getting the data: ', err));
  }

  getOneRegister (id) {
    axios
      .get(`${this.BASE_URL}/characters/${id}`)
      .then(responseFromAPI => {
        console.log(responseFromAPI.data); 
      })
      .catch(err => console.log('Error while getting the data: ', err));
  }

  createOneRegister (obj) {
    axios
      .post(`${this.BASE_URL}/characters`, obj)
      .then(responseFromAPI => {
        console.log("Personaje creado", responseFromAPI); 
      })
      .catch(err => console.log('Error while getting the data: ', err));
  }

  updateOneRegister (id, obj) {
    axios
      .put(`${this.BASE_URL}/characters/${id}`, obj)
      .then(responseFromAPI => {
        console.log("Personaje editado", responseFromAPI); 
      })
      .catch(err => console.log('Error while getting the data: ', err));
  }

  deleteOneRegister (id) {
    axios
      .delete(`${this.BASE_URL}/characters/${id}`)
      .then(responseFromAPI => {
        console.log("Personaje eliminado", responseFromAPI); 
      })
      .catch(err => console.log('Error while getting the data: ', err));
  }
}
