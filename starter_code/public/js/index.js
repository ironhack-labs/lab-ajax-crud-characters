const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
    charactersAPI.getOneRegister($("input[name='character-id']").val());
  });

  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister($("input[name='character-id-delete']").val());
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();

    const id = $("input[name='chr-id']").val();
    const editInfo = {
      name: $("#edit-character-form input[name='name']").val(),
      occupation: $("#edit-character-form input[name='occupation']").val(),
      weapon: $("#edit-character-form input[name='weapon']").val(),
      debt: $("#edit-character-form input[name='debt']").prop("checked")
    };
    charactersAPI.updateOneRegister(id, editInfo);
  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();

    const newInfo = {
      name: $("#new-character-form input[name='name']").val(),
      occupation: $("#new-character-form input[name='occupation']").val(),
      weapon: $("#new-character-form input[name='weapon']").val(),
      debt: $("#new-character-form input[name='debt']").prop("checked")
    };
    charactersAPI.createOneRegister(newInfo);
  });
});
