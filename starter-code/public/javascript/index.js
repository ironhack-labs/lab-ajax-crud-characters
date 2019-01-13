const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList().then(res => {
      const data = res.data;

      const htmlCharacters = data.map(character => {
        return `
      <div class="character-info">
        <div class="chr-id">${character.id}</div>
        <div class="name">${character.name}</div>
        <div class="occupation">${character.occupation}</div>
        <div class="cartoon">${character.cartoon}</div>
        <div class="weapon">${character.weapon}</div>
      </div>
      `;
      });
      $(".characters-container").html(htmlCharacters);
    });
  };

  document.getElementById("fetch-one").onclick = function() {
    charactersAPI.getOneRegister().then(res => {
      console.log(res.data);
    });
  };

  document.getElementById("delete-one").onclick = function() {
    charactersAPI.deleteOneRegister().then(res => {
      console.log(res.data);
    });
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    charactersAPI.updateOneRegister().then(res => {
      console.log(res.data);
    });
  };

  document.getElementById("new-character-form").onsubmit = function() {
    charactersAPI.createOneRegister().then(res => {
      console.log(res.data);
    });
  };
});
