class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(this.BASE_URL);
  }

  getOneRegister(id) {
    return axios.get(this.BASE_URL + '/' + id);
  }

  createOneRegister(name, occupation, weapon, cartoon) {
    return axios.post(this.BASE_URL, {
      'name': name, 
      'occupation': occupation, 
      'weapon': weapon, 
      'cartoon': cartoon
    });
  }

  updateOneRegister(id, name, occupation, weapon, cartoon) {
    return axios.put(this.BASE_URL + '/' + id, {name, occupation, weapon, cartoon});
  }

  deleteOneRegister(id) {
    return axios.delete(this.BASE_URL + '/' + id);
  }
}
