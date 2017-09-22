const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  console.log('Page is ready');
  $('#fetch-all').on('click', (e) => {
    // $('#fetch-all').click(() => {
      //when click pokebutton should see the alert below.
      // alert("Im the Alert!");
      //characterAPI is the value representing newAPIHandler.  I put the method I want after it.
      charactersAPI.getFullList();
    });

  $('#fetch-one').on('click', (e) => {
    alert("Im the Alert!");
    //I want the value of the id of the place I input the value, set it equal to a variable and pass hte variable into the parens.
    let characterId= $('#cow').val();
    charactersAPI.getOneRegister(characterId);
  });

  $('#delete-one').on('click', (e) => {
    let characterDelete= $('#deletion').val();
    charactersAPI.deleteOneRegister(characterDelete);
  });

  $('#edit-character-form').on('submit', (e) => {

  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    let newCharacterObject= {
      name: $('#newName').val(),
		  occupation: $('#newOccupation').val(),
      //debt is checkbox, if checkesd then returns true else false
		  debt: $('#newDebt').is(":checked"),
		  weapon: $('#newWeapon').val(),
    };
charactersAPI.createOneRegister(newCharacterObject);
  });
// });
});
