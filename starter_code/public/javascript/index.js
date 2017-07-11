const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then(characterList => {
      characterList.forEach(character => {
        const $container = $('.characters-container');
        const $character = $('<div>').addClass('character-info');
        const $name = $('<div>').addClass('name').text(character.name);
        const $occupation = $('<div>').addClass('occupation').text(character.occupation);
        const $debt = $('<div>').addClass('debt').text(character.debt);
        const $weapon = $('<div>').addClass('weapon').text(character.weapon);
        $character
          .append($name)
          .append($occupation)
          .append($debt)
          .append($weapon);
        $container.append($character);
      });
    });
  });

  $('#fetch-one').on('click', (e) => {
    let id = $('#getOneRegister').val();
    charactersAPI.getOneRegister(id).then(character => {
      const $container = $('.characters-container');
      const $character = $('<div>').addClass('character-info');
      const $name = $('<div>').addClass('name').text(character.name);
      const $occupation = $('<div>').addClass('occupation').text(character.occupation);
      const $debt = $('<div>').addClass('debt').text(character.debt);
      const $weapon = $('<div>').addClass('weapon').text(character.weapon);
      $character
        .append($name)
        .append($occupation)
        .append($debt)
        .append($weapon);
      $container.append($character);
    });
  });

  $('#delete-one').on('click', (e) => {
    let id = $('#deleteOneRegister').val();
    charactersAPI.deleteOneRegister(id).then(character => {
      const $container = $('.characters-container');
      
    });
  });

  $('#edit-character-form').on('submit', (e) => {

  });

  $('#new-character-form').on('submit', (e) => {

  });
});
