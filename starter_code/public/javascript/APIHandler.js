class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(this.BASE_URL + "/characters")
      .then(response => {
        document.getElementById(`characters-container`).innerHTML = "";
        response.data.forEach(character => {
          const newCharacterHTML = `
          <div class="character-info">
            <div id="nameCard" class="name">${character.name}</div>
            <div id="occupationCard" class="occupation">${
              character.occupation
            }</div>
            <div id="debtCard" class="debt">${character.debt}</div>
            <div id="weaponCard" class="weapon">${character.weapon}</div>
          </div>
          `;
          document.getElementById(
            `characters-container`
          ).innerHTML += newCharacterHTML;
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  getOneRegister(id) {
    axios
      .get(this.BASE_URL + "/characters/" + id)
      .then(response => {
        document.getElementById(`characters-container`).innerHTML = "";
        const newCharacterHTML = `
          <div class="character-info">
          <div id="nameCard" class="name">${response.data.name}</div>
          <div id="occupationCard" class="occupation">${
            response.data.occupation
          }</div>
          <div id="debtCard" class="debt">${response.data.debt}</div>
          <div id="weaponCard" class="weapon">${response.data.weapon}</div>
        </div>
        `;
        document.getElementById(
          `characters-container`
        ).innerHTML += newCharacterHTML;
      })
      .catch(err => {
        this.redButton(`fetch-one`);
      });
  }

  createOneRegister(characterInfo) {
    axios
      .post(this.BASE_URL + "/characters/", characterInfo)
      .then(response => {
        this.greenButton(`create-button`);
      })
      .catch(err => {
        this.redButton(`create-button`);
      });
  }

  updateOneRegister(id, characterInfo) {
    axios
      .patch(this.BASE_URL + "/characters/" + id, characterInfo)
      .then(response => {
        this.greenButton(`edit-button`);
      })
      .catch(err => {
        this.redButton(`edit-button`);
      });
  }

  deleteOneRegister(id) {
    axios
      .delete(this.BASE_URL + "/characters/" + id)
      .then(response => {
        this.greenButton(`delete-one`);
      })
      .catch(err => {
        this.redButton(`delete-one`);
      });
  }

  greenButton(classString) {
    document.getElementById(classString).classList.toggle(`active`);
    setTimeout(function() {
      document.getElementById(classString).classList.toggle(`active`);
    }, 1000);
  }

  redButton(classString) {
    document.getElementById(classString).classList.toggle(`warning`);
    setTimeout(function() {
      document.getElementById(classString).classList.toggle(`warning`);
    }, 1000);
  }
}
