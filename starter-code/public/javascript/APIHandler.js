class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.handler = axios.create({
      baseURL: this.BASE_URL
    });
  };

  getFullList () {
    return this.handler.get(`/characters`);
  };

  getOneRegister (id) {
    return this.handler.get(`/characters/${id}`);
  };

  createOneRegister (character) {
    return this.handler.post(`/characters`, character);
  };

  deleteOneRegister (id) {
    return this.handler.delete(`/characters/${id}`);
  };

  updateOneRegister (character, id) {
    return this.handler.patch(`/characters/${id}`, character);
  };

};

export default APIHandler;