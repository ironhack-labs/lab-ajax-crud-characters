class APIHandler {
  constructor (baseURL) {
    this.baseURL = baseURL;
  }

  getFullList () {
    return axios.get(this.baseURL + "/characters");
  }

  getOneRegister (ID) {
    return axios.get(this.baseURL + "/characters" +`/${ID}`);
  }

  createOneRegister (data) {
    return axios.post(this.baseURL + "/characters", data);
  }

  updateOneRegister (id, data) {
    return axios.patch(this.baseURL + "/characters" +`/${id}`, data);
  }

  deleteOneRegister (id) {
    return axios.delete(this.baseURL + "/characters" +`/${id}`)
  }

}

export default APIHandler;