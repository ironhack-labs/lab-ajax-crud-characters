class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({ baseURL: this.BASE_URL });
  }

  getFullList = () => this.api.get("/")

  getOneRegister = id => this.api.get(`/${id}`)

  createOneRegister = data => this.api.post("/", data)

  updateOneRegister = (id, data) => this.api.put(`/${id}`, data)

  deleteOneRegister = id => this.api.delete(`/${id}`)
}
