const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com");

$(document).ready(() => {
  document.getElementById("fetch-all").addEventListener("click", e => {
    charactersAPI.getFullList();
  });

  document.getElementById("fetch-one").addEventListener("click", e => {
    const id = document.getElementById("character-id").value;
    charactersAPI.getOneRegister(id);
  });

  document.getElementById("delete-one").addEventListener("click", e => {
    const id = document.getElementById("character-id-delete").value;
    charactersAPI.deleteOneRegister(id);
  });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", e => {
      e.preventDefault();
      const editForm = document.getElementById("edit-character-form");

      const editCharacter = {
        id: editForm[0].value,
        name: editForm[1].value,
        occupation: editForm[2].value,
        weapon: editForm[3].value,
        debt: editForm[4].checked
      };

      charactersAPI.updateOneRegister(editCharacter);
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", e => {
      e.preventDefault();
      const newForm = document.getElementById("new-character-form");

      const newCharacter = {
        name: newForm[0].value,
        occupation: newForm[1].value,
        weapon: newForm[2].value,
        debt: newForm[3].checked
      };
      charactersAPI.createOneRegister(newCharacter);
    });
});
