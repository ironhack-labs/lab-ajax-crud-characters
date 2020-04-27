// Having a class here is good if we have several databases,
// because it could take the baseUrl as the first argument
// and then other arguments
// So we would have only 1 class for all our databases

class APIHandler {
  constructor(baseUrl) { // we defined the Url on http://localhost:8000
    // this.BASE_URL = baseUrl;  // equals to http://localhost:8000

    this.service = axios.create({ baseURL: baseUrl }) // Axios has this action key we can create => it is the way we create a route with Axios

  // because creating an axios instance allows us to pass the "baseURL" option key once,
  // and that's the base URL that will be used everywhere
  }

  getFullList() {
    // we can either consume the promise inside index.js + use 'return' here
    // or we can consume it here directly using a callback function:

    // getFullList(cb) {
    //  axios.get(this.BASE_URL + "/characters")
    //   .then(apiResponse => {
    //     cb(apiResponse)
    //   })
    //   .catch()
    // }

    return this.service.get("/characters");
  }

  getOneRegister(id) {
    return this.service.get("/characters/" + id);
  }

  createOneRegister(character) {
    return this.service.post("/characters", character);
  }

  updateOneRegister(id, character) {
    return this.service.patch("/characters/" + id, character);
  }

  deleteOneRegister(id) {
    return this.service.delete("/characters/" + id);
  }
}
