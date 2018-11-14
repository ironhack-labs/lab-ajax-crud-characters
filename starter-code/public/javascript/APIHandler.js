class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get('http://localhost:8000/characters')
    // .then(response => {
    //   // console.log("teste");
    //   return response;
    // })
    // .catch(error => {
    //   console.log("The error is: ", error);
    // });
  }

  getOneRegister (id) {
    return axios.get(`http://localhost:8000/characters/${id}`)
    // .then(response => {
    //   console.log(response);
    //   return response;
    // })
    // .catch(error => {
    //   console.log("The error is: ", error);
    // });
  }

  createOneRegister (obj) {
    console.log("xyz");
    axios.post(`http://localhost:8000/characters`, obj)
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(error => {
      console.log("The error is: ", error);
    });
  }

  updateOneRegister (obj, id) {
    axios.patch(`http://localhost:8000/characters/${id}`, obj)
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(error => {
      console.log("The error is: ", error);
    });
  }

  deleteOneRegister (id) {
    return axios.delete(`http://localhost:8000/characters/${id}`)
  }
}
