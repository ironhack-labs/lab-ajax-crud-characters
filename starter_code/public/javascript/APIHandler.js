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
        $('.characters-container').empty();
        response.forEach( (item) => {
          $('.characters-container').append(`
          <div class="character-info">
          <div class="name">Name <span class="value">${item.name}</span></div>
          <div class="occupation">Occupation <span class="value">${item.occupation}</span></div>
          <div class="debt">Debt <span class="value">${item.debt}</span></div>
          <div class="weapon">Weapon <span class="value">${item.weapon}</span></div>
          </div>`);
        });
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
         $('.characters-container').empty();
          $('.characters-container').append(`
          <div class="character-info">
          <div class="name">Name <span class="value">${response.name}</span></div>
          <div class="occupation">Occupation <span class="value">${response.occupation}</span></div>
          <div class="debt">Debt <span class="value">${response.debt}</span></div>
          <div class="weapon">Weapon <span class="value">${response.weapon}</span></div>
          </div>`);
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
        $('#send-data').css({"background-color":"green"})
        console.log(newCharacter);
        console.log("A new character has arrived!!");
      }, 
      error: function (err) {
        $('#send-data').css({"background-color":"red"})
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
        $('#up-send-data').css({"background-color":"green"})
        console.log("A new character has been updated");
      }, 
      error: function (err) {
        $('#up-send-data').css({"background-color":"red"})
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
        $('#delete-one').css({"background-color":"green"})
        console.log("Se borro");
      }, 
      error: function (err) {
        $('#delete-one').css({"background-color":"red"})
        console.log(err);
        
      }
    });
  }
}
