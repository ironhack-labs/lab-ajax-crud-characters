const { json } = require("stream/consumers");

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get("/characters")
      .then((responseFromApi) => console.log(responseFromApi))
      .catch((error) => console.log(error));
  }

  getOneRegister() {
    axios
      .get("/characters/:id")
      .then((responseFromApi) => console.log(responseFromApi.id)) //unsure
      .catch((error) => console.log(error));
  }

  createOneRegister() {
    axios
      .post("/characters/")
      .then((responseFromApi) =>
        responseFromApi.render("/characters", {
          name: String,
          occupation: String,
          cartoon: Boolean,
          weapon: String,
        })
      )
      .catch((error) => console.log(error));
  }

  updateOneRegister(/*unsure*/) {}

  deleteOneRegister(/*unsure*/) {}
}
