class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios
      .get(`${this.BASE_URL}/characters`)
      .then(list => {
        return list.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  getOneRegister(id) {
    return axios
      .get(`${this.BASE_URL}/characters/${id}`)
      .then(element => {
        return element.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  

}











