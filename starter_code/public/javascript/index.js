const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");




$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
    const id = $('#character-id').val();
    charactersAPI.getOneRegister(id);

  });

  $('#delete-one').on('click', (e) => {
    const id = $('#character-id-delete').val();
    charactersAPI.deleteOneRegister(id);
  });

  $('#edit-character-form').on('submit', (e) => {
    const id = $('#id-edit').val();
    e.preventDefault();
    charactersAPI.updateOneRegister(id);
  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    charactersAPI.createOneRegister();
  });
});

function getHtmlBluePrient(obj){

  return bluePrient;
}
