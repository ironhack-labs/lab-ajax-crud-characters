class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios.get("http://localhost:8000/characters").then(response => {
      console.log("post success");
      console.log(response.data);
      return response.data;
    });
    /* .catch(error => {
        console.log("Error!");
        console.log(error);
      });*/
  }

  getOneRegister(id) {
    axios
      .get(`http://localhost:8000/characters/${id}`)
      .then(response => {
        console.log("post success");
        console.log(response.data);
      })
      .catch(error => {
        console.log("Error!");
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
        console.log("Error!");
        console.log(error);
      });
  }

  createOneRegister(characterInfo) {
    axios
      .post("http://localhost:8000/characters", characterInfo)
      .then(response => {
        console.log("post success");
        console.log(response.data);
      })
      .catch(error => {
        console.log("Error!");
        console.log(error);
      });
  }

  updateOneRegister(characterInfo) {
    axios
      .patch(`http://localhost:8000/characters/${id}`, characterInfo)
      .then(response => {
        console.log("post success");
        console.log(response.data);
      })
      .catch(error => {
        console.log("Error!");
        console.log(error);
      });
  }
}
