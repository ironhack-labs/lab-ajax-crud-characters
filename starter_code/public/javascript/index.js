const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready(() => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then(characters => {
      characters.forEach(character => {
        const $container = $('.characters-container');
        const $character = $('<div>').addClass('character-info');
        const $name = $('<div>').addClass('name').text(character.name);
        const $occupation = $('<div>').addClass('occupation').text(character.occupation);
          const $weapon = $('<div>').addClass('weapon').text(character.weapon);
        const $hasdeb = $('<div>').addClass('debt').text(character.hasdeb);
        $character.append($name).append($occupation).append($weapon).append($hasdeb);
        $container.append($character);

      });
    });
  });

  $('#fetch-one').on('click', (e) => {
    let id = $("#get-character-id").val();
    charactersAPI.getOneRegister(id).then(character => (console.log(character)));

  });

  $('#delete-one').on('click', (e) => {
    let id = $("#delete-character-id").val();
    charactersAPI.deleteOneRegister(id).then(character => (console.log(character)));
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    let id = $("#edit-character-id").val();
    let name = $("#edit-name").val();
    let occupation = $("#edit-occupation").val();
    let weapon = $("#edit-weapon").val();
    let hasdeb = $("#edit-hasdeb").val();


    charactersAPI.updateOneRegister(id, name, occupation, weapon, hasdeb);
    // .then(character => (console.log(character)));
  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    let name = $("#create-name").val();
    let occupation = $("#create-occupation").val();
    let weapon = $("#create-weapon").val();
    let hasdeb = $("#create-hasdeb").val();
    console.log(hasdeb);
    charactersAPI.createOneRegister(name, occupation, weapon, hasdeb).then(character => (console.log(character)));
  });
});
