const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready(() => {
  $('#fetch-all').on('click', (e) => {
    console.log('fecht-all');
    charactersAPI.getFullList().then(characterList => {
      printListChar(characterList);        // print List in html
      console.log(characterList);
    });
  });

  $('#fetch-one').on('click', (e) => {
    console.log('fecht-one');
    var charId = $("#char-id").val();
    charactersAPI.getOneRegister(charId).then(character => {
      // print in edit form the character selected
      printEditForm(character);
      console.log(character);
    }, err => {
      console.log(err, 'Oppss character not found');
    });
  });

  $('#new-character-form').on('submit', (event) => {
    event.preventDefault(); /* stop form from submitting normally */
    let data = getNewCharFormData(); // get data from form
    charactersAPI.createOneRegister(data).then(newChar => {
      console.log('New character created: ', newChar);
    }, (err, data) => {
      console.log('ERRROR', err, 'data: ', data);
    });

  });

  $('#edit-character-form').on('submit', (e) => {
    event.preventDefault(); /* stop form from submitting normally */
    let data = getEditFormData(); // get data from form

    charactersAPI.updateOneRegister(data.id, data).then(upadteChar => {
      console.log('Update character: ', upadteChar);
      $("#char-id").val('');
    }, (data, err) => {
      console.log('Data', data, 'error: ', err);
    });
  });


  $('#delete-one').on('click', (e) => {
    console.log('delete');
    event.preventDefault(); /* stop form from submitting normally */
    var charId = $("#id-delete").val();

    // Si borra el registro pero no muestra el console.log dentro de then()
    charactersAPI.deleteOneRegister(charId).then( delChar => {
      // $("#id-delete").val(''); // clear input
      console.log('Character has been successfully deleted', delChar);
    });
  });




});
