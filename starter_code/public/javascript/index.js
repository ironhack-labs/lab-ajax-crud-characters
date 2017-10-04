const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com");

function appendCharacter(character) {
  const newCharacterHtml = `<div class="character-info">
      <div class="name">Name: ${character.name}</div>
      <div class="occupation">Occupation: ${character.occupation}</div>
      <div class="weapon">Weapon: ${character.weapon}</div>
      </div>
`;
  $(".characters-container").append(newCharacterHtml);
}

$(document).ready(() => {
  $("#fetch-all").on("click", e => {
    charactersAPI.getFullList().then(function(characters) {
      characters.forEach(obj => {
        appendCharacter(obj);
      });
    });
  });

  $("#fetch-one").on("click", e => {});

  $("#delete-one").on("click", e => {});

  $("#edit-character-form").on("submit", e => {});

  $("#new-character-form").on("submit", e => {});
});
