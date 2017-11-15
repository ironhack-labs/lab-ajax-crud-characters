class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList(cb) {
    axios
      .get(`${this.BASE_URL}/characters`)
      .then(response => cb(response))
      .catch(error => console.log(error.data));
  }

  getOneRegister(cb) {
    const charId = $("#character-id-input").val();

    axios
      .get(`${this.BASE_URL}/characters/${charId}`)
      .then(response => cb(response))
      .catch(error => cb({ error: err }));
  }

  createOneRegister() {
    const characterInf = {
      name: $("#name-input").val(),
      occupation: $("#occupation-input").val(),
      weapon: $("#weapon-input").val()
    };

    axios
      .post(`${this.BASE_URL}/characters`, characterInf)
      .then(response => cb(response))
      .catch(error => console.log(error.data));
  }

  updateOneRegister() {
    const updateInfo = {
      name: $("#update-name-input").val(),
      occupation: $("#update-occupation-input").val(),
      weapon: $("#update-weapon-input").va()
    };
    const charId = $("#character-id-input").val();

    axios
      .patch(`${this.BASE_URL}/characters/${charId}`, updateInfo)
      .then(response => console.log(response.data))
      .catch(error => console.log(error.data));
  }

  deleteOneRegister(cb) {
    const charId = $("#detele-char").val();
    axios
      .delete(`${this.BASE_URL}/characters/${charId}`)
      .then(response => cb(response))
      .catch(error => cb({ error: err }));
  }
}
