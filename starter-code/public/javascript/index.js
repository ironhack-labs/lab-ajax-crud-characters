const charactersAPI = new APIHandler("http://localhost:8000");
const container = document.getElementsByClassName("characters-container")[0];

$(document).ready(() => {
  document.getElementById("fetch-all")
  .onclick = async function() {
    const all = await charactersAPI.getFullList();
    const charactersData = all.data;
    container.innerHTML = "";
    charactersData.forEach(element => {
      const card = document.createElement("div");
      card.setAttribute("class", "character-info");
      card.innerHTML = `<div class="name">ID: ${element.id}</div>
          <div class="name">Name: ${element.name}</div>
          <div class="occupation">Occupation: ${element.occupation}</div>
          <div class="cartoon">Cartoon: ${element.cartoon}</div>
          <div class="weapon">Weapon: ${element.weapon}</div>
      `;
      container.appendChild(card);
    });
  };

  document.getElementById("fetch-one").
  onclick = async function() {
    const id = document.getElementsByName("character-id")[0].value;
    const oneCharacter = await charactersAPI.getOneRegister(id);
    const data = oneCharacter.data;
    const card = document.createElement("div");
    card.setAttribute("class", "character-info");
    card.innerHTML = `<div class="name">ID: ${data.id}</div>
        <div class="name">Name: ${data.name}</div>
        <div class="occupation">Occupation: ${data.occupation}</div>
        <div class="cartoon">Cartoon: ${data.cartoon}</div>
        <div class="weapon">Weapon: ${data.weapon}</div>
    `;
    container.innerHTML = "";
    container.appendChild(card);
    document.getElementsByName("character-id")[0].value = "";
  };

  document.getElementById("delete-one")
  .onclick = function() {
    const id = document.getElementsByName("character-id-delete")[0].value;
    const deletedCharacter = charactersAPI.deleteOneRegister(id);
    document.getElementsByName("character-id-delete")[0].value = "";
  };

  document.getElementById("edit-character-form")
  .onsubmit = async function(event) {
    event.preventDefault();
    const form = event.target;
    const elements = [...form.elements];
    let id;
    const characterInfo = {};
    elements.forEach(element => {
      const { name, value } = element;
      if (name === "chr-id") {
        id = value;
      }
      characterInfo[name] = value;
    });
    await charactersAPI.updateOneRegister(id, characterInfo);
    document.getElementById("edit-character-form").reset();
  };

  document.getElementById("new-character-form")
  .onsubmit = async function(event) {
    event.preventDefault();
    const form = event.target;
    const elements = [...form.elements];
    const characterInfo = {};
    elements.forEach(element => {
      const { name, value } = element;
      characterInfo[name] = value;
    });
    const newCharacter = await charactersAPI.createOneRegister(characterInfo);
    form.reset();
  };
});