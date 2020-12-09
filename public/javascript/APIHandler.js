class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`);
  }

  getOneRegister(charID) {
    return axios.get(`${this.BASE_URL}/characters/` + charID);
  }

  createOneRegister(object) {
    try {
      return axios.post(`${this.BASE_URL}/characters`, object);
    } catch (err) {
      console.error(err);
    }
  }

  async updateOneRegister(charID, object) {
    try {
      await axios.patch(`${this.BASE_URL}/characters/` + charID, object);
      return axios.get(`${this.BASE_URL}/characters/` + charID);
    } catch (err) {
      console.error("Character not found");
    }
  }

  async deleteOneRegister(charID) {
    try {
      await axios.delete(`${this.BASE_URL}/characters/` + charID);
      console.log("Character has been successfully deleted");
    } catch (err) {
      console.error("Character not found");
    }
  }
}
