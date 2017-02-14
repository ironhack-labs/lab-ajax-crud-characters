const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  })

  $('#fetch-one').on('click', (e) => {
    var id= $("input[name=character-id]").val();
    charactersAPI.getOneRegister(id);
  })

  $('#delete-one').on('click', (e) => {
    var id= $("input[name=character-id-delete]").val();
    charactersAPI.deleteOneRegister(id);
  })

  $('#edit-character-form').on('submit', (e) => {
    var id= $("input[name=chr-id]").val();
    e.preventDefault();
    const characterInfo = {
      name: $("input[name=name]").val(),
      occupation: $('input[name=occupation]').val(),
      weapon: $('input[name=weapon]').val(),
      debt: $('input[name=debt]').prop("checked")
    };
    charactersAPI.updateOneRegister(id,characterInfo);
  })

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    const characterInfo = {
      name: $("input[name=name]").val(),
      occupation: $('input[name=occupation]').val(),
      weapon: $('input[name=weapon]').val(),
      debt: $('input[name=debt]').prop("checked")
    };
    charactersAPI.createOneRegister(characterInfo);
    console.log(characterInfo);
  });
/////////////////////ITERATION 2
  $('#getEmAll').on('click', (e) => {
    charactersAPI.getFullListAndPrint();
  });

  $('#get-one').on('click', (e) => {
    var id= $("input[name=char-id]").val();
    charactersAPI.getOneAndPrint(id);
  });

});
