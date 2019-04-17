class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios
      .get("http://localhost:8000/characters")
      .then(todos => {
         return todos.data
         
      })
      .catch(error => {
        return error;
      });
  }

  getOneRegister() {
    return axios.get(`/characters/${id}`).then(uno => {
      return uno;
    });
  }

  createOneRegister() {}

  updateOneRegister() {}

  deleteOneRegister() {}
}
