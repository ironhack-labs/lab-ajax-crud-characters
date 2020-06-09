class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`);
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`);
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
    return axios.put(`${this.BASE_URL}/characters/${id}`, obj);
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
