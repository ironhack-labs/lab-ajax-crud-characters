const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")


// --------------------------------------------FETCH ALL------------------------------------
$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {

    charactersAPI.getFullList();
  });

// ---------------------------------------------FETCH ONE------------------------------------
  $('#fetch-one').on('click', (e) => {
    let id = $("input[name=character-id]").val();

    charactersAPI.getOneRegister(id);
  });


// --------------------------------------------DELETE ONE------------------------------------
  $('#delete-one').on('click', (e) => {
    let id = $("input[name=character-id-delete]").val();

    charactersAPI.deleteOneRegister(id);
  });

// ---------------------------------------EDIT CHARACTER FORM--------------------------------
  $('#edit-character-form').on('submit', (e) => {
    let id= $("input[name=chr-id]").val();
    e.preventDefault();

    const characterInfo = {
      name:$("input[name=name]").val(),
      occupation:$('input[name=occupation]').val(),
      weapon:$('input[name=weapon]').val(),
      debt:$('input[name=debt]').prop("checked")

    };
    charactersAPI.updateOneRegister(id,characterInfo);
  });

// --------------------------------------------NEW CHARACTER FORM------------------------------------
  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    const characterInfo = {

      name:$("input[name=name]").val(),
      occupation:$('input[name=occupation]').val(),
      weapon:$('input[name=weapon]').val(),
      debt:$('input[name=debt]').prop("checked")

    };
    charactersAPI.createOneRegister(characterInfo);
    console.log(characterInfo);
  });
});
