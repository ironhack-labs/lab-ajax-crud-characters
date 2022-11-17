const charactersAPI = new APIHandler();
let createCard;
const charactersContainer = document.querySelector(".characters-container");

// When fetch all or fetch one called, the cards won't be piling up by using the following function.
function deleteChild() {
  charactersContainer.innerHTML = "";
}

window.addEventListener('load', () => {
  createCard = (character) => {
    //const charactersContainer = document.querySelector(".characters-container");
    const characterCard = document.createElement("div");

    charactersContainer.appendChild(characterCard);
    characterCard.classList.add("character-info")
    characterCard.innerHTML = 
     `<div class="name">Name: ${character.name}</div> <br>
      <div class="occupation">Occupation: ${character.occupation}</div> <br>
      <div class="cartoon">Is a Cartoon?: ${character.cartoon ? "Yes" : "No"}</div> <br>
      <div class="weapon">Character Weapon: ${character.weapon}</div>`;
  }
})

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault()
    deleteChild();
    charactersAPI
      .getFullList()
      .then(response => (response.data).forEach((character) => createCard(character)))
      .catch(err => console.log(err))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault();
    deleteChild();
    let characterId = document.querySelector('#fetch-input').value;
    charactersAPI.getOneRegister(characterId)
      .then(response => createCard(response.data))
      .catch(err => console.log("Given ID doesn't exit", err))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();
    let characterId = document.querySelector('#delete-input').value;
    let deleteButton = document.querySelector('#delete-one')
    charactersAPI.deleteOneRegister(characterId)
      .then(response => console.log("Deleted data: ", console.log(response.data)))
      .then(deleteButton.style.backgroundColor = "green")
      .catch(err => console.log("No data found to delete.", console.log(err)))
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let characterId = document.querySelector('#edit-id').value
    let name = document.querySelector('#edit-name').value
    let occupation = document.querySelector('#edit-occupation').value
    let weapon = document.querySelector('#edit-weapon').value
    let cartoon = document.querySelector("#edit-cartoon").checked;

    charactersAPI.updateOneRegister(characterId, { name: name, occupation: occupation, weapon: weapon, cartoon: cartoon })
      .then(response => console.log("Updated character: ", console.log(response.data)))
      .catch(err => console.log("Error while editing the character.", console.log(err)))
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let name = document.querySelector('#new-name').value
    let occupation = document.querySelector('#new-occupation').value
    let weapon = document.querySelector('#new-weapon').value
    let cartoon = document.querySelector('#new-cartoon').checked

    charactersAPI.createOneRegister({ name: name, occupation: occupation, weapon: weapon, cartoon: cartoon })
      .then(response => console.log("Updated character: ", console.log(response.data)))
      .catch(err => console.log("Error while adding the character.", console.log(err)))
  });
});
