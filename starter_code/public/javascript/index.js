const api = new APIHandler("https://ih-api.herokuapp.com/");

console.log(api.getFullList);

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    api.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
    api.getOneRegister($('#character-search-input').val());
  });

  $('#delete-one').on('click', (e) => {

  });

  const editForm = $('#edit-character-form');
  editForm.on('submit', (e) => {
    e.preventDefault();

  });

  const newForm = $('#new-character-form');
  newForm.on('submit', (e) => {
    e.preventDefault();
    console.log(newForm);

    api.createOneRegister({
      name       : newForm.find('input[name="name"]').val(),
      occupation : newForm.find('input[name="occupation"]').val(),
      weapon     : newForm.find('input[name="weapon"]').val()
    });

    newForm.trigger('reset');
  });
});
