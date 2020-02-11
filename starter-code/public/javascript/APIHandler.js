class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({
      baseURL: baseUrl
    })
  }


  getFullList () {
    return this.api.get("/characters");
  }

  getOneRegister (id) {
    return console.log(this.api.get(`/characters/${id}`));
  }

  createOneRegister () {
    return this.api.post("/characters");
  }

  updateOneRegister () {
    return this.api.patch("/characters/:id")
  }

  deleteOneRegister () {
    return this.api.delete("/characters/:id")
  }
}

export default APIHandler;