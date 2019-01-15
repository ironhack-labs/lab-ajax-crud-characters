class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(`${this.BASE_URL}/characters`)
      .then(response => {
        console.log(response.data)
      }
  )}

  getOneRegister(id) {
    axios
    .get(`${this.BASE_URL}/characters/${id}`)
    .then(response => {
      console.log(response.data)  
    })
  }

//   createOneRegister() {}

//   updateOneRegister() {}

//   deleteOneRegister() {}
}
