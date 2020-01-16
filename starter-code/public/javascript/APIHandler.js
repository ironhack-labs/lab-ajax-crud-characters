import axios from "axios";

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(this.BASE_URL + '/characters')
     .then(response => console.log(response.data) )
     .catch(err => {
      console.log("err => ", err);
      })
  }

  getOneRegister (id) {
    return axios.get(this.BASE_URL+'/characters/'+id)
    .then(response => console.log(response.data));
  }

  createOneRegister (body) {
    return  axios.post(this.BASE_URL+'/characters/', body)
     .then(response => console.log(response.data));
  }

  updateOneRegister (id, updatedData) {
    return axios.patch(this.BASE_URL + '/characters/'+ id, updatedData)
     .then(response => console.log(response.data));
  }

  deleteOneRegister (id) {
    return axios.delete(this.BASE_URL + '/characters/'+id)
     .then(response => console.log(response.data))
     .catch(error => {
       console.log(error);
     })
  }
}
