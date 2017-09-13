const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready(() => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then(p => console.log(p));
  });

  $('#fetch-one').on('click', (e) => {
    let posi = $('.selecID').val();
    charactersAPI.getOneRegister(posi).then(p => console.log(p));
  });

  $('#delete-one').on('click', (e) => {
    let posi = $('input:text[name = character-id-delete]').val();
    charactersAPI.deleteOneRegister(posi);
  });

  $('#edit-character-form').on('submit', (e) => {
     e.preventDefault();
     let id = $(`#${e.currentTarget.id} input[name='chr-id']`)[0].value;
     let name = $(`#${e.currentTarget.id} input[name='name']`)[0].value;
     let occupation = $(`#${e.currentTarget.id} input[name='occupation']`)[0].value;
     let weapon = $(`#${e.currentTarget.id} input[name='weapon']`)[0].value;
     let debt = $(`#${e.currentTarget.id} input[name='debt']`).prop("checked");
     let actualizar = {
       id: id,
       name: name,
       occupation: occupation,
       weapon: weapon,
       debt: debt,
     };
    console.log(actualizar);
    charactersAPI.updateOneRegister(actualizar);
  });

  $('#new-character-form').on('submit', (e) => {
    event.preventDefault();
    let nuevo = {
      name: $('input:text[name = name]').val(),
      occupation: $('input:text[name = occupation]').val(),
      weapon: $('input:text[name = weapon]').val(),
    };
    charactersAPI.createOneRegister(nuevo);
  });
});
