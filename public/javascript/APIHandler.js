class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(this.baseURL + "/characters");
  }

  getOneRegister (ID) {
    return axios.get(this.baseURL + "/characters" +`/${ID}`);
  }

  createOneRegister (data) {
    return axios.post(data);
  }

  updateOneRegister (id, data) {
    return axios.patch(this.baseURL + "/characters" +`/${id}`, data);
  }

  deleteOneRegister (id) {
    return axios.delete(this.baseURL + "/characters" +`/${ID}`)
  }
}
