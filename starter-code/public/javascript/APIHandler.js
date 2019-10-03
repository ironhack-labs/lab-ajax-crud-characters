class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.client = axios.create({
      baseURL: this.BASE_URL
    });
  }

  getFullList() {
    return this.client.get('characters');
  }

  getOneRegister(id) {
     return this.client.get(`characters/${id}`); 
  }

  createOneRegister(obj) {
    return this.client.post(`characters`, obj);
  }

  updateOneRegister(id, obj) {
    return this.client.put(`characters/${id}`, obj);
  }

  deleteOneRegister(id) {
    return this.client.delete(`characters/${id}`);
  }
}