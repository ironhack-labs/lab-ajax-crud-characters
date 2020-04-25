class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl,
      this.service = axios.create({
        baseURL: baseUrl,
      });
  }

  getFullList() {
    return this.service.get("/characters");
  }

  displayCharacters(characters) {
    const charactersContainer = document.querySelector(".characters-container");
    let str = "";
    characters.data.forEach((character) => {
      const div = document.createElement("div");
      str += `<div class="character-info">
      <div class="name">Name : ${character.name}</div>
      <div class="occupation">Occupation : ${character.occupation}</div>
      <div class="cartoon">Is a Cartoon? : ${character.cartoon}</div>
      <div class="weapon">Weapon ${character.weapon}</div>
    </div>`
    });
    charactersContainer.innerHTML = str;
  }

  getOneRegister(id) {
    return this.service.get(`/characters/${id}`);
  }

  displayCharacter(character) {
    const charactersContainer = document.querySelector(".characters-container");
    let str = "";

    const div = document.createElement("div");
    str += `<div class="character-info">
      <div class="name">Name : ${character.data.name}</div>
      <div class="occupation">Occupation : ${character.data.occupation}</div>
      <div class="cartoon">Is a Cartoon? : ${character.data.cartoon}</div>
      <div class="weapon">Weapon ${character.data.weapon}</div>
    </div>`

    charactersContainer.innerHTML = str;
  }

  createOneRegister(name, occupation, weapon, cartoon) {
    return this.service.post("/characters", {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    })

  }

  updateOneRegister(id, name, occupation, weapon, cartoon) {

    return this.service.patch(`/characters/${id}`, {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    })


  }

  deleteOneRegister(id) {
    return this.service.delete(`/characters/${id}`)

  }
}