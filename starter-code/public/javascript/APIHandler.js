class APIHandler {

  constructor (baseUrl, model) {
    this.model = model;
    this.api = axios.create({
      baseURL : baseUrl
    });
  }

  getAll() {
    return this.api.get(`/${this.model}`)
  }

  getOne(id) {
    return this.api.get(`/${this.model}/${id}`)
  }

  createOne(data) {
    return this.api.post(`/${this.model}`, data)
  }

  deleteOne(id) {
    return this.api.delete(`/${this.model}/${id}`)
  }

  updateOne(id, data) {
    return this.api.patch(`/${this.model}/${id}`, data)
  }

}

export default APIHandler;
