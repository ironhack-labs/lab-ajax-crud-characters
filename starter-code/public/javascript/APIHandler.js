class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }


  getFullList() {   

    return axios.get(`${this.BASE_URL}/characters`)
    .then(elem => {
      return elem;
      
      // console.log(elem.data[0].name);
    })


  }

  getOneRegister() {

  }

  createOneRegister() {

  }

  updateOneRegister() {

  }

  deleteOneRegister() {

  }
}
