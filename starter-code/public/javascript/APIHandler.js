class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    $(".characters-container").empty();
    const getCharacter = id => {
      return axios.get(`${this.BASE_URL}/${id}/`).then(res => {
        let name = res.data.name;
        let occupation = res.data.occupation;
        let cartoon = res.data.cartoon;
        let weapon = res.data.weapon;
        return { id, name, occupation, cartoon, weapon };
      });
    };

    const printCharacter = ({ id, name, occupation, cartoon, weapon }) => {
      let el = $("<div>").addClass("character-info");
      let idEl = $("<div>").text(`Character ID: ${id}`);
      let nameEl = $("<div>").text(`Character Name: ${name}`);
      let occupationEl = $("<div>").text(`Occupation: ${occupation}`);
      let cartoonEl = $("<div>").text(`Is a cartoon? ${cartoon}`);
      let weaponEl = $("<div>").text(`Weapon: ${weapon}`);
      el.append(idEl, nameEl, occupationEl, cartoonEl, weaponEl);
      $(".characters-container").append(el);
    };

    const getCharacters = () => {
      return axios.get(this.BASE_URL).then(res => {
        const characters = res.data;
        let proms = [];

        characters.forEach(c => {
          let charId = c.id;
          proms.push(getCharacter(charId));
        });
        Promise.all(proms).then(characters => {
          characters.forEach(ch => printCharacter(ch));
        });
      });
    };

    getCharacters();
  }

  getOneRegister(id) {
    $(".characters-container").empty();
    const getCharacter = id => {
      return axios.get(`${this.BASE_URL}/${id}/`).then(res => {
        let name = res.data.name;
        let occupation = res.data.occupation;
        let cartoon = res.data.cartoon;
        let weapon = res.data.weapon;
        return { id, name, occupation, cartoon, weapon };
      });
    };

    const printCharacter = ({ id, name, occupation, cartoon, weapon }) => {
      let el = $("<div>").addClass("character-info");
      let idEl = $("<div>").text(`Character ID: ${id}`);
      let nameEl = $("<div>").text(`Character Name: ${name}`);
      let occupationEl = $("<div>").text(`Occupation: ${occupation}`);
      let cartoonEl = $("<div>").text(`Is a cartoon? ${cartoon}`);
      let weaponEl = $("<div>").text(`Weapon: ${weapon}`);
      el.append(idEl, nameEl, occupationEl, cartoonEl, weaponEl);
      $(".characters-container").append(el);
    };
    getCharacter(id).then(ch => printCharacter(ch));
  }

  createOneRegister(characterInfo) {
    $(".characters-container").empty();
    const createPOST = characterInfo => {
      return axios
        .post(this.BASE_URL, characterInfo)
        .then(response => {
          $("#send-data-create").addClass("active");
          document.getElementById("new-character-form").reset();
          this.getFullList();
        })
        .catch(error => {
          $("#send-data-create").addClass("error");
          console.log(error);
        });
    };
    createPOST(characterInfo);
  }

  updateOneRegister(updateInfo, charId) {
    $(".characters-container").empty();
    const updatePOST = (updateInfo, charId) => {
      return axios
        .patch(`${this.BASE_URL}/${charId}`, updateInfo)
        .then(res => {
          $("#send-data-update").addClass("active");
          document.getElementById("edit-character-form").reset();
          this.getFullList();
        })
        .catch(e => {
          $("#send-data-update").addClass("red");
          console.log(e);
        });
    };

    updatePOST(updateInfo, charId);
  }

  deleteOneRegister(id) {
    console.log(`Deleting character ${id}`);
    return axios.delete(`${this.BASE_URL}/${id}`).then(() => {
      console.log(`Deleted ${id}`);
      this.getFullList();
    });
  }
}
