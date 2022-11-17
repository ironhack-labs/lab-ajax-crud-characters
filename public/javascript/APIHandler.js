class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({ baseURL: this.BASE_URL });
  }

  async getFullList() {
    return await this.api.get(`/characters`).then((res) => res.data);
  }

  async getOne(id) {
    return await this.api.get(`/characters/${id}`).then((res) => res.data);
  }

  async createOne(info) {
    return await this.api.post(`/characters`, info).then((res) => res.data);
  }

  async updateOne(id, info) {
    return await this.api.put(`/characters/${id}`, info).then((res) => res.data);
  }

  async deleteOne(id) {
    return await this.api.delete(`/characters/${id}`).then((res) => res.data);
  }
}
