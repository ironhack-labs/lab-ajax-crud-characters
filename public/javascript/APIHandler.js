const baseUrl = "http://localhost:3000";
window.onload = () => {};
class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList() {
    const characters = await axios.get("http://localhost:8000/characters/");
    const $charContainer = document.querySelector(".characters-container");
    $charContainer.innerHTML = "";
    characters.data.forEach((character) => {
      $charContainer.innerHTML += `
      <div class="character-info">
        <div class="name">Character Name<span>${character.name}</span></div>
        <div class="occupation">Character Occupation<span>${character.occupation}</span></div>
        <div class="cartoon">Is a Cartoon?<span>${character.cartoon}</span></div>
        <div class="weapon">Character Weapon<span>${character.weapon}</span></div>
        <div class="weapon">Character ID<span>${character.id}</span></div>
      </div>`;
    });
  }

  async getOneRegister() {
    const input = document.querySelector("#fetch-one");

    let idCorr = input.value;
    let character = await axios.get(
      `http://localhost:8000/characters/?id=${idCorr}`
    );
    let $charContainer = document.querySelector(".characters-container");
    $charContainer.innerHTML = `
    <div class="character-info">
      <div class="name">Character Name<span>${character.data[0].name}</span></div>
      <div class="occupation">Character Occupation<span>${character.data[0].occupation}</span></div>
      <div class="cartoon">Is a Cartoon?<span>${character.data[0].cartoon}</span></div>
      <div class="weapon">Character Weapon<span>${character.data[0].weapon}</span></div>
    </div>`;
  }

  async createOneRegister() {
    try {
      let name = document.querySelector("#new-character-form .name");
      let occupation = document.querySelector(
        "#new-character-form .occupation"
      );
      let weapon = document.querySelector("#new-character-form .weapon");
      let cartoon = document.querySelector("#new-character-form .cartoon");
      await axios.post("http://localhost:8000/characters/", {
        name: name.value,
        occupation: occupation.value,
        weapon: weapon.value,
        cartoon: cartoon.checked,
      });
      name.value = "";
      occupation.value = "";
      weapon.value = "";
      cartoon.checked = false;
      this.getFullList();
      createRegBtn.style.backgroundColor = "green";
    } catch (error) {
      createRegBtn.style.backgroundColor = "red";
    }
  }

  async updateOneRegister() {
    try {
      let name = document.querySelector("#edit-character-form .name");
      let occupation = document.querySelector(
        "#edit-character-form .occupation"
      );
      let weapon = document.querySelector("#edit-character-form .weapon");
      let cartoon = document.querySelector("#edit-character-form .cartoon");
      let id = document.querySelector("#edit-character-form .id");
      console.log(name, occupation, weapon, cartoon, id);
      await axios.put(`http://localhost:8000/characters/${id.value}`, {
        name: name.value,
        occupation: occupation.value,
        weapon: weapon.value,
        cartoon: cartoon.checked,
      });
      name.value = "";
      occupation.value = "";
      weapon.value = "";
      cartoon.checked = false;
      this.getFullList();
      createUpBtn.style.backgroundColor = "green";
    } catch (error) {
      createUpBtn.style.backgroundColor = "red";
    }
  }

  async deleteOneRegister() {
    try {
      let id = document.querySelector("#deleteMe");
      await axios.delete(`http://localhost:8000/characters/${id.value}`);
      id.value = "";
      this.getFullList();
      delBtn.style.backgroundColor = "green";
    } catch (error) {
      delBtn.style.backgroundColor = "red";
    }
  }
}

//class creation
const apiClass = new APIHandler(baseUrl);

//event listeners
const fetchAllBtn = document.querySelector("#fetch-all");
fetchAllBtn.onclick = () => {
  apiClass.getFullList();
};
const fetchOneBtn = document.querySelector("#fetch-one-btn");
fetchOneBtn.onclick = (event) => {
  event.preventDefault();
  apiClass.getOneRegister();
};
const createRegBtn = document.querySelector("#new-character-form .send-data");
createRegBtn.onclick = (event) => {
  event.preventDefault();
  apiClass.createOneRegister();
};
const createUpBtn = document.querySelector("#edit-character-form #send-data");
createUpBtn.onclick = (event) => {
  event.preventDefault();
  apiClass.updateOneRegister();
};
const delBtn = document.querySelector("#delete-one");
delBtn.onclick = (event) => {
  event.preventDefault();
  apiClass.deleteOneRegister();
};
