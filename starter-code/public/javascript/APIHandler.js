// const axios = require("axios");

export default class APIHandler {
  constructor(baseUrl) {
    // this.BASE_URL = baseUrl; // base plan : use axios.GET(BASE_URL/characters)
    this.handler = axios.create({
      baseURL: baseUrl
    });
  }

  getFullList(url) {
    console.log("fck callback");
    return this.handler.get(url);
    this.handler
      .get(`${url}`)
      .then(APIRes => {
        console.log(APIRes);
        clbk("2");
      })
      .catch(err => console.log(err));
  }

  // getFullList(url, clbk) {
  //   console.log("callback method");
  //   this.handler
  //     .get(`${url}`)
  //     .then(APIRes => {
  //       console.log(APIRes);
  //       clbk(clbk);
  //     })
  //     .catch(err => console.log(err));
  // }

  getOneRegister(id) {
    // this.handler.get(`${url}/${id}`);
    console.log("fetch one");
    return this.handler.get(`/characters/${id}`);
  }

  createOneRegister(char) {
    return this.handler.post("/characters", char); //char has to be an object, always, because it's axios
  }

  updateOneRegister(id, data) {
    return this.handler.patch(`/characters/${id}`, data);
  }

  deleteOneRegister(id) {
    return this.handler.delete(`/characters/${id}`);
  }
}

// module.exports = APIHandler;
