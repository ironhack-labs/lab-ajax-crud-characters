const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com")

$(document).ready( () => {

  // Click fetch all button, display all the characters
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then((characterList) => {
      characterList.forEach((obj) => {
        $('.characters-container').append(`
          <div class="character-info">
            <div class="id">ID: ${obj.id}</div>
            <div class="name">Name: ${obj.name}</div>
            <div class="occupation">Occupation: ${obj.occupation}</div>
            <div class="debt">Has Debt: ${obj.debt}</div>
            <div class="weapon">Weapon: ${obj.weapon}</div>
          </div>`);
      });
    });

  })

  $('#fetch-one').on('click', (e) => {
    charactersAPI.getOneRegister($('.fetch-one').val()).then((character) => {
      $('.fetchOne').append(`
        <div class="character-info">
          <div class="id">ID: ${character.id}</div>
          <div class="name">Name: ${character.name}</div>
          <div class="occupation">Occupation: ${character.occupation}</div>
          <div class="debt">Has Debt: ${character.debt}</div>
          <div class="weapon">Weapon: ${character.weapon}</div>
        </div>`);
    });
  })

  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister($('.delete-one').val())
      .then((result) => {
        $('#delete-one').css("background-color", "green");
      })
      .catch((err) => {
        $('#delete-one').css("background-color", "red");
      });
  })

  $('#edit-character-form').on('submit', (e) => {

      e.preventDefault();

    const id = $('#editID').val();
    const name = $('#editName').val();
    const occupation = $('#editOccupation').val();
    const weapon = $('#editWeapon').val();
    let debt;

    if($('#editDebt').is(':checked')){
      debt = true;
    } else {
      debt = false;
    };

    console.log($('#editID').val(), $('#editName').val(), $('#editOccupation').val(), $('#editWeapon').val(), debt);

    charactersAPI.updateOneRegister(id, name, occupation, weapon, debt)
      .then((result) => {
        $('.editOne').css("background-color", "green");
      })
      .catch((err) => {
        $('.editOne').css("background-color", "red");
      });

  })

  $('#new-character-form').on('submit', (e) => {

    e.preventDefault();

    const name = $('#addName').val();
    const occupation = $('#addOccupation').val();
    const weapon = $('#addWeapon').val();
    let debt;

    if($('#addDebt').is(':checked')){
      debt = true;
    } else {
      debt = false;
    };

    charactersAPI.createOneRegister(name, occupation, weapon, debt)
      .then((result) => {
        $('.createOne').css("background-color", "green");
      })
      .catch((err) => {
        $('.createOne').css("background-color", "red");
      });
  })


})
