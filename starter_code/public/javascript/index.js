const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com");

$(document).ready(() => {
  document.getElementById("fetch-all").addEventListener("click", e => {
    charactersAPI.getFullList().then(response => {
      document.getElementsByClassName("characters-container")[0].innerHTML =
        " ";
      response.data.forEach(character => addCharacter(character));
    });
  });

  document.getElementById("fetch-one").addEventListener("click", e => {
    const characterId = document.getElementById("the-character-input").value;
    charactersAPI.getOneRegister(characterId);
  });

  document.getElementById("delete-one").addEventListener("click", e => {
    const deleteCharacter = document.getElementById("delete-character").value;
    charactersAPI.deleteOneRegister(deleteCharacter);
  });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", e => {
      e.preventDefault();
      const form = document.getElementById("edit-character-form");
      const characterInfo = {
        id: form[0].value,
        name: form[1].value,
        occupation: form[2].value,
        weapon: form[3].value,
        debt: form[4].checked
      };
      charactersAPI.updateOneRegister(characterInfo);
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", e => {
      e.preventDefault();
      const form = document.getElementById("new-character-form");
      const characterInfo = {
        name: form[0].value,
        occupation: form[1].value,
        weapon: form[2].value,
        debt: form[3].checked
      };
      charactersAPI.createOneRegister(characterInfo);
    });
});
