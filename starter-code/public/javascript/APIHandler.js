class APIHandler {
  constructor(url) {
    this.BASE_URL = url;
    this.ENDPOINT = url + "/characters/";
  }

  getAll() {
    return axios.get(this.ENDPOINT).then(response => response.data);
  }

  getOne(id) {
    return axios.get(this.ENDPOINT + id).then(response => response.data);
  }

  createOne(body) {
    return axios.post(this.ENDPOINT, body).then(response => {
      console.log("post successfull and the response is: ", response.data);
      showCharacter(response.data);
    });
  }

  deleteOne(id) {
    return axios.delete(this.ENDPOINT + id).then(response => {
      console.log("delete successfull", response.data);
    });
  }

  editOne(id, body) {
    return axios.patch(this.ENDPOINT + id, updatedData).then(response => {
        console.log("update successfull", response.data);
        showCharacter(response.data);
    });
  }
}
