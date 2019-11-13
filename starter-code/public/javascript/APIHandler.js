class APIHandler {
  constructor(baseURL) {
    this.service = axios.create({
      baseURL: baseURL
    })
  }

  getFullList() {
    return this.service.get("/characters")
  }

  getOneRegister(id) {
    return this.service.get(`/characters/${id}`);
  }

  createOneRegister(infos) {
    return this.service.post(`/characters/`, infos);
  }

  updateOneRegister(id, infos) {
    return this.service.patch(`/characters/${id}`, infos);
  }

  deleteOneRegister(value) {
    return this.service.delete(`/characters/${value}`);
  }
}