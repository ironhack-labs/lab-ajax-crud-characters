class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }


  getFullList() {   

    return axios.get(`${this.BASE_URL}/characters`)
    .then(elem => {
      // console.log(elem.data);
      return elem;
      
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
