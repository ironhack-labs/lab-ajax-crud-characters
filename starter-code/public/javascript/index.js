const charactersAPI = new APIHandler("http://localhost:8000");
const $container = document.querySelector(".characters-container");

//DOM find by id
const $inputSearchId = document.querySelector("input[name=character-id]");

// DOM delete
const $inputDeleteId = document.querySelector("input[name=character-id-delete]");
const $deleteButton =  document.querySelector("#delete-one");

//DOM new character form
const $newInputName = document.querySelector("#new-character-form [name=name]");
const $newInputOccupation = document.querySelector("#new-character-form [name=occupation]");
const $newInputWeapon = document.querySelector("#new-character-form [name=weapon]");
const $newInputCartoon = document.querySelector("#new-character-form [name=cartoon]");
const $newButton = document.querySelector("#new-character-form #new-data");

//DOM edit character form
const $inputId = document.querySelector("#edit-character-form [name=chr-id]");
const $inputName = document.querySelector("#edit-character-form [name=name]");
const $inputOccupation = document.querySelector("#edit-character-form [name=occupation]");
const $inputWeapon = document.querySelector("#edit-character-form [name=weapon]");
const $inputCartoon = document.querySelector("#edit-character-form [name=cartoon]");
const $updateButton = document.querySelector("#edit-character-form #update-data");


window.addEventListener('load', () => {
  
  // cRud --- READ in CRUD operations
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList().then(characters => {
      $container.innerHTML = ""; // Remove all the content of the container
      for (let i = 0; i < characters.length; i++) {
        $container.innerHTML += `
        <div class="character-info">
          <div class="name">${characters[i].name}</div>
          <div class="occupation">${characters[i].occupation}</div>
          <div class="cartoon">${
            characters[i].cartoon ? "Cartoon" : "Not a cartoon"
          }</div>
          <div class="weapon">${characters[i].weapon}</div>
        </div>
        `;
      }
    });
  });

  // cRud --- READ in CRUD operations
  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let id = $inputSearchId.value;
    charactersAPI
      .getOne(id)
      .then(character => {
        $container.innerHTML = `
          <div class="character-info">
            <div class="name">${character.name}</div>
            <div class="occupation">${character.occupation}</div>
            <div class="cartoon">${
              character.cartoon ? "Cartoon" : "Not a cartoon"
            }</div>
            <div class="weapon">${character.weapon}</div>
          </div>
          `;
      })
      .catch(err => {
        $container.innerHTML = "No character";
      });
  });

  // cruD --- DELETE in CRUD operations
  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();
    charactersAPI
      .deleteOne($inputDeleteId.value) 
      .then(()=> {
        $deleteButton.style.borderColor = "green";
        $deleteButton.style.color = "green";
      })
      .catch(err => {
        $deleteButton.style.borderColor = "red";
        $deleteButton.style.color = "red";
      });
  });

  // crUd --- UPDATE in CRUD operations
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
      event.preventDefault();
      charactersAPI
        .updateOne($inputId.value, {
          name: $inputName.value,
          occupation: $inputOccupation.value,
          weapon: $inputWeapon.value,
          cartoon: $inputCartoon.checked // return true or false
        })
        .then(character => {
          $updateButton.style.borderColor = "green";
          $updateButton.style.color = "green";
          $container.innerHTML = `
            <div class="character-info">
              <div class="name">${character.name}</div>
              <div class="occupation">${character.occupation}</div>
              <div class="cartoon">${
                character.cartoon ? "Cartoon" : "Not a cartoon"
              }</div>
              <div class="weapon">${character.weapon}</div>
            </div>
            `;
        })
        .catch(err => {
          $updateButton.style.borderColor = "red";
          $updateButton.style.color = "red";
        });
  });

  // Crud --- CREATE in CRUD operations
  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    charactersAPI
      .createOne({
        name: $newInputName.value,
        occupation: $newInputOccupation.value,
        weapon: $newInputWeapon.value,
        cartoon: $newInputCartoon.checked // return true or false
      })
      .then(character => {
        $newButton.style.borderColor = "green";
        $newButton.style.color = "green";
        $container.innerHTML = `
        <div class="character-info">
          <div class="name">${character.name}</div>
          <div class="occupation">${character.occupation}</div>
          <div class="cartoon">${
            character.cartoon ? "Cartoon" : "Not a cartoon"
          }</div>
          <div class="weapon">${character.weapon}</div>
        </div>
        `;
      })
      .catch(err => {
        $newButton.style.borderColor = "red";
        $newButton.style.color = "red";
      });
  });
});
