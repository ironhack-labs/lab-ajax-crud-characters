class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios
      .get(`${this.BASE_URL}/characters`)
      .then(response => response.data);
  }

  getOneRegister(id) {
    return axios
      .get(`${this.BASE_URL}/characters/${id}`)
      .then(response => response.data);
  }

  createOneRegister(character) {
    axios
      .post(`${this.BASE_URL}/characters`, character)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  updateOneRegister(character) {
    axios
      .patch(`${this.BASE_URL}/characters/${character.id}`, character)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  deleteOneRegister(id) {
    axios
      .delete(`${this.BASE_URL}/characters/${id}`)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
