class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList (callback) {
    $.ajax({
      url: this.BASE_URL+'/characters',
      method: 'GET',
      success: (listOfCharacters) => {
        console.log(listOfCharacters);
        $(".characters-container").html('');
        listOfCharacters.forEach((oneCharacter) => {


          $(".characters-container").append(`

            <div class="character-info">
              <div class="id">Id: <span> ${oneCharacter.id} </span></div>
              <div class="name">Name: <span> ${oneCharacter.name} </span></div>
              <div class="occupation">Occupation: <span> ${oneCharacter.occupation} </span></div>
              <div class="debt">Debt: <span> ${oneCharacter.debt} </span></div>
              <div class="weapon">Weapon: <span> ${oneCharacter.weapon} </span></div>
            </div>

          `);
        });
      },
      error: (error) => {
        alert("Failed");
        console.log(error);
      }
    });
  }

  getOneRegister (characterId) {
    $.ajax({
      url: this.BASE_URL+'/characters/'+characterId,
      method: 'GET',
      success: (oneCharacter) => {
        console.log(oneCharacter);
        $(".characters-container").html(`

          <div class="character-info">
            <div class="id">Id: <span> ${oneCharacter.id} </span></div>
            <div class="name">Name: <span> ${oneCharacter.name} </span></div>
            <div class="occupation">Occupation: <span> ${oneCharacter.occupation} </span></div>
            <div class="debt">Debt: <span> ${oneCharacter.debt} </span></div>
            <div class="weapon">Weapon: <span> ${oneCharacter.weapon} </span></div>
          </div>

        `);
      },
      error: (error) => {
        alert("Failed");
        console.log(error);
      }
    });
  }

  createOneRegister (newCharacter) {
    $.ajax({
      url: this.BASE_URL+'/characters',
      method: 'POST',
      data: newCharacter,
      success: (createdCharacter) => {
        console.log(createdCharacter);
        $('#send-data').addClass('success');
        setTimeout(() => {
          $('#send-data').removeClass('success');
        }, 500);
      },
      error: (error) => {
        alert("Failed");
        console.log(error);
        $('#send-data').addClass('failure');
        setTimeout(() => {
          $('#send-data').removeClass('failure');
        }, 500);
      }
    });
  }

  updateOneRegister (characterId, updatedCharacter) {
    $.ajax({
      url: this.BASE_URL+'/characters/'+characterId,
      method: 'PUT',
      data: updatedCharacter,
      success: (changedCharacter) => {
        console.log(changedCharacter);
        $('#send-update').addClass('success');
        setTimeout(() => {
          $('#send-update').removeClass('success');
        }, 500);
      },
      error: (error) => {
        console.log(error);
        $('#send-update').addClass('failure');
        setTimeout(() => {
          $('#send-update').removeClass('failure');
        }, 500);
      }
    });
  }

  deleteOneRegister (characterId) {
    $.ajax({
      url: this.BASE_URL+'/characters/'+characterId,
      method: 'DELETE',
      success: () => {
        console.log("Character Deleted");
        $('#delete-one').addClass('success');
        setTimeout(() => {
          $('#delete-one').removeClass('success');
        }, 500);
      },
      error: (error) => {
        console.log(error);
        $('#delete-one').addClass('failure');
        setTimeout(() => {
          $('#delete-one').removeClass('failure');
        }, 500);

      }
    });
  }
}
