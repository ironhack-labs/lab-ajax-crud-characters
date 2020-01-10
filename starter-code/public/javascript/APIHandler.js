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

  createOneRegister (body) {
    return  axios.post(this.BASE_URL+'/characters/', body)
    .then(response => response.data);
  }

  updateOneRegister (id, data) {
    return axios.patch(this.BASE_URL + '/characters/'+ id, data)
    .then(response => response.data);
  }

  deleteOneRegister (id) {
    return axios.delete(this.BASE_URL + '/characters/'+id)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
    });


  }
}

