class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }
  // <div class="character-info">
  // <div class="name">Character Name</div>
  // <div class="occupation">Character Occupation</div>
  // <div class="cartoon">Is a Cartoon?</div>
  // <div class="weapon">Character Weapon</div>

  buildCharacterBox(character) {
    let charInfo = document.createElement("div");
    charInfo.className = "character-info";
    charInfo.innerHTML = `
            <div class="id">Id:: ${character.id}</div>
        <div class="name">Name: ${character.name}</div>
        <div class="occupation">Occupation: ${character.occupation}</div>
        <div class="cartoon">Cartoon: ${character.cartoon}</div>
        <div class="weapon">Weapon: ${character.weapon}</div>`;

    document.querySelector(".characters-container").append(charInfo);
  }

  getFullList() {
    axios
      .get(`${this.BASE_URL}/characters`)
      .then(({ data }) => {
        //repasarlos
        data.forEach((character) => this.buildCharacterBox(character));
        //hacer el box del character
        //crear la card
        //enviarla al index
      })
      .catch((error) => console.log(error, "el error"));
  }

  getOneRegister(idCharacter) {
    axios.get(`${this.BASE_URL}/characters/${idCharacter}`).then(({ data }) => {
      this.buildCharacterBox(data).catch((error) =>
        console.log("error", error)
      );
    });
  }

  createOneRegister(character) {
    axios
    .post(`${this.BASE_URL}/characters/`, character)
    .then(({ data }) => {
      console.log(data))
      .catch((error) =>
        console.log("error", error)
      );
    });
  }

  updateOneRegister() {}

  deleteOneRegister() {
    axios.get(`${this.BASE_URL}/characters/${idCharacter}`).then(({ data }) => {
      this.buildCharacterBox(data).catch((error) =>
        console.log("error", error)
      );
    });
  }
}
