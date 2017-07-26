const charactersAPI = new APIHandler("https://ih-api.herokuapp.com/characters/")

$(document).ready( () => {

  // FETCH ALL METHOD/////////////////////////////////////////////////////////
  $('#fetch-all').on('click', (e) => {

    // Clear container
    $('.characters-container').html('');

    // Append full list
    charactersAPI.getFullList()
    .then(({data:characters}) => {
        characters.forEach(appendToContainer);
    })
    .catch(error => {
      console.log(error);
    });

  })

  // FETCH ONE METHOD/////////////////////////////////////////////////////////
  $('#fetch-one').on('click', (e) => {

    // Clear container
    $('.characters-container').html('');

    // Append full list
    charactersAPI.getOneRegister($('#character-id').val())
    .then(({data:character}) => {
        appendToContainer(character);
    })
    .catch(error => {
      console.log(error);
    });

  });

  // DELETE ONE METHOD/////////////////////////////////////////////////////////
  $('#delete-one').on('click', (e) => {

    charactersAPI.deleteOneRegister($('#character-id-delete').val())
    .then(({data:result}) => {
      $('#delete-one').css('background-color', 'green');
      var timeoutId = setTimeout( () => {
        $('#delete-one').css('background-color', 'transparent');
        clearTimeout(timeoutId);
      }, 1500);
    })
    .catch(error => {
      console.log(error);
      $('#delete-one').css('background-color', 'red');
      var timeoutId = setTimeout( () => {
        $('#delete-one').css('background-color', 'transparent');
        clearTimeout(timeoutId);
      }, 1500);
    });

  })


  // ADD CHARACTER METHOD/////////////////////////////////////////////////////
  $('#new-character-form').on('submit', (e) => {

    const char = {
      'name': $('#new-character-name').val(),
      'occupation': $('#new-character-occupation').val(),
      'weapon': $('#new-character-weapon').val(),
      'debt': $('#new-character-debt').is(':checked')
    }

    charactersAPI.createOneRegister(char)
    .then( result => {
      $('#send-new-character-data').css('background-color', 'green');
      var timeoutId = setTimeout( () => {
        $('#send-new-character-data').css('background-color', 'transparent');
        clearTimeout(timeoutId);
      }, 1500);
    })
    .catch((error) => {
      console.log(error);
      $('#send-new-character-data').css('background-color', 'red')
      var timeoutId = setTimeout( () => {
        $('#send-new-character-data').css('background-color', 'transparent');
        clearTimeout(timeoutId);
      }, 1500);
    })

  })

  $('#new-character-form').on('submit', (e) => {

  })
})


// UPDATE CHARACTER METHOD/////////////////////////////////////////////////////
$('#edit-character-form').on('submit', (e) => {

  const char = {
    'id': $('#edit-chr-id').val(),
    'name': $('#edit-name').val(),
    'occupation': $('#edit-occupation').val(),
    'weapon': $('#edit-weapon').val(),
    'debt': $('#edit-debt').is(':checked')
  }

  charactersAPI.updateOneRegister(char)
  .then( result => {
    $('#send-updated-character-data').css('background-color', 'green');
    var timeoutId = setTimeout( () => {
      $('#send-updated-character-data').css('background-color', 'transparent');
      clearTimeout(timeoutId);
    }, 1500);
  })
  .catch((error) => {
    console.log(error);
    $('#send-updated-character-data').css('background-color', 'red')
    var timeoutId = setTimeout( () => {
      $('#send-updated-character-data').css('background-color', 'transparent');
      clearTimeout(timeoutId);
    }, 1500);
  })

})



// APPEND METHOD///////////////////////////////////////////////////////////////
function appendToContainer(character) {

  // Create HTML element to add
  const char = $(`
    <div class="character-info">
      <div class="id">Id: ${character.id}</div>
      <div class="name">Name: ${character.name}</div>
      <div class="occupation">Occupation: ${character.occupation}</div>
      <div class="debt">Debt: ${character.debt}</div>
      <div class="weapon">Weapon: ${character.weapon}</div>
    </div>
  `);

  // Append to characters container
  $('.characters-container').append(char);

}
