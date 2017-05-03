const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();

  });

  $('#fetch-one').on('click', (e) => {
    e.preventDefault();
    charactersAPI.getOneRegister($("input[type='text'][name='character-id']").val());
    $("input[type='text']").val("");
  });

  $('#delete-one').on('click', (e) => {
    e.preventDefault();
    charactersAPI.deleteOneRegister($("input[type='text'][name='character-id-delete']").val());
    $("input[type='text']").val("");
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    const user = {
      name: $("#edit-character-form input[type='text'][name='name']").val(),
      occupation: $("#edit-character-form input[type='text'][name='occupation']").val(),
      debt: $("#edit-character-form input[type='checkbox'][name='debt']").is(':checked'),
      weapon: $("#edit-character-form input[type='text'][name='weapon']").val(),
    };
    console.log(user);
    console.log($("input[type='text'][name='chr-id']").val());
    charactersAPI.updateOneRegister(user, $("input[type='text'][name='chr-id']").val());
    $("form").trigger("reset");
  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    const user = {
      name: $("#new-character-form input[type='text'][name='name']").val(),
      occupation: $("#new-character-form input[type='text'][name='occupation']").val(),
      debt: $("#new-character-form input[type='checkbox'][name='debt']").is(':checked'),
      weapon: $("#new-character-form input[type='text'][name='weapon']").val(),
    };
    charactersAPI.createOneRegister(user);
    $("form").trigger("reset");
  });
});
