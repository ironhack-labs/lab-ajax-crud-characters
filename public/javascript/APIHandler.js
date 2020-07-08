class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(this.BASE_URL);
  }

  getOneRegister (id) {
    return axios.get(this.BASE_URL+`/${id}`);
  }

  createOneRegister (newChar) {
    return axios.post(this.BASE_URL, newChar);
  }

  updateOneRegister (id, updatedChar) {
    return axios.put(this.BASE_URL+`/${id}`, updatedChar);
  }

  deleteOneRegister (id) {
    return axios.delete(this.BASE_URL+`/${id}`);
  }
}
