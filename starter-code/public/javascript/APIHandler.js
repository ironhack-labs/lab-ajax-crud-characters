class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    //console.log('eeeees', this.BASE_URL)
    axios.get(`${this.BASE_URL}/characters`)
      .then(res => {
        console.log(res);           
      })
      .catch(err => {
        console.log(err);
      })
  };

  getOneRegister (id) {
    console.log(id)
    axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(res => {
      console.log(res);           
    })
    .catch(err => {
      console.log(err);
    })
  }

  createOneRegister (obj) {
    //console.log(obj);
    axios.post(`${this.BASE_URL}/characters`, obj)
    .then(res => {
      console.log(res.data);
      document.getElementById("new-character-form").reset();
    })
    .catch(err => {
      console.log(err);
    })
  }

  updateOneRegister (id, obj) {
    //console.log(`=> ${id}, ${obj}`);
    axios.patch(`${this.BASE_URL}/characters/${id}`, obj)
    .then(res => {
      console.log('update successful: ', res);
      document.getElementById("edit-character-form").reset();
    })
    .catch(err => {
    console.log(err);
    })
  }

  deleteOneRegister (id) {
    //console.log(id)
    axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then(res => {
      console.log(res);           
    })
    .catch(err => {
      console.log(err);
    })
  }
}
