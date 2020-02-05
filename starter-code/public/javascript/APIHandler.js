// const service = axios.create({
//   baseURL: "http://localhost:8000"
// });

//axios.get url.route.then.catch

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({baseURL: this.BASE_URL})
  }

  getFullList () {
    return this.api.get("/characters");
  }

  getOneRegister (id) {
    return this.api.get("/characters/"+id);
  }

  createOneRegister (character) {
    return this.api.post("/characters", character)
  }

  updateOneRegister (id, character) {
    return this.api.patch("/characters/"+id, character)
  }

  deleteOneRegister (id) {
    return this.api.delete("/characters/"+id)
  }
}

export default APIHandler;