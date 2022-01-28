class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({
      baseURL: this.BASE_URL
    })
  }
  //  http://localhost:8000/ baseURL?

  getFullList = async () => {
    const { data } = await this.api.get('/characters');
    return data;
  }

  getOneRegister = async (id) => {
    const { data } = await this.api.get(`/characters/${id}`);
    return data;
  }

  createOneRegister = async (characterObject) => {
    const { data } = await this.api.post(`/characters`, characterObject);
    return data
  }

  updateOneRegister = async (id, charInfo) => {
    const { data } = await this.api.put(`/characters/${id}`, charInfo);
    return data;
  }

  deleteOneRegister = async () => {
    const { data } = await this.api.delete(`/characters/${id}`);
    return data;
  }
}
