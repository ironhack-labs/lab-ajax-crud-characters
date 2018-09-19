class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios
      .get("http://localhost:8000/characters")
      .then(response => {
        console.log("post success");
        console.log(response.data);
        return response.data;
      })
      .catch(error => {
        console.log("Oh No! Error!");
        console.log(error);
      });
  }

  getOneRegister(id) {
    axios
      .get(`http://localhost:8000/characters/${id}`)
      .then(response => {
        console.log("post success");
        console.log(response.data);
      })
      .catch(error => {
        console.log("Oh No! Error!");
        console.log(error);
      });
  }

  deleteOneRegister(id) {
    axios
      .delete(`http://localhost:8000/characters/${id}`)
      .then(response => {
        console.log("post success");
        console.log(response.data);
      })
      .catch(error => {
        console.log("Oh No! Error!");
        console.log(error);
      });
  }

  createOneRegister(nameC, occupationC, weaponC, cartoonC) {
    const characterInfo = {
      name: nameC,
      occupation: occupationC,
      weapon: weaponC,
      cartoon: cartoonC
    };
    axios
      .post("http://localhost:8000/characters", characterInfo)
      .then(response => {
        console.log("post success");
        console.log(response.data);
      })
      .catch(error => {
        console.log("Oh No! Error!");
        console.log(error);
      });
  }

  updateOneRegister(id, nameE, occupationE, weaponE, cartoonE) {
    const characterInfo = {
      name: nameE,
      occupation: occupationE,
      weapon: weaponE,
      cartoon: cartoonE
    };
    axios
      .patch(`http://localhost:8000/characters/${id}`, characterInfo)
      .then(response => {
        console.log("post success");
        console.log(response.data);
      })
      .catch(error => {
        console.log("Oh No! Error!");
        console.log(error);
      });
  }
}
