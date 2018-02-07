class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    const characterApi = axios.create({
      baseURL: this.BASE_URL
    });
  }

  getFullList() {
    this.characterApi
      .get("/characters")
      .then(result => {
        result.forEach(element => {
          console.log(element);
        });
      })
      .catch(err => console.log(err));
  }

  getOneRegister(id) {
    this.characterApi
      .get(`/characters/${id}`)
      .then(result => {
        console.log(result);
      })
      .catch(err => console.log(err));
  }

  createOneRegister() {
    this.characterApi
      .post("localhost:300/characters")
      .then(response => {
        console.log("post success");
        console.log(response);
      })
      .catch(error => {
        console.log("Oh No! Error!");
        console.log(error);
      });
  }

  updateOneRegister() {
    const updateInfo = {
      name: document.getElementById("update-name-input").value,
      occupation: document.getElementById("update-occupation-input").value,
      weapon: document.getElementById("update-weapon-input").value
    };
    const charId = document.getElementById("chr-id").value;
    this.characterApi
      .patch(`localhost/characters/${charId}`, updateInfo)
      .then(response => {
        console.log("Update SUCCESS!");
      })
      .catch(error => {
        console.log(error);
      });
  }
  deleteOneRegister(id) {
    this.characterApi
      .delete(`localhost/characters/${id}`)
      .catch(err => console.error(err));
  }
}
