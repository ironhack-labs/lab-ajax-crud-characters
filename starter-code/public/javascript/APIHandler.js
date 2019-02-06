function selectContainer(containerClass) {
  const container = document.querySelector(containerClass);
  container.innerHTML = "";
  return container;
}

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios.get(this.BASE_URL + "/characters").then(characters => {
      const container = selectContainer(".characters-container");

      characters.data.forEach(character => {
        const charactersInfo = document.createElement("div");
        charactersInfo.classList.add("character-info");

        const charactersName = document.createElement("div");
        charactersInfo.classList.add("name");
        charactersName.innerHTML = character.name;
        charactersInfo.appendChild(charactersName);

        const charactersOccupation = document.createElement("div");
        charactersInfo.classList.add("occupation");
        charactersOccupation.innerHTML = character.occupation;
        charactersInfo.appendChild(charactersOccupation);

        const charactersWeapon = document.createElement("div");
        charactersInfo.classList.add("weapon");
        charactersWeapon.innerHTML = character.cartoon;
        charactersInfo.appendChild(charactersWeapon);

        const charactersCartoon = document.createElement("div");
        charactersInfo.classList.add("cartoon");
        charactersCartoon.innerHTML = character.weapon;
        charactersInfo.appendChild(charactersCartoon);

        container.appendChild(charactersInfo);
      });
    });
  }

  getOneRegister(characterId) {
    axios
      .get(this.BASE_URL + "/characters" + "/" + characterId)
      .then(character => {
        const container = selectContainer(".characters-container");
        const charactersInfo = document.createElement("div");
        charactersInfo.classList.add("character-info");

        const charactersName = document.createElement("div");
        charactersInfo.classList.add("name");
        charactersName.innerHTML = character.data.name;
        charactersInfo.appendChild(charactersName);

        const charactersOccupation = document.createElement("div");
        charactersInfo.classList.add("occupation");
        charactersOccupation.innerHTML = character.data.occupation;
        charactersInfo.appendChild(charactersOccupation);

        const charactersCartoon = document.createElement("div");
        charactersInfo.classList.add("cartoon");
        charactersCartoon.innerHTML = character.data.weapon;
        charactersInfo.appendChild(charactersCartoon);

        const charactersWeapon = document.createElement("div");
        charactersInfo.classList.add("weapon");
        charactersWeapon.innerHTML = character.data.cartoon;
        charactersInfo.appendChild(charactersWeapon);

        container.appendChild(charactersInfo);
      });
  }

  createOneRegister(payload) {
    axios
      .post(this.BASE_URL + "/characters", payload)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  updateOneRegister(payload) {
    console.log(payload);
    axios
      .put(this.BASE_URL + "/characters" + "/" + payload.id, payload)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  deleteOneRegister(characterId) {
    axios
      .delete(this.BASE_URL + "/characters" + "/" + characterId)
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log("No hay"));
  }
}
