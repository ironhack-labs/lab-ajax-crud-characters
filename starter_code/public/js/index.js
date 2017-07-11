const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', () => {
    charactersAPI.getFullList();
  });

//////////////////////////////////////////////////

  $('#fetch-one').on('click', (e) => {
    e.preventDefault();
    const charNum = $('#charId').val();
      charactersAPI.getOneRegister(charNum);
  });

  //////////////////////////////////////////////////


  $('#delete-one').on('click', (e) => {
    e.preventDefault(e);
    charactersAPI.deleteOneRegister();
  });

  //////////////////////////////////////////////////


  $('#edit-character-form').on('submit', (e) => {
      e.preventDefault(e);
      const myId = $('#updateCharacterId').val();
      const newInfo = {
        name: $('#cName').val(),
        weapon: $('#cWeapon').val(),
        occupation: $('#cOccupation').val(),
        debt: $('#cDebt').val()
      };
      charactersAPI.updateOneRegister(myId, newInfo);
  });


  //////////////////////////////////////////////////


  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();

        // retrieve what the user typed in the inputs (the input values)
        const characterInfo = {
          name: $('#charName').val(),
          occupation: $('#charOccupation').val(),
          weapon: $('#charWeapon').val(),
          debt: $('#charDebt').val()
        };

        charactersAPI.createOneRegister(characterInfo);
  });
});

///////////////////////////////////////////////////////
