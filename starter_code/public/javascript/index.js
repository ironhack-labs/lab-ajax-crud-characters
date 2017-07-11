const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {

  // FETCH ALL--------------------------------------------------------------
  $('#fetch-all').on('click', (e) => {
      charactersAPI.getFullList();
  });

  // FETCH ONE--------------------------------------------------------------
  $('#fetch-one').on('click', (e) => {
    var myId =  $("#fetch-one-value").val();
      charactersAPI.getOneRegister (myId);
  });

  // DELETE ONE--------------------------------------------------------------
  $('#delete-one').on('click', (e) => {
    var myId = $("#delete-one-value").val();
      charactersAPI.deleteOneRegister (myId);
  });

  // EDIT ONE--------------------------------------------------------------
  $('#edit-character-form').on('submit', (e) => {
      charactersAPI.updateOneRegister ();
  });

// CREATE ONE--------------------------------------------------------------
  $('#new-character-form').submit((theChar) => {
    console.log(theChar)

    alert('hmmmmm')
      charactersAPI.createOneRegister ();
      theChar.preventDefault();
// retrieve what the user typed in the inputs (the input values)
const characterInfo = {
  name: $("#new-name-input").val(),
  occupation: $("#new-occupation-input").val(),
  weapon: $("#new-weapon-input").val(),
  debt: $("#new-debt-input").val()
};
postCharacterInfo(characterInfo);
  });
});
