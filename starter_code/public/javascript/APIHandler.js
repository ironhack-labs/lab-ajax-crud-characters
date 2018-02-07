class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios
      .get("http://localhost:8000/characters")
      .then(res => {
        return res.data;
      })
      .catch(console.error);
  }

  getOneRegister(id) {
    return axios
      .get("http://localhost:8000/characters/" + id)
      .then(res => {
        var x = res.data;
        return res.data;
      })
      .catch(console.error);
  }

  createOneRegister(charactersInfo) {
    return axios
      .post("http://localhost:8000/characters", charactersInfo)
      .then(res => {
        console.log("GREAT SUCCES!!");
        console.log(res);
      })
      .catch(console.error);
  }

  updateOneRegister(id, charactersInfo) {
    return axios
      .patch(`http://localhost:8000/characters/${id}`, charactersInfo)
      .then(res => {
        console.log("You update " + charactersInfo.name);
        console.log(res);
      })
      .catch(console.error);
  }

  deleteOneRegister(id) {
    return axios
      .delete(`http://localhost:8000/characters/${id}`)
      .then(res => {
        console.log("You delete a user"), //+ id.name);
          console.log(res);
        return true;
      })
      .catch(console.error);
  }
}
