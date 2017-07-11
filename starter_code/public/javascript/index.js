const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then(characterList => {
    console.log(characterList);
    characterList.forEach( character => {
      const $container = $('.characters-container');
      const $character = $('<div>').addClass('character-info');
      const $name = $('<div>').addClass('name').text(character.name);
      const $occupation = $('<div>').addClass('occupation').text(character.occupation);
      const $debt = $('<div>').addClass('debt').text(character.debt);
      const $weapon = $('<div>').addClass('weapon').text(character.weapon);
      $character.append($name).append($occupation).append($debt).append($weapon);
      $container.append($character);
    });
      }, (err) => {
        console.log(err);
      });
  });

  $('#fetch-one').on('click', (e) => {
    const charId = $("#charOne").val();
    charactersAPI.getOneRegister(charId).then(charOne => {
      console.log(charOne);
      $('.name').text(charOne.name);
      $('.occupation').text(charOne.occupation);
      $('.debt').text(charOne.debt);
      $('.weapon').text(charOne.weapon);
    });
  });

  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister();
  });

  $('#edit-character-form').on('submit', (e) => {

  });

  $('#new-character-form').on('submit', (e) => {

  });
});
