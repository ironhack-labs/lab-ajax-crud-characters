class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(this.BASE_URL + "/characters")
      .then(response => {
        console.log(response.data);
        let parent = document.getElementById("chars-container");
        for (var i = 0; i < response.data.length; i++) {
          let div = document.createElement("div");
          div.innerHTML = `
            <div class="character-info">
              <div class="id">Id: ${response.data[i].id}</div>
              <div class="name">Name: ${response.data[i].name}</div>
              <div class="occupation">Occupation: ${response.data[i].occupation}</div>
              <div class="cartoon">Is a cartoon? ${response.data[i].cartoon}</div>
              <div class="weapon">Weapon: ${response.data[i].weapon}</div>
            </div>`;
          parent.appendChild(div);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  getOneRegister(id) {
    axios
      .get(this.BASE_URL + `/characters/${id}`)
      .then(character => {
        return character;
      })
      .catch(err => {
        console.log(err);
      });
  }

  createOneRegister(character) {
    axios
      .post(this.BASE_URL + "/characters", character)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateOneRegister(id, character) {
    axios
      .put(this.BASE_URL + `/characters/${id}`, character)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteOneRegister() {
    axios
      .delete(this.BASE_URL + `/characters/${id}`)
      .then()
      .catch();
  }
}
