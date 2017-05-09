const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  })

  $('#fetch-one').on('click', (e) => {
    let charId = $('input[name="character-id"]').val();
    console.log(charId);
    charactersAPI.getOneRegister(charId);
  })

  $('#delete-one').on('click', (e) => {
    let charId = $('input[name="character-id-delete"]').val();
    console.log(charId);
    charactersAPI.deleteOneRegister(charId);
  })

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    var newCharId = $('input[name="chr-id"]').val();
    console.log(newCharId);
    var temp;
    if ($('#editDebt').is(':checked')) {
      temp = true;
    } else {
      temp = false;
    }
    const newCharacterInfo = {
      name: $('#editName').val(),
      occupation: $('#editOccupation').val(),
      debt: temp,
      weapon: $('#editWeapon').val()
      // name: $('input[name="name"]').val(),
      // occupation: $('input[name="occupation"]').val(),
      // debt: temp,
      // weapon: $('input[name="weapon"]').val()
    };
    console.log(newCharacterInfo);
    charactersAPI.updateOneRegister(newCharacterInfo, newCharId);
  })

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    var temp;
    if ($('input[name="debt"]').is(':checked')) {
      temp = true;
    } else {
      temp = false;
    }
    const characterInfo = {
      name: $('input[name="name"]').val(),
      occupation: $('input[name="occupation"]').val(),
      debt: temp,
      weapon: $('input[name="weapon"]').val()
    };
    console.log(characterInfo);
    charactersAPI.createOneRegister(characterInfo);
  });
});

function showFeedback (postResponse) {
  console.log('post success');
  console.log(postResponse);
}

function handleError (err) {
  console.log('Oh no! Error:');
  console.log(err);
}
