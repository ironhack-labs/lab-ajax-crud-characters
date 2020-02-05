class APIHandler {

  constructor (baseUrl) {
    this.api = axios.create({
      baseURL : baseUrl
    });
  }

  getAll() {
    return this.api.get('/characters')
  }

  getOne(character_id) {
    return this.api.get(`/characters/${character_id}`)
  }

  createOne(config) {
    return this.api.post(`/characters`, config)
  }

  deleteOne(character_id) {
    return this.api.delete(`/characters/${character_id}`)
  }

  updateOne(character_id, new_config) {
    return this.api.patch(`/characters/${character_id}`, new_config)
  }

}

export default APIHandler;
