class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios.get(`${this.BASE_URL}/characters`).then(res =>
      res.data.forEach(character => {
        createCard(
          character.name,
          character.occupation,
          character.weapon,
          character.cartoon
        );
      })
    );
  }

  getOneRegister(id) {
    axios.get(`${this.BASE_URL}/characters/${id}`).then(res => {
      createCard(
        res.data.name,
        res.data.occupation,
        res.data.weapon,
        res.data.cartoon
      );
    });
  }

  createOneRegister(name, occupation, weapon, cartoon) {
    let newCharacter = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    };

    axios.post(`${this.BASE_URL}/characters`, newCharacter)
      .then(() => {
        $("#send-data").css("background-color", "green");
        this.getFullList();
      })
      .catch(err => {
        $("#send-data").css("background-color", "red");
        console.log(err);
      });
  }

  updateOneRegister(id, name, occupation, weapon, cartoon) {
    let character = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    };

    axios.patch(`${this.BASE_URL}/characters/${id}`, character)
      .then(() => {
        $("#send-data").last().css("background-color", "green");
        this.getFullList();
      })
      .catch(err => {
        $("#send-data").last().css("background-color", "red");
        console.log(err);
      });
  }

  deleteOneRegister(id) {
    axios
      .delete(`${this.BASE_URL}/characters/${id}`)
      .then(() => {
        $("#delete-one").css("background-color", "green");
        this.getFullList();
      })
      .catch(() => {
        $("#delete-one").css("background-color", "red");
      });
  }
}
