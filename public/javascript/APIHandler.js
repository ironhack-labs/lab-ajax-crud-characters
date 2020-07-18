class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(this.BASE_URL + "/characters")
      .then((response) => {
        const container = document.getElementById("characters-container");
        container.innerHTML = ''
        response.data.forEach((element) => {
          container.innerHTML += 
          `<div class="character-info">
        <div class="name">Character Name: ${element.id}</div>  
        <div class="name">Character Name: ${element.name}</div>
        <div class="occupation">Character Occupation: ${element.occupation}</div>
        <div class="cartoon">Is a Cartoon?: ${element.cartoon}</div>
        <div class="weapon">Character Weapon: ${element.weapon}</div>
        </div> `
        });
        console.log(response.data);
      })
      .catch((erro) => console.log(erro));
  }

  getOneRegister(charactersId) {
    axios
      .get(this.BASE_URL + `/characters/${charactersId}`)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((erro) => console.log(erro));
  }

  createOneRegister(characters) {
    axios
      .post(this.BASE_URL + `/characters`, characters)
      .then((response) => {
        const { id, name, occupation, weapon, cartoon } = response.data;
        console.log(response.data);
        characters.id = id;
        characters.name = name;
        characters.occupation = occupation;
        characters.weapon = weapon;
        characters.cartoon = cartoon;
      })
      .catch((erro) => console.log(erro));
  }

  updateOneRegister(characters) {
    axios
      .patch(this.BASE_URL + `/characters/${characters.id}`, characters)
      .then((response) => {
        const { id, name, occupation, weapon, cartoon } = response.data;
        console.log(response.data);
        characters.id = id;
        characters.name = name;
        characters.occupation = occupation;
        characters.weapon = weapon;
        characters.cartoon = cartoon;
      })
      .catch((erro) => console.log(erro));
  }

  deleteOneRegister(charactersId) {
    axios
      .delete(this.BASE_URL + `/characters/${charactersId}`)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((erro) => console.log(erro));
  }
}
