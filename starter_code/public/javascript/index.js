const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com");

$(document).ready( () => {
  const container = $('.characters-container');
  const editButton = $('#submit-one');
  const newButton = $('#create-one');
  const deleteButton = $('#delete-one');
  const fetchButton = $('#fetch-one');

   $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then(responses => {
      container.empty();
      responses.forEach( (e) => {
        showCharacter(e);
      });
    }).catch(e => console.error(e));
  });

  fetchButton.on('click', (e) => {
    let fetchId = $('#character-id');
    if(fetchId.val() != ""){
      resetButtons();
      charactersAPI.getOneRegister(fetchId.val()).then(responses => {
        container.empty();
        fetchId.val("");
        showCharacter(responses);
      }).catch(e => { console.error(e); fetchButton.addClass('no-active'); });
    };
  });

  deleteButton.on('click', (e) => {
    let deleteId = $('#character-id-delete');
    resetButtons();
    charactersAPI.deleteOneRegister(deleteId.val()).then(responses => {
      deleteId.val("");
      deleteButton.addClass('active');
    }).catch(e => { console.error(e); deleteButton.addClass('no-active'); });
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    const update = {
      id: $('#edit-id').val(),
      name: $('#edit-name').val(),
      occupation: $('#edit-occupation').val(),
      debt: $('#edit-debt').prop('checked'),
      weapon: $('#edit-weapon').val()
    };

    $('#edit-id').val("");
    $('#edit-name').val("");
    $('#edit-occupation').val("");
    $('#edit-debt').prop('checked', false);
    $('#edit-weapon').val("");

    resetButtons();
    charactersAPI.updateOneRegister(update).then(responses => {
      editButton.addClass('active');
    }).catch(e => { console.error(e); editButton.addClass('no-active');  });
  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    const newCharacter = {
      name: $('#new-name').val(),
      occupation: $('#new-occupation').val(),
      debt: $('#new-debt').prop('checked'),
      weapon: $('#new-weapon').val()
    };

    $('#new-name').val("");
    $('#new-occupation').val("");
    $('#new-debt').prop('checked', false);
    $('#new-weapon').val("");

    resetButtons();
    charactersAPI.createOneRegister(newCharacter).then(responses => {
      newButton.addClass('active');
    }).catch(e => { console.error(e); newButton.addClass('no-active'); });
  });

  function showCharacter(char){
    let charInfo = $('<div>');
    charInfo.addClass('character-info');
    charInfo.append($('<div>').addClass('id').html(` Id: <span>${char.id}</span>`));
    charInfo.append($('<div>').addClass('name').html(` Name: <span>${char.name}</span>`));
    charInfo.append($('<div>').addClass('occupation').html(` Occupation: <span>${char.occupation}</span>`));
    charInfo.append($('<div>').addClass('debt').html(` Debt: <span>${char.debt}</span>`));
    charInfo.append($('<div>').addClass('weapon').html(` Weapon: <span>${char.weapon}</span>`));
    container.append(charInfo);
  }

  function resetButtons() {
    editButton.removeClass('no-active');
    newButton.removeClass('no-active');
    deleteButton.removeClass('no-active');
    fetchButton.removeClass('no-active');

    editButton.removeClass('active');
    newButton.removeClass('active');
    deleteButton.removeClass('active');
  }

});
