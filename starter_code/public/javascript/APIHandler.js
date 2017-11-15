class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    $.ajax({
      method: 'GET',
      url: this.BASE_URL + '/characters',
      success: allCharactersList => {
        console.log(allCharactersList);
        allCharactersList.forEach((character, index) => {
          let characterInfoDiv;
          if (index === 0) {
            characterInfoDiv = $('.character-info').prepend('<div class="id">Id: ' + character.id + '</div>');
          } else {
            characterInfoDiv = $('.character-info').clone().appendTo('.characters-container');
          }
          characterInfoDiv.children('.id').text('Id: ' + character.id);
          characterInfoDiv.children('.name').text('Name: ' + character.name);
          characterInfoDiv.children('.occupation').text('Occupation: ' + character.occupation);
          characterInfoDiv.children('.debt').text('Debt: ' + character.debt);
          characterInfoDiv.children('.weapon').text('Weapon: ' + character.id);
        });
      },
      error: err => {
        console.error(err);
      }
    });
  }

  getOneRegister(characterId) {
    $.ajax({
      method: 'GET',
      url: this.BASE_URL + '/characters/' + characterId,
      success: character => {
        console.log(character);
        $('.character-info').prepend('<div class="id">Id: ' + character.id + '</div>');
        $('.character-info .name').text('Name: ' + character.name);
        $('.character-info .occupation').text('Occupation: ' + character.occupation);
        $('.character-info .debt').text('Debt: ' + character.debt);
        $('.character-info .weapon').text('Weapon: ' + character.id);
      },
      error: err => {
        console.error(err);
      }
    });
  }

  createOneRegister(singleCharacter) {
    $.ajax({
      method: 'POST',
      url: this.BASE_URL + '/characters',
      data: singleCharacter,
      success: character => {
        console.log(character);
        $('#new-character-form .submit-button')
          .css('background-color', '#6B8E23')
          .animate({backgroundColor: 'rgba(88, 98, 123, 0.95)'}, 3000);
      },
      error: err => {
        console.error(err);
        $('#new-character-form .submit-button')
          .css('background-color', '#FF4500')
          .animate({backgroundColor: 'rgba(88, 98, 123, 0.95)'}, 3000);
      }
    });
  }

  updateOneRegister(characterId, characterInfo) {
    $.ajax({
      method: 'PATCH',
      url: this.BASE_URL + '/characters/' + characterId,
      data: characterInfo,
      success: character => {
        console.log(character);
        $('#edit-character-form .submit-button')
          .css('background-color', '#6B8E23')
          .animate({backgroundColor: 'rgba(88, 98, 123, 0.95)'}, 3000);
      },
      error: err => {
        console.error(err);
        $('#edit-character-form .submit-button')
          .css('background-color', '#FF4500')
          .animate({backgroundColor: 'rgba(88, 98, 123, 0.95)'}, 3000);
      }
    });
  }

  deleteOneRegister(characterId) {
    $.ajax({
      method: 'DELETE',
      url: this.BASE_URL + '/characters/' + characterId,
      success: character => {
        console.log(character);
        $('#delete-one')
          .css('background-color', '#6B8E23')
          .animate({backgroundColor: 'rgba(88, 98, 123, 0.95)'}, 3000);
      },
      error: err => {
        console.error(err);
        $('#delete-one')
          .css('background-color', '#FF4500')
          .animate({backgroundColor: 'rgba(88, 98, 123, 0.95)'}, 3000);
      }
    });
  }
}
