class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios({
      method: "get",
      url: `${this.BASE_URL}/characters`
    }).then(res => {
      return res.data;
    });
  }

  getOneRegister(id) {
    return axios({
      method: "get",
      url: `${this.BASE_URL}/characters/${id}`
    }).then(res => {
      return res.data;
    });
  }

  createOneRegister(obj) {
    return axios({
      method: "post",
      url: `${this.BASE_URL}/characters`,
      params: "obj"
    }).then(res => {
      return res.data;
    });
  }

  updateOneRegister(id, obj) {
    return axios({
      method: "put",
      url: `${this.BASE_URL}/characters${id}`,
      params: obj
    }).then(res => {
      console.log("updated succes");
    });
  }

  deleteOneRegister() {
    return axios({
      method: "delete",
      url: `${this.BASE_URL}/chatacters${id}`,
      params: "URL parameters to be sent with the request"
    }).then(res => {
      return res.data;
    });
  }
}
