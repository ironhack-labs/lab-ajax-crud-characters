const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com")

$(document).ready( () => {

  $("#fetch-all").on("click", (e) => {
    charactersAPI.getFullList();
  });

  $("#fetch-one").on("click", (e) => {
    const idNumber = document.getElementById("charcter-id-field").value;
    charactersAPI.getOneRegister(idNumber);
  });

  $("#delete-one").on("click", (e) => {
    const idNumber = document.getElementById("id-delete-field").value;
    charactersAPI.deleteOneRegister(idNumber);
  });

  $("#edit-character-form").on("submit", (e) => {
    e.preventDefault();
    const formCreation = document.getElementById("edit-character-form");
    const editChar = {
      id: formCreation[0].value,
      name: formCreation[1].value,
      occupation: formCreation[2].value,
      debt: formCreation[4].checked,
      weapon: formCreation[3].value
    };
    charactersAPI.updateOneRegister(editChar);
  });

  $("#new-character-form").on("submit", (e) => {
    e.preventDefault();
    const formCreation = document.getElementById("new-character-form");
    const newChar = {
      name: formCreation[0].value,
      occupation: formCreation[1].value,
      debt: formCreation[3].checked,
      weapon: formCreation[2].value
    };
    charactersAPI.createOneRegister(newChar);
  });
});
