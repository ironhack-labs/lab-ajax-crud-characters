class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      method: "GET",
      url: "http://ih-api.herokuapp.com/characters",
      success: function (response) {
        console.log(response);
      }, 
      error: function (err) {
        console.log(err);
      }
    });
  }

  getOneRegister () {
    let characterId = $('#character-id').val();

     $.ajax({
      method: "GET",
      url: `http://ih-api.herokuapp.com/characters/${characterId}`,
      success: function (response) {
        console.log(response);
      }, 
      error: function (err) {
        console.log(err);
      }
    });
  }

  createOneRegister () {

    let characterDebt = null;

    if ($('#debt').prop('checked')) {
      characterDebt = true;
    } else {
      characterDebt = false;
    }

     let newCharacter = { 
       name: $('#name').val() , 
       occupation: $('#occupation').val() , 
       debt: characterDebt, 
       weapon: $('#weapon').val()  
      }

     $.ajax({
      ContentType: 'application/json',
      method: "POST",
      data: newCharacter,
      url: `http://ih-api.herokuapp.com/characters`,
      success: function (response) {
        console.log(newCharacter);
        console.log("A new character has arrived!!");
      }, 
      error: function (err) {
        console.log(err);
      }
    });
  }

  updateOneRegister () {
    let characterDebt = null;

    if ($('#up-debt').prop('checked')) {
      characterDebt = true;
    } else {
      characterDebt = false;
    }
      let updatedCharacter = { 
       name: $('#up-name').val() , 
       occupation: $('#up-occupation').val() , 
       debt: characterDebt, 
       weapon: $('#up-weapon').val(),
       id: $('#up-chr-id').val()  
      }

     $.ajax({
      method: "PUT",
      data: updatedCharacter,
      url: `http://ih-api.herokuapp.com/characters/${updatedCharacter.id}`,
      success: function (response) {
        console.log(response);
        console.log(updatedCharacter);
        console.log(updatedCharacter.id);
        console.log("A new character has been updated");
      }, 
      error: function (err) {
        console.log(err);
      }
    });
  }

  deleteOneRegister () {
     let characterId = $('#delete').val();

     $.ajax({
      method: "DELETE",
      url: `http://ih-api.herokuapp.com/characters/${characterId}`,
      success: function (response) {
        console.log("Se borro");
      }, 
      error: function (err) {
        console.log(err);
      }
    });
  }
}
