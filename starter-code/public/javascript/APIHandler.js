class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    const url = this.BASE_URL;
    return axios
      .get(`${url}/characters`)
      .then(response => {
        // console.log(response.data);
        let result = response.data;
        return result;
      })
      .catch(err => console.log(err));
  }

  getOneRegister(id) {
    return axios
      .get(`http://localhost:8000/characters/${id}`)
      .then(response => {
        return response.data;
      })
      .catch(err => console.log(err));
  }

  createOneRegister(name, occupation, weapon, cartoon) {
    axios
      .post("http://localhost:8000/characters", {
        name: name,
        occupation: occupation,
        weapon: weapon,
        cartoon: cartoon
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(err => console.log(err));
  }

  updateOneRegister(id, name, occupation, weapon, cartoon) {
    axios
      .patch(`http://localhost:8000/characters/${id}`, {
        name: name,
        occupation: occupation,
        weapon: weapon,
        cartoon: cartoon
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(err => console.log(err));
  }

  deleteOneRegister(id) {
    axios
      .delete(`http://localhost:8000/characters/${id}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => console.log(err));
  }
}
