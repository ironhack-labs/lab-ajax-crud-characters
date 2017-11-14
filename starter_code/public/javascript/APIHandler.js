class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url: "http://ih-crud-api.herokuapp.com/characters",
      success: function(result){
        for(var i = 0; i < result.length; i++){
          console.log(result[i]);
          $(".characters-container").append(
            "<div class='character-info'>" +
                "<div class='name'>Name: " + result[i].name + "</div>" +
                "<div class='occupation'>Occupation: " + result[i].occupation + "</div>" +
                "<div class='debt'>Debt: " + result[i].debt + "</div>" +
                "<div class='weapon'>Weapon: " + result[i].weapon + "</div>" +
            "</div>"
          );
        }
      }
    });
  }

  getOneRegister () {
    var id = $('#character-id').val();
    if(id === "") {
      return
    } else {
      $.ajax({
        url: "http://ih-crud-api.herokuapp.com/characters/"+ id,
        success: function(result){
          console.log(result);
          $(".characters-container").append(
            "<div class='character-info'>" +
                "<div class='name'>Name: " + result.name + "</div>" +
                "<div class='occupation'>Occupation: " + result.occupation + "</div>" +
                "<div class='debt'>Debt: " + result.debt + "</div>" +
                "<div class='weapon'>Weapon: " + result.weapon + "</div>" +
            "</div>"
          );
          $('#character-id').val('');
        }
      });
    }
  }

  createOneRegister () {
    let nameData = $('#name').val();
    let occupationData = $('#occupation').val();
    let weaponData = $('#weapon').val();
    let debtData = $('#debt').prop("checked");

    const characterInfo = {
      name: nameData,
      occupation: occupationData,
      weapon: weaponData,
      debt: debtData
    };

    $.ajax({
      method: 'POST',
      url: 'https://ih-crud-api.herokuapp.com/characters',
      data: characterInfo,
      success: function(result){
        console.log(characterInfo)
        $('#createChar').css('background-color','green');
      },
      error: function(error){
        console.error(error)
        $('#createChar').css('background-color','red');
      }
    });
  }

  updateOneRegister () {
    let nameData = $('#updatedName').val();
    let occupationData = $('#updatedOccupation').val();
    let weaponData = $('#updatedWeapon').val();
    let debtData = $('#updatedDebt').prop("checked");

    const updateInfo = {
      name: nameData,
      occupation: occupationData,
      weapon: weaponData,
      debt: debtData
    };

    let charId = $('#editInput').val();

    $.ajax({
      method: 'PATCH',
      url: `https://ih-crud-api.herokuapp.com/characters/${charId}`,
      data: updateInfo,
      success: function(updated){
        console.log(updated);
        let nameData = $('#updatedName').val('');
        let occupationData = $('#updatedOccupation').val('');
        let weaponData = $('#updatedWeapon').val('');
        $('#updatebtn').css('background-color','green');
      },
      error: function(error){
        console.error(error);
        $('#updatebtn').css('background-color','red');
      }
    });
  }

  deleteOneRegister () {
    let deleteId = $('#deleteInput').val();
    $.ajax({
      method: 'DELETE',
      url: `http://ih-crud-api.herokuapp.com/characters/${deleteId}`,
      success: function(success){
        $('#delete-one').css('background-color','green');
        console.log('Deleted!');
        $('#deleteInput').val('');
      },
      error: function(error){
        console.error('Error');
        $('#delete-one').css('background-color','red');
      }
    })
  }
}
