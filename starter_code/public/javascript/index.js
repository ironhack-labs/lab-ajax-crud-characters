//Llamadas necesarias AJAX

//Creamos una "instacia" del API para nuestro uso
const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then(characterslist => {

    });
  });

  $('#fetch-one').on('click', (e) => {
    const charId = $("#charOne").val();
    charactersAPI.getOneRegister(charId).then(charOne => {
      console.log(charOne);
      $('.name').text(charOne.name);
      $('.occupation').text(charOne.occupation);
      $('.debt').text(charOne.debt);
      $('.weapon').text(charOne.weapon);
    });
  });

  $('#delete-one').on('click', (e) => {

  });

  $('#edit-character-form').on('submit', (e) => {

  });

  $('#new-character-form').on('submit', (e) => {

  });
});
