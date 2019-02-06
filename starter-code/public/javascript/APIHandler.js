class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(this.BASE_URL + "/characters")
    .then(response => response.data)
    .catch(err => console.log(err));
  }

  getOneRegister (id) {
    return axios.get(this.BASE_URL + "/characters/"+id)
    .then(response => response.data)
    .catch(err => console.log(err));
  }

  createOneRegister (obj) {
    return axios.post(this.BASE_URL + "/characters", obj)
    .then(response => response.data)
    .catch(err => console.log("Character not found"));
  }

  updateOneRegister (obj) {
    return axios.patch(this.BASE_URL + "/characters/"+obj.id, obj)
    .then(response => response.data)
    .catch(err => console.log("Character not found"));
  }

  deleteOneRegister (id) {
    return axios.delete(this.BASE_URL + "/characters/"+id)
    .then(response => console.log("Character has been successfully created!"))
    .catch(err => console.log("Character not found"));
  }
}
