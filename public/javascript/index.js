const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');
const $container = document.querySelector(".characters-container");

const $charSearchId = document.querySelector("input[name=character-id]");
const $charDeleteId = document.querySelector("input[name=character-id-delete]");
const $fetchButton = document.querySelector("#fetch-one");
const $deleteButton = document.querySelector("#delete-one");

const $newCharInfoName = document.querySelector("#new-character-form [name=name]");
const $newCharInfoOccupation = document.querySelector("#new-character-form [name=occupation]");
const $newCharInfoWeapon = document.querySelector("#new-character-form [name=weapon]");
const $newCharInfoCartoon = document.querySelector("#new-character-form [name=cartoon]");
const $newButton = document.querySelector("#new-character-form #new-data");


const $charInfoId = document.querySelector("#edit-character-form [name=chr-id]");
const $charInfoName = document.querySelector("#edit-character-form [name=name]");
const $charInfoOccupation = document.querySelector("#edit-character-form [name=occupation]");
const $charInfoWeapon = document.querySelector("#edit-character-form [name=weapon]");
const $charInfoCartoon = document.querySelector("#edit-character-form [name=cartoon]");
const $updateButton = document.querySelector("#edit-character-form #update-data");



window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    
    charactersAPI
      .getFullList()
      .then(characters => {
        $container.innerHTML = "";
        for (let i = 0; i < characters.length; i++) {
          $container.innerHTML += `
          <div class="character-info">
           <div class="name">${characters[i].name}</div>
            <div class="occupation">${characters[i].occupation}</div>
            <div class="cartoon">${characters[i].cartoon}</div>
            <div class="weapon">${characters[i].weapon}</div>
          </div>` ;
        }
      })
      .catch(err => {
        $container.innerHTML = "No character";
      });
    
    
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    
    charactersAPI
      .getOneRegister($charSearchId.value)
      .then(character => {
         $fetchButton.style.color = "blue";
        $container.innerHTML = `
          <div class="character-info">
            <div class="name">${character.name}</div>
            <div class="occupation">${character.occupation}</div>
            <div class="cartoon">${character.cartoon}</div>
            <div class="weapon">${character.weapon}</div>
          </div>`;
      })
      .catch(err => {
        $container.innerHTML = "No character";
      });
    
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
     event.preventDefault();

    charactersAPI
      .deleteOneRegister($charDeleteId.value) 
      .then(()=> {
        $deleteButton.style.color = "blue";
      })
      .catch(err => { console.log(err)
      });

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
     event.preventDefault();
    
    charactersAPI
        .updateOneRegister($charInfoId.value, {
          name: $charInfoName.value,
          occupation: $charInfoOccupation.value,
          weapon: $charInfoWeapon.value,
          cartoon: $charInfoCartoon.checked
        })
      .then(character => {
          $updateButton.style.color = "blue";
          $container.innerHTML = `
            <div class="character-info">
              <div class="name">${character.name}</div>
              <div class="occupation">${character.occupation}</div>
              <div class="cartoon">${character.cartoon ? "Cartoon" : "No cartoon"} </div>
              <div class="weapon">${character.weapon}</div>
            </div>
            `;
        })
        .catch(err => { console.log(err)
        });
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
     event.preventDefault();

     charactersAPI
      .createOneRegister({
        name: $newCharInfoName.value,
        occupation: $newCharInfoOccupation.value,
        weapon: $newCharInfoWeapon.value,
        cartoon: $newCharInfoCartoon.checked
      })
       .then(character => {
        $newButton.style.color = "blue";
        $container.innerHTML = `
        <div class="character-info">
          <div class="name">${character.name}</div>
          <div class="occupation">${character.occupation}</div>
          <div class="cartoon">${character.cartoon ? "Cartoon" : "No cartoon"} </div>
          <div class="weapon">${character.weapon}</div>
        </div>
        `;
      })
      .catch(err => { console.log(err)
      });

  });
});
