class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios
      .get(`${this.BASE_URL}/characters`)
      .then(res => res.data);
  }

  getOneRegister (id) {
    return axios
      .get(`${this.BASE_URL}/characters/${id}`)
      .then(res => res.data);
  }

  createOneRegister (character) {
    return axios
      .post(`${this.BASE_URL}/characters`, character)
      .then(function(res){
        console.log(res);
      })
      .catch(function(e){
        console.log(e);
      })
  }

  updateOneRegister (character) {
    return axios
    .patch(`${this.BASE_URL}/character/${character.id}`, character)
    .then(function(res){
      console.log(res);
    })
    .catch(function(e){
      console.log(e);
    })
  }

  deleteOneRegister (id) {
    return axios  
      .delete(`${this.BASE_URL}/character/${id}`)
      .then(function(res){
        console.log(res);
      })
      .catch(function(e){
        console.log(e);
      })
  }
}
