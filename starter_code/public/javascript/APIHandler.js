class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`).then(resp => {
      return resp.data;
    });
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`).then(resp => {
      console.log(resp.data);
      return resp.data;
    });
  }

  createOneRegister(name, occupation, debt, weapon) {
    return axios
      .post(`${this.BASE_URL}/characters/`, {
        name,
        occupation,
        debt,
        weapon
      })
      .then(res => {
        return console.log(res);
      });
  }

  updateOneRegister(id, name, occupation, debt, weapon) {
    return axios
      .patch(`${this.BASE_URL}/characters/${id}`, {
        name,
        occupation,
        debt,
        weapon
      })
      .then(res => {
        return console.log(res);
      });
  }

  deleteOneRegister(id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`);
  }
}
