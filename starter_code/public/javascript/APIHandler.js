class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios
      .get("https://ih-crud-api.herokuapp.com/characters")
      .then(function(response) {
        return response.data;
      });
  }

  getOneRegister(id) {
    return axios
      .get("http://ih-crud-api.herokuapp.com/characters/" + id)
      .then(function(response) {
        console.log(response.data);
      });
  }

  createOneRegister(name, occupation, debt, weapon) {
    return axios
      .post("http://ih-crud-api.herokuapp.com/characters", {
        name: name,
        occupation: occupation,
        debt: debt,
        weapon: weapon
      })
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  updateOneRegister(id, name, occupation, debt, weapon) {
    return axios
      .patch("http://ih-crud-api.herokuapp.com/characters/" + id, {
        name: name,
        occupation: occupation,
        debt: debt,
        weapon: weapon
      })
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  deleteOneRegister(id) {
    return axios
      .delete("http://ih-crud-api.herokuapp.com/characters/" + id)
      .then(function(response) {
        console.log(response.data);
      });
  }
}
