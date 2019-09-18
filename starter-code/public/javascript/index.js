const charactersAPI = new APIHandler(
  "https://ih-crud-api.herokuapp.com/characters"
);
const charactersContainer = document.querySelector(".characters-container");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all").addEventListener("click", function(event) {
      printCharacters();
    });

  document
    .getElementById("fetch-one").addEventListener("click", function(event) {
      charactersAPI.getOneRegister(document.querySelector('[name="character-id"]').value)
      .then(character => {
        
        charactersContainer.innerHTML = printOneCharacter(character.data);
      })
    });

  document
    .getElementById("delete-one").addEventListener("click", function(event) {
      charactersAPI.deleteOneRegister(document.querySelector('[name="character-id-delete"]').value)
      .then(deletedCharacter => {
        document.getElementById("delete-one").classList = "success"
        console.log("Deleted character");
      })
      .catch(error => { document.getElementById("delete-one").classList = "error"})
    });

  document
    .getElementById("edit-character-form").addEventListener("submit", function(event) {
      event.preventDefault();
      
      charactersAPI.updateOneRegister(document.querySelector('[name="chr-id"]').value, {
        name: document.querySelector('#updateName').value,
        occupation: document.querySelector('#updateOccupation').value,
        weapon: document.querySelector('#updateWeapon').value,
        debt: document.querySelector('#updateCartoon').checked
      }).then(updatedCharacter => {
        document.getElementById("send-data-update").classList = "success"
        console.log("updated character")
      })
      .catch(error => { document.getElementById("send-data-update").classList = "error"})
    });

  document
    .getElementById("new-character-form").addEventListener("submit", function(event) {
      event.preventDefault();

      charactersAPI.createOneRegister({
        name: document.querySelector('#newName').value,
        occupation: document.querySelector('#newOccupation').value,
        weapon: document.querySelector('#newWeapon').value,
        debt: document.querySelector('#newCartoon').checked
      }).then(createdCharacter => {
        document.getElementById("send-data").classList = "success"
        console.log("character created")
      })
      .catch( error => {document.getElementById("send-data").classList = "error"})
    });
});

const printCharacters = () => {
  charactersAPI.getFullList().then(characters => {
    charactersContainer.innerHTML = "";
    characters.data.forEach(character => {
      charactersContainer.innerHTML += printOneCharacter(character)
    });
  });
};

const printOneCharacter = (character) => {
  return `<div class="character-info">
  <div class="name">Name: <span>${character.name}</span></div>
  <div class="occupation">Occupation: <span>${character.occupation}</span></div>
  <div class="cartoon">Cartoon: <span>${character.debt}</span></div>
  <div class="weapon">Weapon: <span>${character.weapon}</span></div>
</div>`
}