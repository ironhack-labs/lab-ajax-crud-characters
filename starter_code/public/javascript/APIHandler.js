class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    axios.defaults.baseURL = baseUrl;
  }

  getFullList() {
    axios
      .get("/characters")
      .then(res => {
        console.log("get success");
        console.log(res.data);
        return res.data;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }

  getOneRegister(id) {
    return axios
      .get("/characters/" + id)
      .then(res => {
        console.log("get success");
        console.log(res.data);
        return res.data;
      })
      .catch(err => {
        console.log("error=" + err);
        throw err;
      });
  }

  createOneRegister(characterInfo) {
    let infoName = typeof characterInfo.name === "string";
    let infoOccupation = typeof characterInfo.occupation === "string";
    let infoDebt = typeof characterInfo.debt === "boolean";
    let infoWeapon = typeof characterInfo.weapon === "string";
    if (infoName === false) return "name";
    else if (infoOccupation === false) return "occupation";
    else if (infoDebt === false) return "debt";
    else if (infoWeapon === false) return "weapon";
    else {
      let character = {};
      axios
        .post("/characters", characterInfo)
        .then(res => {
          console.log("get success");
          return res.data;
          character = res.data;
        })
        .catch(err => {
          console.log(err);
        });
      return character;
    }
  }

  updateOneRegister(id, characterInfo) {
    //console.log(charactersAPI.getOneRegister(id));
    charactersAPI.getOneRegister(id).catch(err => {
      if (err == "Error: Request failed with status code 404")
        console.log("Character not found");
    });
    axios
      .patch("/characters/" + id, characterInfo)
      .then(res => {
        console.log("Update success");
        return "Update success";
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteOneRegister(id) {
    charactersAPI.getOneRegister(id).catch(err => {
      if (err == "Error: Request failed with status code 404")
        console.log("Character not found");
    });
    axios
      .delete("/characters/" + id)
      .then(res => {
        console.log("Character has been successfully deleted");
        return "Character has been successfully deleted";
      })
      .catch(err => console.log(err));
  }
}
