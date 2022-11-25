const charactersAPI = new APIHandler('http://localhost:8000');

// Top Section Inputs
const charContainer = document.querySelector(".characters-container");
const searchField = document.querySelector("[name='character-id']");
const deleteField = document.querySelector("[name='character-id-delete']");

// New Character Form Inputs
const newName = document.querySelector("#new-character-form input[name='name']");
const newOccupation = document.querySelector("#new-character-form input[name='occupation']");
const newWeapon = document.querySelector("#new-character-form input[name='weapon']");
const newCartoon = document.querySelector("#new-character-form input[name='cartoon']");

// Edit Character Form Inputs
const editID = document.querySelector("#edit-character-form input[name='chr-id']");
const editName = document.querySelector("#edit-character-form input[name='name']");
const editOccupation = document.querySelector("#edit-character-form input[name='occupation']");
const editWeapon = document.querySelector("#edit-character-form input[name='weapon']");
const editCartoon = document.querySelector("#edit-character-form input[name='cartoon']");

// Delete Button
const deleteButton = document.querySelector("#delete-one");

function fillInfo(character) {
    return `<div class="character-info">
    <div class="id">ID:<span>${character.id}</span></div>
    <div class="name">Character Name<span>${character.name}</span></div>
    <div class="occupation">Character Occupation<span>${character.occupation}</span></div>
    <div class="cartoon">Is a Cartoon? <span>${character.cartoon}</span></div>
    <div class="weapon">Character Weapon <span>${character.weapon}</span></div>
  </div>`;
}

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    try {
      const { data } = await charactersAPI.getFullList();
      let dataHTML = ""

      data.forEach(character => {
        dataHTML += fillInfo(character)
      });

      charContainer.innerHTML = dataHTML;
    }
    catch (err) {
      console.log(err);
    }
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    try {
      const id = searchField.value;
      const { data } = await charactersAPI.getOneRegister(id);
      charContainer.innerHTML = fillInfo(data);
    }
    catch (err) {
      console.log(err);
    }
  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {
    event.preventDefault()
    try {
      const id = deleteField.value;
      const deleteChar = await charactersAPI.deleteOneRegister(id);
      console.log(deleteChar)
      deleteButton.style.backgroundColor = "green";
    }
    catch (err) {
      console.log(err);
      deleteButton.style.backgroundColor = "red";
    }
  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    event.preventDefault()
    try {
      const id = editID.value;
      const name = editName.value;
      const occupation = editOccupation.value;
      const weapon = editWeapon.value;
      const cartoon = editCartoon.checked;

      const editChar = await charactersAPI.updateOneRegister(id, {
        "name": name,
        "occupation": occupation,
        "weapon": weapon,
        "cartoon": cartoon
      });
    }
    catch (err) {
      console.log(err)
    }
  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    event.preventDefault()
    try {
      const name = newName.value;
      const occupation = newOccupation.value;
      const weapon = newWeapon.value;
      const cartoon = newCartoon.checked;

      const newChar = await charactersAPI.createOneRegister({
        "name": name,
        "occupation": occupation,
        "weapon": weapon,
        "cartoon": cartoon
      });
    }
    catch (err) {
      console.log(err)
    }
  });
});
