import APIHandler from "./APIHandler.js";
const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  const charactersContainer = document.querySelector(".characters-container");
  const fetchAllBtn = document.getElementById("fetch-all");
  const fetchOneBtn = document.getElementById("fetch-one");

  document.getElementById("fetch-all").addEventListener("click", async function(event) {
    try {
      const allCharacters = await charactersAPI.getCharacters();
      clearCharacters();
      allCharacters.data.forEach(character => displayCharacter(character));
    } catch (error) {
      console.log(error);
    }
  });

  document.getElementById("fetch-one").addEventListener("click", async function(event) {
    try {
      const id = event.target.closest(".operation").querySelector("input").value;
      const character = await charactersAPI.getCharacter(id);
      // console.log(character.data);
      clearCharacters();
      displayCharacter(character.data);
      prefillUpdateCharacter(character.data);
    } catch (error) {
      console.log(error);
    }
  });

  document.getElementById("delete-one").addEventListener("click", async function(event) {
    try {
      const id = event.target.closest(".operation").querySelector("input").value;
      const character = await charactersAPI.deleteCharacter(id);
      event.target.style.backgroundColor = "green";
      event.target.value = "";
      fetchAllBtn.click();
    } catch (error) {
      event.target.style.backgroundColor = "red";
      console.log(error);
    }
  });

  document.getElementById("edit-character-form").addEventListener("submit", async function(event) {
    event.preventDefault();
    const form = event.target;
    const btn = form.querySelector("button");
    const isCartoon = form.cartoon.checked ? true : false;
    try {
      const updatedCharacter = await charactersAPI.editCharacter(form["chr-id"].value, {
        name: form.name.value,
        occupation: form.occupation.value,
        weapon: form.weapon.value,
        cartoon: isCartoon
      });
      btn.className = "success";
      clearCharacters();
      displayCharacter(updatedCharacter.data);
    } catch (error) {
      console.log(error);
      btn.className = "error";
    }
  });

  document.getElementById("new-character-form").addEventListener("submit", async function(event) {
    event.preventDefault();
    const form = event.target;
    const btn = form.querySelector("button");
    const name = form.name.value;
    const occupation = form.occupation.value;
    const weapon = form.weapon.value;
    const cartoon = form.cartoon.checked ? true : false;
    if (!name || !occupation || !weapon) {
      btn.className = "error";
      throw new Error("A required field is missing.");
    }
    try {
      const newCharacter = await charactersAPI.createCharacter({
        name,
        occupation,
        weapon,
        cartoon
      });
      btn.className = "success";
      clearCharacters();
      displayCharacter(newCharacter.data);
    } catch (error) {
      console.log(error);
    }
  });

  function displayCharacter(data) {
    const tplHTML = `
    <div class="character-info">
    <div class="name">ID: <span>${data.id}</span></div>
    <div class="name">Name: <span>${data.name}</span></div>
    <div class="occupation">Occupation: <span>${data.occupation}</span></div>
    <div class="cartoon">Is a Cartoon?: <span>${data.cartoon}</span></div>
    <div class="weapon">Weapon: <span>${data.weapon}</span></div>
    </div>
  `;
    const characterTpl = document.createElement("template");
    characterTpl.innerHTML = tplHTML;
    const characterEl = characterTpl.content.cloneNode(true);
    charactersContainer.appendChild(characterEl);
  }

  function prefillUpdateCharacter(data) {
    const { id, name, occupation, weapon, cartoon } = data;
    const updateForm = document.getElementById("edit-character-form");
    updateForm["chr-id"].value = id;
    updateForm.name.value = name;
    updateForm.occupation.value = occupation;
    updateForm.weapon.value = weapon;
    updateForm.cartoon.checked = cartoon;
  }

  function clearCharacters() {
    charactersContainer.innerHTML = "";
  }
});
