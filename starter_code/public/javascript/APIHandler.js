class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(`${this.BASE_URL}/characters`)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  }

  getOneRegister(characterId) {
    const id = characterId;
    axios
      .get(`${this.BASE_URL}/characters/${id}`)
      .then(response => showCharacter(response.data))
      .catch(error => console.log(error.data));
  }

  createOneRegister(newCharacter) {
    console.log(newCharacter);
    axios
      .post(`${this.BASE_URL}/characters/`, newCharacter)
      .then(response => addCharacter(newCharacter))
      .catch(error => console.log(error));
  }

  updateOneRegister(editCharacter) {
    axios
      .patch(`${this.BASE_URL}/characters/${editCharacter.id}`, editCharacter)
      .then(response => console.log("Character updated", response.data))
      .catch(error => console.log(error));
  }

  deleteOneRegister(characterId) {
    const id = characterId;
    axios
      .delete(`${this.BASE_URL}/characters/${id}`)
      .then(response => console.log("Character deleted"))
      .catch(error => console.log(error));
  }
}

function addCharacter(response) {
  document.getElementsByClassName("characters-container")[0].innerHTML += `
    <div class="character-info">
    <div id="name">Character added</div>
    <div id="name">Name: ${response.name}</div>
    <div id="occupation">Occupation: ${response.occupation}</div>
    <div id="debt">Debt: ${response.debt}</div>
    <div id="weapon">Weapon: ${response.weapon}</div>
  </div>
    `;
}

function showCharacter(response) {
  console.log(response);
  document.getElementById(
    "name"
  ).innerHTML = `Character Name: ${response.name}`;
  document.getElementById(
    "occupation"
  ).innerHTML = `Character Occupation: ${response.occupation}`;
  document.getElementById("debt").innerHTML = `Debt: ${response.debt}`;
  document.getElementById("weapon").innerHTML = `Weapon: ${response.weapon}`;
}
