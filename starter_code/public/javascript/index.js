const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then( heroes => {
      console.log(heroes);
      heroes.forEach( heroe => {
        const $container = $('.characters-container');
        const $heroe = $('<div>').addClass('character-info');
        const $name = $('<div>').addClass('name').text(heroe.name);
        const $occupation = $('<div>').addClass('occupation').text(heroe.occupation);
        const $debt = $('<div>').addClass('debt').text(heroe.debt);
        const $weapon = $('<div>').addClass('weapon').text(heroe.weapon);
        $heroe.append($name).append($occupation).append($debt).append($weapon);
        $container.append($heroe);
      });
        }, (err) => {
          console.log(err);
        });
      });

  $('#fetch-one').on('click', (e) => {
    charactersAPI.getOneRegister($('#character-id').val()).then( hero => {
      $(".name").text(hero.name);
      $(".occupation").text(hero.occupation);
      $(".debt").text(hero.debt);
      $(".weapon").text(hero.weapon);
    });
  });

  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister($('#character-id-delete').val()).then( hero => {
      console.log(`Deleted ${$('#character-id-delete').val()}`);
    });
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    let id = $('#update-chr-id').val();
    let name = $('#update-name').val();
    let occupation = $('#update-occupation').val();
    let weapon = $('#update-weapon').val();
    let debt = $('#update-checkbox').val() === "on" ? true : false;
    const updatedCharacter = {
      id: id,
      name: name,
      occupation: occupation,
      weapon: weapon,
      debt: debt
    };
    charactersAPI.updateOneRegister(id,updatedCharacter);
  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    let name = $('#create-name').val();
    let occupation = $('#create-occupation').val();
    let weapon = $('#create-weapon').val();
    let debt = $('#create-debt').val() === "on" ? true : false;
    const newCharacter = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      debt: debt
    };
    charactersAPI.createOneRegister(newCharacter);
  });
});
