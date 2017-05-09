const charactersAPI = new APIHandler('http://ih-api.herokuapp.com/characters');


$(document).ready(() => {
  function addCharacter(char) {
    $('.characters-container').append(`
    <div class="character-info">
      <div class="name">ID: ${char.id}</div>
      <div class="name">Name: ${char.name}</div>
      <div class="occupation">Occupation: ${char.occupation}</div>
      <div class="debt">Debt: ${char.debt}</div>
      <div class="weapon">Weapon: ${char.weapon}</div>
    </div>
    `);
  }

  function clearHistory() {
    $('.characters-container').html('');
  }

  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList((response) => {
      clearHistory();
      // console.log("response", response);
      response.forEach(character => addCharacter(character));
    });
  });

  $('#fetch-one').on('click', (e) => {
    const charId = $("input[name='character-id']").val();
    charactersAPI.getOneRegister(charId, (response) => {
      clearHistory();
      addCharacter(response);
    });
  });

  $('#delete-one').on('click', (e) => {
    const charId = $("input[name='character-id-delete']").val();
    charactersAPI.deleteOneRegister(charId, (response) => {
      // console.log(response.error);
      if (response.error) {
        $('#delete-one').css('background.color', 'red');
      } else {
        $('#delete-one').css('background.color', 'green');
      }
    });
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    const charId = $('#edit-character-form input[name=chr-id]').val();
    const char = {
      name: $('#edit-character-form input[name=name]').val(),
      occupation: $('#edit-character-form input[name=occupation]').val(),
      weapon: $('#edit-character-form input[name=weapon]').val(),
      debt: $('#edit-character-form input[type=checkbox][name=debt]:checked').val(),
    };
    charactersAPI.updateOneRegister(charId, char, (response) => {
      if (response.error) {
        $('#edit-character-form button').css('background-color', 'red');
      } else {
        $('#edit-character-form button').css('background-color', 'green');
        clearHistory();
        addCharacter(response);
      }
    });
  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    const characterInfo = {
      name: $('#new-character-form input[name=name]').val(),
      occupation: $('#new-character-form input[name=occupation]').val(),
      weapon: $('#new-character-form input[name=weapon]').val(),
      debt: $('#new-character-form input[type=checkbox][name=debt]:checked').val(),
    };
    charactersAPI.createOneRegister(characterInfo, (response) => {
      if (response.error) {
        $('#new-character-form button').css('background-color', 'red');
      } else {
        $('#new-character-form button').css('background-color', 'green');
        clearHistory();
        addCharacter(response);
      }
    });
  });
});