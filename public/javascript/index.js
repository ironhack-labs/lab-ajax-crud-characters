const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    console.log("clicked");
    //alert("clicked");
    e.preventDefault();
      charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
    console.log("clicked");
    //alert("clicked");
    e.preventDefault();
      charactersAPI.getOneRegister();
  });

  $('#delete-one').on('click', (e) => {

  });

  $('#edit-character-form').on('submit', (e) => {

  });

  $('#new-character-form').on('submit', (e) => {

  });
});

//
