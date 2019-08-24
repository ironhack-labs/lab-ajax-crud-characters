class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`)
      .then(response => response.data)
      .catch(error => console.log(error));
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
      .then(response => response.data)
      .catch(error => console.log(error));
  }

  createOneRegister(obj) {
    if (obj.name === "") {
      return obj;
    }

    return axios.post(`${this.BASE_URL}/characters`, obj)
      .then(response => response.data)
      .catch(error => {
        console.log(error);
        return obj;
      });
  }

  updateOneRegister(id, obj) {
    return axios.patch(`${this.BASE_URL}/characters/${id}`, obj)
      .then(response => response.data)
      .catch(error => {
        console.log(error);
        return "Character not found";
      });
  } 

  deleteOneRegister(id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
      .then(response => "Character has been successfully deleted")
      .catch(error => {
        console.log(error);
        return "Character not found";
      });
  }
}
