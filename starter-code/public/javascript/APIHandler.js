class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }
  getFullList() {
    return axios
      .get(`${this.BASE_URL}/characters`)
      .then(response => {
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  getOneRegister(id) {
    return axios
      .get(`${this.BASE_URL}/characters/${id}`)
      .then(response => {
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  createOneRegister(register) {
    return axios
      .post(`${this.BASE_URL}/characters`, register)
      .then(response => {
        response;
        console.log("post success");
        console.log(response);
      })
      .catch(error => {
        console.log("Oh No! Error!");
        console.log(error);
      });
  }
  updateOneRegister(id, register) {
    axios
      .patch(`${this.BASE_URL}/characters/${id}`, register)
      .then(response => {
        console.log("post success");
        console.log(response);
      })
      .catch(error => {
        console.log("Oh No! Error!");
        console.log(error);
      });
  }
  deleteOneRegister(id) {
    return axios
      .delete(`${this.BASE_URL}/characters/${id}`)
      .then(() => {
        console.log("delete success");
      })
      .catch(error => {
        console.log("Oh No! Error!");
        console.log(error);
      });
  }
}
