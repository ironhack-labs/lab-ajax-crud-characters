const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

function printFullList (postResponse) {
  console.log('post success');
  console.log(postResponse);
}

function printCharacter(postResponse){
  console.log(postResponse);
}

function showCreation(postResponse){
  console.log(postResponse);
}

function showUpdate(postResponse){
  console.log(postResponse);
}

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
      charactersAPI.getFullList ();
  })

  $('#fetch-one').on('click', (e) => {
      var bla = $('#characterID').val();
      charactersAPI.getOneRegister(bla);
  })

  $('#delete-one').on('click', (e) => {
      charactersAPI.deleteOneRegister();

  })

  $('#edit-character-form').on('submit', (e) => {
      var bla = $('#characterID').val();
      charactersAPI.updateOneRegister();
  })

  $('#new-character-form').on('submit', (e) => {
      e.preventDefault();
      charactersAPI.createOneRegister();
  })

})
