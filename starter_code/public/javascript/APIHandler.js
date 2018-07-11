class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(this.BASE_URL + "/characters").then(res => {
      //console.log(res)
      return res.data;
    });
  }

  getOneRegister(id) {
    return axios.get(this.BASE_URL + "/characters/" + id).then(res => {
      return res.data;
    });
  }

  createOneRegister(obj) {
    return axios({
      method: "post",
      url: this.BASE_URL + "/characters",
      data: obj
    }).then(res => {
      return res.data;
    });
  }

  updateOneRegister(id, obj) {
    return axios({
      method: "put",
      url: this.BASE_URL + "/characters/" + id,
      data: obj
    }).then(res => {
      console.log("updated succes");
    });
  }

  deleteOneRegister(id) {
    return axios({
      method: "delete",
      url: this.BASE_URL + "/characters/" + id
    }).then(res => {
      return res.data;
    });
  }
}
