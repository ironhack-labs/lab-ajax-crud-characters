class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(this.BASE_URL + "/characters")
  }

  getOneRegister (inputValue) {
    return axios.get(this.BASE_URL + "/characters/" + inputValue)
  }

  createOneRegister ([name, occupation, weapon, cartoon]) {
    return axios.post(this.BASE_URL + "/characters", {
      "name": name,
      "occupation": occupation,
      "weapon": weapon,
      "cartoon": cartoon
    });
  }

  updateOneRegister (id, [name, occupation, weapon, cartoon]) {
    return axios.put(this.BASE_URL + "/characters/" + id, {
      "name": name,
      "occupation": occupation,
      "weapon": weapon,
      "cartoon": cartoon
    });
  }

  deleteOneRegister (inputValue) {
    return axios.delete(this.BASE_URL + "/characters/" + inputValue)
  }
}
