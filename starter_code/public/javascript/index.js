const api = new APIHandler("https://ih-api.herokuapp.com");

console.log(api.getFullList);

$(document).ready( () => {
  //Fetch all
  $('#fetch-all').on('click', (e) => {
    api.getFullList();
  });

  //Fetch one
  $('#fetch-one').on('click', (e) => {
    api.getOneRegister($('#character-search-input').val());
  });

  //Delete one
  $('#delete-one').on('click', (e) => {

  });

  //Edit one
  const editForm = $('#edit-character-form');
  editForm.on('submit', (e) => {
    e.preventDefault();

    const id = editForm.find('input[name="chr-id"]').val();
    api.updateOneRegister(id, {
      id         : id,
      name       : editForm.find('input[name="name"]').val(),
      occupation : editForm.find('input[name="occupation"]').val(),
      weapon     : editForm.find('input[name="weapon"]').val()
    });

    editForm.trigger('reset');
  });

  //Create one
  const newForm = $('#new-character-form');
  newForm.on('submit', (e) => {
    e.preventDefault();

    api.createOneRegister({
      name       : newForm.find('input[name="name"]').val(),
      occupation : newForm.find('input[name="occupation"]').val(),
      weapon     : newForm.find('input[name="weapon"]').val()
    });

    newForm.trigger('reset');
  });
});
