const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  $("#fetch-all").on('click',() => {
    charactersAPI.getFullList();
  })
  

  $("#fetch-one").on('click',() => {
    let id = $("#character-id").value;
    id != "" ? charactersAPI.getOneRegister(id) : null;
  })

  $("#delete-one").on('click',() => {
    let id = $("#character-id-delete").value;
    id != "" ? charactersAPI.getOneRegister(id) : null;
  })

  $("#edit-character-form").on('submit', () => {
    let editCharacter = {
      id: $("#edit-character-form input input[name='chr_id'").val,
      name: $("#edit-character-form input[name='name']").val,
      occupation: $("#edit-character-form input[name='occupation']").val,
      weapon: $("#edit-character-form input[name='weapon']").val,
      cartoon: $("#edit-character-form input[name='cartoon']").val
    };
    name != "" || occupation != "" || weapon != "" || cartoon != ""
      ? charactersAPI.createOneRegister(editCharacter)
      : null;
  });

  $("#new-character-form").on ('submit', () => {
    let newCharacter = {
      name: $("#new-character-form input[name='name']").val,
      occupation: $("#new-character-form input[name='occupation']").val,
      weapon: $("#new-character-form input[name='weapon']").val,
      cartoon: $("#new-character-form input[name='cartoon']").val
    };
    name != "" || occupation != "" || weapon != "" || cartoon != ""
      ? charactersAPI.createOneRegister(newCharacter)
      : null;
  })
});
