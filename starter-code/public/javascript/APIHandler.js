class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
    .then(res => res.data)
    .catch(err => console.log(err))
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(res => res.data)
    .catch(err => console.log(err))
  }

  createOneRegister (name, occupation, cartoon, weapon) {
    return axios.post(`${this.BASE_URL}/characters/${id}`, {name, occupation, weapon, cartoon})
      .then(res => res.data) 
      .catch(res => res.data)
  }

  updateOneRegister () {
    return axios.put(`${this.BASE_URL}/characters`, {name, occupation, weapon, cartoon})
    .then(res => res.data) 
    .catch(res => res.data)
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then(res => res.data)
    .catch(err => err)
  }
}
