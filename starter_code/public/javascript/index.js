const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {





  // ----------- FETCH ALL ONCLICK EVENT -----------
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  });
  // -------------------------------------------------






  // -------------- FETCH ONE ONCLICK EVENT --------------
  $('#fetch-one').on('click', (e) => {

    if ($('#character-id').val() === '') {
      alert('Please input a valid ID');

    } else {

      let charID = $('#character-id').val();

      $('.characters-container').empty();
      charactersAPI.getOneRegister(charID);
    }

  });
  // ----------------------------------------------------






  // -------------- DELETE ONE ONCLICK EVENT -------------
  $('#delete-one').on('click', (e) => {

    if ($('#character-id-delete').val() === '') {
      alert('Please input a valid ID for deletion');

    } else {

      let charID = $('#character-id-delete').val();
      $('.characters-container').empty();
      charactersAPI.deleteOneRegister(charID);
    }

  });
  // -----------------------------------------------------





  // -------------- EDIT ONE ONCLICK EVENT -------------
  $('#edit-character-form').on('submit', (e) => {

    e.preventDefault();
    let debt;

    if ($('#updateDebt').prop('checked')) {
      debt = true;
    } else {
      debt = false;
    }

    let newCharUpdate = {
      id: $('#updateID').val(),
      name: $('#updateName').val(),
      occupation: $('#updateOccupation').val(),
      weapon: $('#updateWeapon').val(),
      debt: debt
    };

    $('.characters-container').empty();
    charactersAPI.updateOneRegister(newCharUpdate);

  });
  // ------------------------------------------------------






  // -------------- CREATE ONE ONCLICK EVENT -------------
  $('#new-character-form').on('submit', (e) => {

    e.preventDefault();
    let debt;

    if ($('#newCharName').val() === '') {
      alert('Please input a valid NAME for creation');
    }

    if ($('#newCharDebt').prop('checked')) {
      debt = true;
    } else {
      debt = false;
    }

    let newChar = {
      name: $('#newCharName').val(),
      occupation: $('#newCharOccupation').val(),
      weapon: $('#newCharWeapon').val(),
      debt: debt
    };

    $('.characters-container').empty();
    charactersAPI.createOneRegister(newChar);

  });
  // ----------------------------------------------------






});
