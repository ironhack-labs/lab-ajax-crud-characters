class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this._id = 1;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`)
  }

  getOneRegister(_id) {
    this._id = _id;
    return axios.get(`${this.BASE_URL}/characters/${this._id}`)
  }

  createOneRegister(name, occupation, cartoon, weapon) {
    return axios.post(`${this.BASE_URL}/characters`, {
      'name': name,
      'occupation': occupation,
      'cartoon': cartoon,
      'weapon': weapon
    })
  }

  updateOneRegister(_id, name, occupation, cartoon, weapon) {
    this._id = _id;
    return axios.put(`${this.BASE_URL}/characters/${this._id}`, { name, occupation, cartoon, weapon })
  }

  deleteOneRegister(_id) {
    this._id = _id;
    return axios.delete(`${this.BASE_URL}/characters/${this._id}`)
      .then(response => {
        console.log('Character has been successfully deleted ');
      })
      .catch(error => {
        console.log('Character not found', error);
      })
  }
}