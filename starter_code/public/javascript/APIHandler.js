/*jshint esversion:6*/
class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    $.ajax({
      url: this.BASE_URL + "/characters",
      type: 'GET',
      success: function(response) {
        response.forEach(function(character) {
          return $('#listCharacters')
            .append(`<li><p>Name:${character.name}</p></li>`);
        });
      },
      error: handleError
    });
  }

  getOneRegister() {
    const id = $("#ID").val();
    $.ajax({
      url: this.BASE_URL + "/characters/" + id,
      type: 'GET',
      success: function(response) {
        const itemCharacter = `
            <li>
              <p>Name:${response.name} </p>
              <p>Occupation:${response.occupation}</p>
              <p>Weapon:${response.weapon}</p>
              <p>Debt:${response.debt}</p>
              <p>Id:${response.id}</p>
            </li>
          `;
        return $('#listCharacters').append(itemCharacter);
      },
      error: handleError
    });
  }

  createOneRegister() {
    const characterInfo = {
      name: $("#newName").val(),
      occupation: $("#newOccupation").val(),
      weapon: $("#newWeapon").val(),
      debt: $("#newDebt").is(":checked")
    };
    $.ajax({
      url: this.BASE_URL + "/characters",
      type: 'POST',
      data: characterInfo,
      success: showFeedback,
      error: handleError
    });
  }

  updateOneRegister() {
    const updateCharacter = {
      id: $("#upID").val(),
      name: $("#upName").val(),
      occupation: $("#upOccupation").val(),
      weapon: $("#upWeapon").val(),
      debt: $("#upDebt").is(":checked")
    };
    $.ajax({
      url: this.BASE_URL + "/characters/" + updateCharacter.id,
      type: 'PATCH',
      data: updateCharacter,
      success: showFeedback,
      error: handleError
    });
  }

  deleteOneRegister() {
    const id = $("#delete").val();
    $.ajax({
      url: this.BASE_URL + "/characters/" + id,
      type: 'DELETE',
      success: showFeedback,
      error: handleError
    });
  }
}

function showFeedback(postResponse) {
  console.log('post success');
  console.log(postResponse);
}

function handleError(err) {
  console.log('Oh no! Error:');
  console.log(err);
}
