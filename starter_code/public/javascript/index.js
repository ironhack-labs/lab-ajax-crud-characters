const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  })

  $('#fetch-one').on('click', (e) => {
    let id = $('#fetch-one').siblings('input').val()
    charactersAPI.getOneRegister(id);
  })

  $('#delete-one').on('click', (e) => {
    let id = $('#delete-one').siblings('input').val()
    // Empty the input value after getting it.
    $('#delete-one').siblings('input').val('');
    charactersAPI.deleteOneRegister(id);
  })

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    // Get input values.
    let id = $( "#edit-character-form div:first input" ).val();
    let name = $( "#edit-character-form div:nth-child(2) input" ).val();
    let occupation = $( "#edit-character-form div:nth-child(3) input" ).val();
    let weapon = $( "#edit-character-form div:nth-child(4) input" ).val();
    let debt = $( "#edit-character-form div:nth-child(5) input" ).is(':checked');

    // Create the character object.
    let newChar = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      debt: debt,
    }
    // Clean the inputs.
    $( "#edit-character-form div:first input" ).val("");
    $( "#edit-character-form div:nth-child(2) input" ).val("");
    $( "#edit-character-form div:nth-child(3) input" ).val("");
    $( "#edit-character-form div:nth-child(4) input" ).val("");

    charactersAPI.updateOneRegister (id, newChar);
  })

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    // Get input values.
    let name = $( "#new-character-form div:first input" ).val();
    let occupation = $( "#new-character-form div:nth-child(2) input" ).val();
    let weapon = $( "#new-character-form div:nth-child(3) input" ).val();
    let debt = $( "#new-character-form div:nth-child(4) input" ).is(':checked');

    // Create the character object.
    let newChar = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      debt: debt,
    }
    // Clean the inputs.
    $( "#new-character-form div:first input" ).val("");
    $( "#new-character-form div:nth-child(2) input" ).val("");
    $( "#new-character-form div:nth-child(3) input" ).val("");

    charactersAPI.createOneRegister (newChar);
  })
})
