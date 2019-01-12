const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList().then(response => {
      const data = response.data; // data from Axios
      const htmlCharacters = response.data.map(character => {
        return `
        <div class="character-info">
        <div class="name">${character.name}</div>
        <div class="occupation">${character.occupation}</div>
        <div class="cartoon">${character.cartoon}</div>
        <div class="weapon">${character.cartoon}</div>
      </div>
        `;
      });
      $(".characters-container").html(htmlCharacters);
    });
  };

  document.getElementById("fetch-one").onclick = function() {
    const characterId = document.getElementById("character-id").value;
    console.log(characterId);
    charactersAPI.getOneRegister(characterId).then(response => {
      const character = response.data
      const htmlCharacter = `
        <div class="character-info">
        <div class="name">${character.name}</div>
        <div class="occupation">${character.occupation}</div>
        <div class="cartoon">${character.cartoon}</div>
        <div class="weapon">${character.cartoon}</div>
      </div>
        `;
      $(".characters-container").html(htmlCharacter);
    });
  };


  document.getElementById("delete-one").onclick = function() {
    const deleteId = document.getElementById("delete-id").value;
    console.log(deleteId);
    charactersAPI.deleteOneRegister(deleteId);
    document.getElementById("delete-message").innerHTML = "ID DELETED: " + deleteId;

  };

  document.getElementById("edit-character-form").onsubmit = function() {};

  document.getElementById("new-character-form").onsubmit = function() {};
});
