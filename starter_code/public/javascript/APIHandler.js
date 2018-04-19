class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(`${this.BASE_URL}/characters`)
      .then(res => res.data)
      .then(data => {
        document.getElementById("char-container").innerHTML = "";
        data.forEach(e => {
          this.showCharacter(e);
        });
      });
  }

  showCharacter(character) {
    const newCharacterHtml = `
      <div class= "character-info>
        <div class="id">id: ${character.id}</div>
        <div class="name">Character Name: ${character.name}</div>
        <div class="occupation">Occupation: ${character.occupation}</div>
        <div class="cartoon">Cartoon: ${character.cartoon}</div>
        <div class="weapon">Weapon: ${character.weapon}</div>
        
      </div>
      `;
    document.getElementById("char-container").innerHTML += newCharacterHtml;
  }

  getOneRegister() {
    document.getElementById("char-container").innerHTML = "";
    const id = document.getElementById("input").value;

    axios
      .get(`${this.BASE_URL}/characters/${id}`)
      .then(res => res.data)
      .then(data => {
        document.getElementById("char-container").innerHTML += "";
        this.showCharacter(data);
      });
  }

  createOneRegister(newCharacter) {
    axios
      .post(`${this.BASE_URL}/characters/`, newCharacter)

      .then(console.log(newCharacter));
  }

  updateOneRegister() {}

  deleteOneRegister() {}
}
