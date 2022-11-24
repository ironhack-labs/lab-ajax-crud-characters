class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(this.BASE_URL + `/characters`);
  }

  getOneRegister(id) {
    return axios.get(this.BASE_URL + `/characters/${id}`);
  }

  createOneRegister(name, occupation, weapon, isACartoon) {
    return axios.post(this.BASE_URL + `/characters`, {
      name: name,
      occupation: occupation,
      weapon: weapon,
      isACartoon: isACartoon,
    });
  }

  updateOneRegister() {}

  deleteOneRegister(id) {
    return axios.delete(this.BASE_URL + `/characters/${id}`);
  }
}
