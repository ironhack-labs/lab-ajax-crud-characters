class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    const url = `${this.BASE_URL}/characters`;
    return axios
      .get(url)
      .then(res => {
        return res.data;
      })
      .catch(err => console.log(err));
  }

  getOneRegister(id) {
    const url = `${this.BASE_URL}/characters/${id}`;
    return axios
      .get(url)
      .then(res => {
        return res.data;
      })
      .catch(err => console.log(err));
  }

  createOneRegister(characterInfo = {}) {
    const url = `${this.BASE_URL}/characters`;
    return axios
      .post(url, characterInfo)
      .then(res => {
        return res.data;
      })
      .catch(err => console.log(err));
  }

  updateOneRegister(updateCharacterInfo, id) {
    const url = `${this.BASE_URL}/characters/${id}`;
    return axios
      .patch(url, updateCharacterInfo)
      .then(res => {
        return res.data;
      })
      .catch(err => console.log(err));
  }

  deleteOneRegister(id) {
    const url = `${this.BASE_URL}/characters/${id}`;
    return axios
      .delete(url)
      .then(res => {
        return res.data;
      })
      .catch(err => console.log(err));
  }
}
