class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios
      .get("http://localhost:8000/characters")
      .then(res => {
        console.log(res.data)
        return res.data;
      })
      .catch(e => console.log(e));
  }

  getOneRegister(char) {
    return axios
      .get(`http://localhost:8000/characters/${char}`)
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(e => console.log(e));
  }

  createOneRegister(newChar) {
    axios
      .post("http://localhost:8000/characters", newChar)
      .then(res => {
        console.log("post success");
        console.log(res);
      })
      .catch(error => {
        console.log("Oh No! Error!");
        console.log(error);
      });
  }

  updateOneRegister(edit) {
    axios
      .patch(`http://localhost:8000/characters/${edit.id}`, edit)
      .then(res => {
        console.log("patch success");
        console.log(res);
      })
      .catch(error => {
        console.log("Oh No! Error!");
        console.log(error);
      });
  }

  deleteOneRegister(del) {
    axios.delete(`http://localhost:8000/characters/${del.id}`)
    .then(res => {
      console.log("patch success");
      console.log(res);
    })
    .catch(error => {
      console.log("Oh No! Error!");
      console.log(error);
    });
  }
}
