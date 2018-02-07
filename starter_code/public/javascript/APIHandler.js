class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.characterApi = axios.create({
      baseURL: this.BASE_URL
    });
  }

  getFullList() {
    return this.characterApi // return la promesse
      .get("/characters")
      .then(result => {
        //console.log(result);
        return result.data; //resultat de la promesse
      })
      .catch(err => console.log(err));
  }

  getOneRegister(id) {
    return this.characterApi
      .get(`/characters/${id}`)
      .then(result => {
        console.log(result);
        return result.data;
      })
      .catch(err => console.log(err));
  }

  createOneRegister(value) {
    return this.characterApi
      .post("/characters", value)
      .then(response => {
        console.log("post success");
        return response.data;
        // console.log(response);
      })
      .catch(error => {
        console.log("Oh No! Error!");
        // console.log(error);
      });
  }

  updateOneRegister(charId, updateInfo) {
    return this.characterApi
      .patch(`/characters/${charId}`, updateInfo)
      .then(response => {
        console.log("Update SUCCESS!");
      })
      .catch(error => {
        console.log(error);
      });
  }
  deleteOneRegister(id) {
    return this.characterApi.delete(`/characters/${id}`);
  }
}
