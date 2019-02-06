class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(this.BASE_URL + "/characters").then(response => response.data);
  }

  getOneRegister(id) {
    return axios.get(this.BASE_URL + "/characters/" + id).then(response => response.data);
  }

  createOneRegister(newInfo) {
    return axios
      .post(this.BASE_URL + "/characters", newInfo)
      .then(response => response.data);
  }

  updateOneRegister(id, updatedInfo) {
    return axios
      .patch(this.BASE_URL + "/characters/" + id, updatedInfo)
      .then(response => response.data);
  }

  deleteOneRegister(id) {
    return axios.delete(this.BASE_URL + "/characters/" + id).then(response => response.data);
  }
}
