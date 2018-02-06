class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get("http://localhost:8000/characters")
        .then(response => {
          console.log(response.data);
          return response.data;
        })
        .catch(err => {
          console.log("ERROR", err);
        });
  }

  getOneRegister (id) {
     return axios.get("http://localhost:8000/characters/" + id)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(err => {
      console.log("ERROR", err);
    });
  }

  createOneRegister(elements) {
    return axios.post("http://localhost:8000/characters", elements)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(err => {
      console.log("ERROR", err);
    });
  }

  updateOneRegister (id, update) {
    return axios.put("http://localhost:8000/characters/" + id, update)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(err => {
      console.log("ERROR", err);
      throw err;
    });
  }

  deleteOneRegister (id) {
    return axios.delete("http://localhost:8000/characters/" +id)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(err => {
      console.log("ERROR", err);
      throw err;
    });
  }
}
