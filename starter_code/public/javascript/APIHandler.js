class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    $.ajax({
      method: 'GET',
      url: this.BASE_URL + '/characters',
      dataType: 'json',
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
      dataType: 'json',
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
      dataType: 'json',
      success: character => {
        console.log(character);
      },
      error: err => {
        console.error(err);
      }
    });
  }

  updateOneRegister(characterId, characterInfo) {
    $.ajax({
      method: 'PATCH',
      url: this.BASE_URL + '/characters/' + characterId,
      data: characterInfo,
      dataType: 'json text',
      success: character => {
        console.log(character);
      },
      error: err => {
        console.log('Character not found');
        console.error(err);
      }
    });
  }

  deleteOneRegister(characterId) {
    $.ajax({
      method: 'DELETE',
      url: this.BASE_URL + '/characters/' + characterId,
      success: () => {
        console.log('Character has been successfully deleted');
      },
      error: err => {
        console.log('Character not found');
        console.error(err);
      }
    });
  }
}
