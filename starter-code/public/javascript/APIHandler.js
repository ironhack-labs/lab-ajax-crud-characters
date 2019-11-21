class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList() {
    const data = await axios.get(`${this.BASE_URL}/characters`);
    return data;
  }

  async getOneRegister(id) {
    const data = await axios.get(`${this.BASE_URL}/characters/${id}`).catch(err => {
      document.getElementById("msg-fetch").innerHTML = "Character not found";
    });
    return data;
  }

  async createOneRegister(character) {
    const newChar = await axios.post(`${this.BASE_URL}/characters`, character);
    return newChar;
  }

  async updateOneRegister(id, character) {
    const data = await axios.patch(`${this.BASE_URL}/characters/${id}`, character);
    return data;
  }

  async deleteOneRegister(id) {
    const data = await axios
      .delete(`${this.BASE_URL}/characters/${id}`)
      .catch(err => {
        document.getElementById("msg-delete").innerHTML = "Character not found";
      });
  }
}