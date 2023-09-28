//const axios = require("axios");

class APIHandler {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:8000",
    });
  }

  getFullList() {
    console.log("getFullList: ");
    return this.api.get("/characters");
  }

  getOneRegister() {
    console.log("getOneRegister: ");
    const userInput = document.getElementById("character-id-input").value;
    return this.api.get(`/characters/${userInput}`);
  }

  createOneRegister = (inputData) => {
    console.log("createOneRegister: ");
    return this.api.post("/characters", inputData);
  };

  updateOneRegister(inputData) {
    const userInput = document.getElementById("changeID").value;
    console.log("updateOneRegister: ");
    return this.api.put(`/characters/${userInput}`, inputData);
  }

  deleteOneRegister() {
    console.log("deleteOneRegister: ");
    const userInput = document.getElementById(
      "character-id-delete-input"
    ).value;
    return this.api.delete(`/characters/${userInput}`);
  }
}

//module.exports = ApiHandler;
