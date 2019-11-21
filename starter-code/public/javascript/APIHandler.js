class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
    //   .then(response => {
    //    console.log(response.data);
       

    // }).catch(err => {
    // console.log(err.response);
    //   });

  }

  getOneRegister (id) {
return axios.get(`${this.BASE_URL}/characters/${id}`)
  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
