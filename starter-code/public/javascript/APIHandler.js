class APIHandler {
  constructor(baseURL, ressources) {
    this.ressources = ressources;
    this.apiTool = axios.create({
      baseURL
    });
  }

  getFullList() {
    return this.apiTool.get(`/characters`);
  }

  getOneRegister(id) {
    return this.apiTool.get(`/characters/${id}`);
  }

  createOneRegister(info) {
    return this.apiTool.post(`/characters`, info);
  }

  updateOneRegister(infos) {
    return this.apiTool.patch(`/characters/${infos.id}`, infos);
  }

  deleteOneRegister(id) {
    return this.apiTool.delete(`/characters/${id}`);
  }
}
