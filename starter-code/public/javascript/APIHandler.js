class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios
      .get(this.BASE_URL + '/characters')
      .then((response) => {
        // console.log(response);
        return response.data;
      })
      .catch((err) => console.log(err));
  }

  getOneRegister(id) {
    return axios
      .get(this.BASE_URL + '/characters/' + id)
      .then((response) => {
        return response.data;
      })
      .catch((err) => console.log(err));
  }

  createOneRegister(data) {
    console.log(this.BASE_URL + '/characters');
    axios
      .post(this.BASE_URL + '/characters', {
        name: data.name,
        occupation: data.occupation,
        weapon: data.weapon,
        cartoon: data.cartoon,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  }

  updateOneRegister(id, data) {
    axios
      .put(this.BASE_URL + '/characters/' + id, {
        name: data.name,
        occupation: data.occupation,
        weapon: data.weapon,
        cartoon: data.cartoon,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  }

  deleteOneRegister(id) {
    axios
      .delete(this.BASE_URL + '/characters/' + id)
      .then((response) => {})
      .catch((err) => console.log(err));
  }
}
