// const axios = require("axios");

export default class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.handler = axios.create({
      baseURL: this.BASE_URL
    });
  }

  getFullList(url, clbk) {
    console.log("bordel");
    return this.handler.get(url);
    // this.handler
    //   .get(`${url}`)
    //   .then(APIRes => {
    //     console.log(APIRes);
    //     clbk("2");
    //   })
    //   .catch(err => console.log(err));
  }

  getOneRegister() {}

  createOneRegister() {}

  updateOneRegister() {}

  deleteOneRegister() {}
}

// module.exports = APIHandler;
