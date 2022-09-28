class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({ baseURL: this.BASE_URL });
  }

  async getFullList() {
    const { data } = await this.api.get("/characters");
    return data;
  }

  async getOneRegister(id) {
    const { data } = await this.api.get(`/characters/${id}`);
    return data;
  }

  async createOneRegister(characterData) {
    try {
      const { data } = await this.api.post("/characters", characterData);
      return {
        message: "Successfully created element with id: " + data.id,
        id: data.id,
      };
    } catch (err) {
      return;
    }
  }

  async updateOneRegister(id, characterData) {
    try {
      const { data } = await this.api.put(`/characters/${id}`, characterData);
      return {
        message: "Successfully Updated element with id: " + id,
        id: id,
      };
    } catch (err) {
      return;
    }
  }

  async deleteOneRegister(id) {
    try {
      const { data } = await this.api.delete(`/characters/${id}`);
      return {
        message: "Successfully deleted element with id: " + id,
        id: id,
      };
    } catch (err) {
      return;
    }
  }
}
