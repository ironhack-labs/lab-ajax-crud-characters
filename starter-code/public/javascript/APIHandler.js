import axios from "axios";

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(this.BASE_URL + '/characters')
     .then(response => response.data );
  }

  getOneRegister (id) {
    return axios.get(this.BASE_URL+'/characters/'+id)
    .then(response => console.log(response.data));
  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
