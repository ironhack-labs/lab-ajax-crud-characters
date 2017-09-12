const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then(p => console.log(p));
  });

  $('#fetch-one').on('click', (e) => {
    let posi = $('.selecID').val();
    charactersAPI.getOneRegister(posi).then(p => console.log(p));
  });

  $('#delete-one').on('click', (e) => {

  });

  $('#edit-character-form').on('submit', (e) => {

  });

  $('#new-character-form').on('submit', (e) => {

  });
});
