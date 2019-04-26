class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  /* characterInfo = {
    id: 1,
    name: "Han Solo",
    occupation: "Smuggler",
    weapon: "Blaster Pistol",
    cartoon: true
  }; */

  getFullList() {
    axios.get(`${this.BASE_URL}/characters`)
      .then((response) => {
        document.getElementById('characters-container').innerHTML = '';
        response.data.forEach((e) => {
          const newCharacterHtml = `
          <div class="character-info">
            <div class="name">Character Name: ${e.name}</div>
            <div class="occupation">Character Occupation: ${e.occupation}</div>
            <div class="cartoon">Is a Cartoon? ${e.weapon}</div>
            <div class="weapon">Character Weapon: ${e.cartoon}</div>
          </div>`;
          document.getElementById('characters-container').innerHTML += newCharacterHtml;
        });
      })
      .catch((error) => {
        console.log('Oh No! Error is: ', error);
      });
  }

  getOneRegister(id) {
    axios.get(`${this.BASE_URL}/characters/${id}`)
      .then((response) => {
        console.log(response);
        document.getElementById('characters-container').innerHTML = '';
        const newCharacterHtml = `
            <div class="character-info">
              <div class="name">Character Name: ${response.data.name}</div>
              <div class="occupation">Character Occupation: ${response.data.occupation}</div>
              <div class="cartoon">Is a Cartoon? ${response.data.weapon}</div>
              <div class="weapon">Character Weapon: ${response.data.cartoon}</div>
            </div>`;
        document.getElementById('characters-container').innerHTML += newCharacterHtml;
      })
      .catch((error) => {
        console.log('Oh No! Error is: ', error);
      });
  }

  // name, occupation, weapon, field
  createOneRegister(name, occupation, weapon, cartoon) {
    axios.post(`${this.BASE_URL}/characters`, {
      name, occupation, weapon, cartoon,
    })
      .then((response) => {
        console.log(response);
        this.getFullList();
      })
      .catch((error) => {
        console.log('Oh No! Error is: ', error);
      });
  }

  updateOneRegister(idEdit, nameEdit, occupationEdit, weaponEdit, cartoonEdit) {

    axios.put(`${this.BASE_URL}/characters/${idEdit}`, {
      nameEdit, occupationEdit, weaponEdit, cartoonEdit,
    })
      .then((response) => {
        this.getFullList();
      })
      .catch((error) => {
        console.log('Oh No! Error is: ', error);
      });
  }


  deleteOneRegister(del) {
    axios.delete(`${this.BASE_URL}/characters/${del}`)
      .then((response) => {
        console.log(response);
        console.log("deu certo!!!!!!");
      })
      .catch((error) => {
        console.log('Oh No! Error is: ', error);
      });
  }
}

