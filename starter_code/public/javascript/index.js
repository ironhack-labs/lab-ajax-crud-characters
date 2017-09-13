const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
charactersAPI.getFullList().then(e=>console.log(e));
  });

  $('#fetch-one').on('click', (e) => {
let id = $("input[name = 'character-id']").val();
charactersAPI.getOneRegister(id).then(e=>console.log(e));
  });

      $('#delete-one').on('click', (e) => {
       let Id = $("input[name = 'character-id-delete']").val();
       charactersAPI.deleteOneRegister (Id).then( p => { console.log(p); });
     });
  $('#edit-character-form').on('submit', (e) => {

  });



$('#new-character-form').on('submit', (e) => {
    event.preventDefault();
    let theNew = {
      name: $("input[name = 'name']").val(),
      occupation: $("input[name = 'occupation']").val(),
      weapon: $("input[name = 'weapon']").val()
    };
    charactersAPI.createOneRegister( theNew );
  });
});
