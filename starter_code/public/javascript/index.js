/* jshint esversion: 6 */

const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    const charactersContainer = $("#characters-container");
    charactersContainer.children().detach();
    $('#delete-one').css('background-color', '');
    charactersAPI.getFullList(function (response){
      response.forEach((character) => {
        let newCharacterInfo = $('<div></div>').addClass('character-info')
          .append($(`<div>Name: ${character.name}</div>`).addClass('name'))
          .append($(`<div>Occupation: ${character.occupation}</div>`).addClass('occupation'))
          .append($(`<div>Debt: ${character.debt}</div>`).addClass('debt'))
          .append($(`<div>Weapon: ${character.weapon}</div>`).addClass('weapon'));
        charactersContainer.append(newCharacterInfo);
      });
      console.log(response);
    }, function (error){
      console.log(error);
    });
  });

  $('#fetch-one').on('click', (e) => {
    const characterId = $('#character-id').val();
    const charactersContainer = $("#characters-container");
    charactersContainer.children().detach();
    $('#delete-one').css('background-color', '');
    charactersAPI.getOneRegister(characterId, function (response){
      let newCharacterInfo = $('<div></div>').addClass('character-info')
        .append($(`<div>Name: ${response.name}</div>`).addClass('name'))
        .append($(`<div>Occupation: ${response.occupation}</div>`).addClass('occupation'))
        .append($(`<div>Debt: ${response.debt}</div>`).addClass('debt'))
        .append($(`<div>Weapon: ${response.weapon}</div>`).addClass('weapon'));
      charactersContainer.append(newCharacterInfo);
      console.log(response);
    }, function (error){
      console.log(error);
    });
  });

  $('#delete-one').on('click', (e) => {
    const characterId = $('#character-id-delete').val();
    const deleteButton = $('#delete-one');
    charactersAPI.deleteOneRegister(characterId, function (response){
      deleteButton.css('background-color', 'green');
    }, function (error){
      deleteButton.css('background-color', 'red');
    });
  });

  $('#edit-character-form').on('submit', (e) => {

  });

  $('#new-character-form').on('submit', (e) => {
    
  });
});
