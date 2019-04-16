// export
export default class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(this.BASE_URL + "/characters")
      .then(response => {
        console.log(response.request.response); //burda response'ın içindeki requess'in içindeki response'u seçiyorsun. object karakterin ismi vs
      })
      .catch(error => {
        console.log(error);
      });
  }

  createCharacter(characterInfo) {
    axios
      .post(this.BASE_URL + "/characters", characterInfo)

      .then(response => {
        console.log("post successful and the response is", response);
      })
      .catch(error => {
        console.log("oh no there is err:", error);
      });
  }

  getOneRegister(theId) {
    axios
      .get(this.BASE_URL + "/characters/" + `/${theId}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateOneRegister() {
    axios
      .put(this.BASE_URL + "/characters/" + id, {
        id: id,
        name: name,
        occupation: occupation,
        cartoon: cartoon,
        weapon: weapon
      })
      .then(response => {
        console.log(response.request.response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteOneRegister(deleteID) {
    axios
      .delete(this.BASE_URL + "/characters/" + `/${deleteID}`)
      .then(response => {
        console.log(response.request.response);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
