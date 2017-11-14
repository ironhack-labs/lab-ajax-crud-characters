const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    e.preventDefault();
  });

  $('#fetch-one').on('click', (e) => {
    e.preventDefault();

  });

  $('#delete-one').on('click', (e) => {
    e.preventDefault();

  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();

  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();

  });


// charactersAPI.getFullList();
// charactersAPI.getOneRegister(17);
// charactersAPI.createOneRegister({name:'jose',occupation:'otra',debt:false,weapon:'espada'});
// charactersAPI.updateOneRegister(28,{name:'jose',occupation:'otra',debt:false,weapon:'trabuco'});
charactersAPI.deleteOneRegister(28);
});
