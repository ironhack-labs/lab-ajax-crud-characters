class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`http://localhost:8000/characters`)
    .then(res => {
      //console.log("get list success", res.data);
      return res.data;
    })
    .catch(err => {
      //console.log("Err");
      console.log(err);
    });
  }

  getOneRegister (id) {
    return axios.get(`http://localhost:8000/characters/${id}`)
    .then(res => {
      //console.log("get one success", res.data);
      return res.data;
    })
    .catch(err => {
      //console.log("Err");
      console.log(err);
    });
  }

  createOneRegister (objChar) {
    return axios.post(`http://localhost:8000/characters`, objChar)
    .then(res => {
      console.log("post success");
      //return objChar;
    })
    .catch(err => {
      console.log("Err");
      console.log(err);
    });
  }

  updateOneRegister (id, objChar) {
    return axios.put(`http://localhost:8000/characters/${id}`, objChar)
    .then(res => {
      console.log("Character update success");
    })
    .catch(err => {
      console.log("Character not found");
      console.log(err);
    });
  }

  deleteOneRegister (id) {
    return axios.delete(`http://localhost:8000/characters/${id}`)
    .then(res => {
      console.log(`Character ${id} has been successfully delete`);
    })
    .catch(err => {
      console.log("Character not found");
      console.log(err);
    });
  }
}
