class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios
      .get(this.BASE_URL)
      .then(response => {
        return response.data;
      })
      .catch(err => console.log('ERROR: ', err));
  }

  getOneRegister(id) {
    return axios
      .get(`${this.BASE_URL}/${id}`)
      .then(response => {
        return response.data;
      })
      .catch(err => console.error('ERROR: ', err));
  }

  createOneRegister(name, occupation, weapon, cartoon) {
    return axios.post(this.BASE_URL, { name, occupation, weapon, cartoon }).then(response => {
      return response.data;
    });
  }

  updateOneRegister(id, name, occupation, weapon, cartoon) {
    return axios
      .put(`${this.BASE_URL}/${id}`, { id, name, occupation, weapon, cartoon })
      .then(response => {
        return response.data;
      })
      .catch(err => console.error('ERROR: ', err));
  }

  deleteOneRegister(id) {
    return axios
      .delete(`${this.BASE_URL}/${id}`)
      .then(response => {
        return response;
      })
      .catch(err => console.error('ERROR: ', err));
  }
}
