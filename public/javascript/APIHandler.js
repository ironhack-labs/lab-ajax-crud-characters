class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList() {
    const dataFromAPI = await axios.get(this.BASE_URL);
    return dataFromAPI.data;
  }

  async getOneRegister(id) {
    const charData = await axios.get(`${this.BASE_URL}/${id}`);
    return charData.data;
  }

  createOneRegister(data) {
    return axios.post(`${this.BASE_URL}`, data);
  }

  updateOneRegister(id, data) {
    return axios.patch(`${this.BASE_URL}/${id}`, data);
  }

  deleteOneRegister(id) {
    return axios.delete(`${this.BASE_URL}/${id}`);
  }
}
