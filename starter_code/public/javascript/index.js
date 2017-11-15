const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com/");

$(document).ready(() => {
  $("#fetch-all").on("click", e => {
    charactersAPI.getFullList();
  });

  $("#fetch-one").on("click", e => {
    charactersAPI.getOneRegister(document.getElementById("character").value);
  });

  $("#delete-one").on("click", e => {
    charactersAPI.deleteOneRegister(document.getElementById("character").value);
  });

  $("#edit-character-form").on("submit", e => {
    e.preventDefault();
    // const form = document.getElementById("edit-character-form");
    const info = {
      id: document.getElementById("tobechanged").value,
      name: document.getElementById("change-name").value,
      occupation: document.getElementById("change-occupation").value,
      weapon: document.getElementById("change-weapon").value,
      debt: document.getElementById("change-debt").checked
    };
    charactersAPI.updateOneRegister(info);
  });

  $("#new-character-form").on("submit", e => {
    e.preventDefault();
    const info = {
      name: document.getElementById("new-name").value,
      occupation: document.getElementById("new-occupation").value,
      weapon: document.getElementById("new-weapon").value,
      debt: document.getElementById("new-debt").checked
    };
    console.log(name);
    charactersAPI.createOneRegister(info);
  });
});
