const charactersAPI = new APIHandler('http://localhost:8000');
const divCharacterContainer = document.getElementById("characters-container");
const inputSearch = document.getElementById("character-id");
const inputDelete = document.getElementById("character-id-delete");
const inputCreateName = document.getElementById("create-name");
const inputCreateOccupation = document.getElementById("create-occupation");
const inputCreateWeapon = document.getElementById("create-weapon");
const inputCreateIsCartoon = document.getElementById("create-cartoon");
const inputUpdateId = document.getElementById("update-id");
const inputUpdateName = document.getElementById("update-name");
const inputUpdateOccupation = document.getElementById("update-occupation");
const inputUpdateWeapon = document.getElementById("update-weapon");
const inputUpdateIsCartoon = document.getElementById("update-cartoon");
const inputsCreateForm = document.querySelectorAll("#new-character-form input");
const inputsUpdateForm = document.querySelectorAll("#edit-character-form input");

// FUNCTIONS
function resetInputs(input) {
  if(input.type === "checkbox") {
    input.checked = false;
  } else {
    input.value = "";
    input.focus();
  }
}

function displayResult(characters) {
  console.log(characters.data);
  divCharacterContainer.innerHTML = "";
  if(characters.length > 1) {
    characters.forEach(character => {
      divCharacterContainer.innerHTML += `
      <div class="character-info">
        <div class="id">Id: <span>${character.id}</span></div>
        <div class="name">Name: <span>${character.name}</span></div>
        <div class="occupation">Occupation: <span>${character.occupation}</span></div>
        <div class="cartoon">Is a Cartoon? <span>${character.cartoon}</span></div>
        <div class="weapon">Weapon: <span>${character.weapon}</span></div>
      </div>
      `;
    })
  } else {
    divCharacterContainer.innerHTML += `
      <div class="character-info">
        <div class="id">Id: <span>${characters.id}</span></div>
        <div class="name">Name: <span>${characters.name}</span></div>
        <div class="occupation">Occupation: <span>${characters.occupation}</span></div>
        <div class="cartoon">Is a Cartoon? <span>${characters.cartoon}</span></div>
        <div class="weapon">Weapon: <span>${characters.weapon}</span></div>
      </div>
      `;
  }
}

// EVENT LISTENERS
window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then(apiRes => {
      displayResult(apiRes.data);
      console.log(apiRes.data);
    })
    .catch(err => {
      console.log(err);
    })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI.getOneRegister(inputSearch.value)
    .then(apiRes => {
      console.log(apiRes);
      displayResult(apiRes.data);
      resetInputs(inputSearch);
    })
    .catch(err => console.log(err));
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister(inputDelete.value)
    .then(apiRes => {
      console.log(apiRes);
      resetInputs(inputDelete);
      displayResult(apiRes);
    })
    .catch(err => console.log(err));
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    charactersAPI.updateOneRegister(inputUpdateId.value, {
      name: inputUpdateName.value,
      occupation: inputUpdateOccupation.value,
      weapon: inputUpdateWeapon.value,
      cartoon: inputUpdateIsCartoon.checked
    }, {new: true})
    .then(apiRes => {
      console.log(apiRes);
      displayResult(apiRes);
      inputsUpdateForm.forEach(input => {
        resetInputs(input);
      })
    })
    .catch(err => console.log(err));
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    charactersAPI.createOneRegister({
      name: inputCreateName.value,
      occupation: inputCreateOccupation.value,
      weapon: inputCreateWeapon.value,
      cartoon: inputCreateIsCartoon.checked
    }, {new: true})
    .then(apiRes => {
      console.log(apiRes);
      inputsCreateForm.forEach(input => {
        resetInputs(input);
      });
      charactersAPI.getFullList()
      .then(apiRes => displayResult(apiRes.data))
      .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
  });
});
