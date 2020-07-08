const charactersAPI = new APIHandler("http://localhost:8000/characters");
const charContainer = document.querySelector(".characters-container");
const newCharForm = document.getElementById("new-character-form");
const editCharForm = document.getElementById("edit-character-form");
let displayAll = false;
let displayOne = false;

function displayOneCharacter(char) {
  charContainer.innerHTML += `
  <div class="character-info" data-char-id="${char.id}">
    <div class="id">Id: <span>${char.id}</span></div>
    <div class="name">Name: <span>${char.name}</span></div>
    <div class="occupation">Occupation: <span>${char.occupation}</span></div>
    <div class="cartoon">Is a Cartoon?: <span>${char.cartoon}</span></div>
    <div class="weapon">Weapon: <span>${char.weapon}</span></div>
  </div>`;
}

function removeOneCharacter(charId) {
  const charInfoToRemove = charContainer.querySelector(
    `[data-char-id="${charId}"]`
  );
  if (charInfoToRemove) charInfoToRemove.remove();
}

function updateCharInfo(char){
  const charInfoToUpdate = charContainer.querySelector(
    `[data-char-id="${char.id}"]`
  );
  charInfoToUpdate.innerHTML = `
    <div class="id">Id: <span>${char.id}</span></div>
    <div class="name">Name: <span>${char.name}</span></div>
    <div class="occupation">Occupation: <span>${char.occupation}</span></div>
    <div class="cartoon">Is a Cartoon?: <span>${char.cartoon}</span></div>
    <div class="weapon">Weapon: <span>${char.weapon}</span></div>`
}

function resetCharacterDisplay() {
  charContainer.innerHTML = "";
}

async function fetchAllCharacter() {
  try {
    const charArr = (await charactersAPI.getFullList()).data;
    resetCharacterDisplay();
    charArr.forEach((char) => displayOneCharacter(char));
    displayAll = true;
    displayOne = false;
  } catch (err) {
    console.error(err);
  }
}

async function fetchOneCharacter(evt) {
  const charId = document.getElementById("fetch-one-id");
  if (charId !== "") {
    try {
      const char = (await charactersAPI.getOneRegister(charId.value)).data;
      resetCharacterDisplay();
      charId.value = "";
      displayAll = false;
      displayOne = true;
      displayOneCharacter(char);
    } catch (err) {
      colorizeBtn("fetch-one", "not-completed");
      console.log(err);
    }
  }
}

function colorizeBtn(btnId, cssClass) {
  const deleteBtn = document.getElementById(btnId);
  deleteBtn.classList.add(cssClass);
  setTimeout(() => {
    deleteBtn.classList.remove(cssClass);
  }, 2000);
}

async function deleteOneCharacter() {
  const deleteIdInput = document.getElementById("delete-one-id");
  const charId = deleteIdInput.value;
  if (charId !== "") {
    try {
      await charactersAPI.deleteOneRegister(charId);
      colorizeBtn("delete-one", "completed");
      deleteIdInput.value = "";
      if (displayAll) removeOneCharacter(charId);
    } catch (err) {
      colorizeBtn("delete-one", "not-completed");
      deleteIdInput.value = "";
      console.log(err);
    }
  }
}

function retrieveInputs(formId, nbOfInputs, cartoonId) {
  const inputs = document.querySelectorAll(
    `#${formId} div:nth-child(-n+${nbOfInputs}) input`
  );
  const newChar = {};
  inputs.forEach((input) => {
    newChar[input.name] = input.value;
  });
  document.getElementById(`${cartoonId}`).checked
    ? (newChar.cartoon = true)
    : (newChar.cartoon = false);
  return newChar;
}

async function createCharacter(evt) {
  evt.preventDefault();
  const newChar = retrieveInputs("new-character-form", 3, "cartoon-create");
  try {
    await charactersAPI.createOneRegister(newChar);
    colorizeBtn("send-create", "completed");
    newCharForm.reset();
    if (displayOne) {
      resetCharacterDisplay();
    }
  } catch (error) {
    colorizeBtn("send-create", "not-completed");
    console.log(error);
  }
}

async function editCharacter(evt) {
  evt.preventDefault();
  const updatedChar = retrieveInputs("edit-character-form", 4, "cartoon-edit");
  try {
    await charactersAPI.updateOneRegister(updatedChar.id, updatedChar);
    colorizeBtn("send-update", "completed");
    editCharForm.reset();
    updateCharInfo(updatedChar);
  } catch (error) {
    colorizeBtn("send-update", "not-completed");
    console.log(error);
  }
}

document.getElementById("fetch-all").onclick = fetchAllCharacter;

document.getElementById("fetch-one").onclick = fetchOneCharacter;

document.getElementById("delete-one").onclick = deleteOneCharacter;

newCharForm.onsubmit = createCharacter;

editCharForm.onsubmit = editCharacter;
