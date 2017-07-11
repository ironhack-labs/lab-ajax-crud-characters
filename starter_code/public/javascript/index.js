const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready(() => {
  $('#fetch-all').on('click', (e) => {
    console.log('fecht-all');
    charactersAPI.getFullList().then(characterList => {
      console.log(characterList);
    });
  });

  $('#fetch-one').on('click', (e) => {
    console.log('fecht-one');
    var charId = document.getElementById("char-id").value;
    charactersAPI.getOneRegister(charId).then(character => {
      console.log(character);
    }, err => {
      console.log(err, 'Oppss character not found');
    });
  });

  function getNewCharFormData() {
    let $name = $('#newName').val();
    let $occupation = $('#newOccupation').val();
    let $weapon = $('#newWeapon').val();
    let $debt = $('#newDebt');
    let debVal;
    let error = { name: false, occupation: false, weapon: false};

    if ($debt.is(":checked"))
      debVal = true;
    else
      debVal = false;

    if(!$name) {
      error.name = true;
      return error;
    }else if(!$occupation){
      error.occupation = true;
      return error;
    }else if(!$weapon){
      error.weapon = true;
      return error;
    }else{
      return {
        name: $name,
        occupation: $occupation,
        debt: debVal,
        weapon: $weapon
      };
    }


  }

  $('#new-character-form').on('submit', (event) => {
    event.preventDefault();   /* stop form from submitting normally */
    let data = getNewCharFormData(); // get data from form

    charactersAPI.createOneRegister(data).then(newChar => {
      console.log('New character created: ', newChar);
    }, err => {
      console.log(err);
    });

  });

  $('#edit-character-form').on('submit', (e) => {

  });

  $('#delete-one').on('click', (e) => {

  });




});
