const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com")

$(document).ready( () => {
  const container = $('.characters-container');
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then(responses => {
      container.empty();
      responses.forEach( (e) => {
        showCharacter(e);
      });
    }).catch(e => console.error(e));
  });

  $('#fetch-one').on('click', (e) => {
    charactersAPI.getOneRegister($('#character-id').val()).then(responses => {
      container.empty();
      showCharacter(responses);
    }).catch(e => console.error(e))
  })

  $('#delete-one').on('click', (e) => {
    let id = $('#character-id-delete').val();
    let buttonDelete = $('#delete-one');
    charactersAPI.deleteOneRegister(id).then(responses => {
      console.log(responses);
      buttonDelete.addClass('active');
    }).catch(e => { console.error(e); buttonDelete.addClass('no-active'); })
  })

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    let editButton = $('#submit-one');
    const update = {
      id: $('#edit-id').val(),
      name: $('#edit-name').val(),
      occupation: $('#edit-occupation').val(),
      debt: $('#edit-debt').val(),
      weapon: $('#edit-weapon').val()
    }
    charactersAPI.updateOneRegister(update).then(responses => {
      console.log(responses);
      editButton.addClass('active');
    }).catch(e => { console.error(e); editButton.addClass('no-active');  });
  })

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    let newButton = $('#create-one');
    const newCharacter = {
      name: $('#new-name').val(),
      occupation: $('#new-occupation').val(),
      debt: $('#new-debt').val(),
      weapon: $('#new-weapon').val()
    }
    charactersAPI.createOneRegister(newCharacter).then(responses => {
      console.log(responses);
      newButton.addClass('active');
    }).catch(e => { console.error(e); newButton.addClass('no-active'); });
  })

  function showCharacter(char){
    let charInfo = $('<div>');
    charInfo.addClass('character-info');
    charInfo.append($('<div>').addClass('name').text(`Character Name: ${char.name}`));
    charInfo.append($('<div>').addClass('occupation').text(`Character Occupation: ${char.occupation}`));
    charInfo.append($('<div>').addClass('debt').text(`Character Debt: ${char.debt}`));
    charInfo.append($('<div>').addClass('weapon').text(`Character Weapon: ${char.weapon}`));
    container.append(charInfo);
  }

})
