const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready(() => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then(characterList => {
      console.log(characterList);
      characterList.forEach(character => {
        const $container = $('.characters-container');
        const $character = $('<div>').addClass('character-info');
        const $Id = $('<div>').text(character.id);
        const $name = $('<div>').addClass('name').text(character.name);
        const $occupation = $('<div>').addClass('occupation').text(character.occupation);
        const $debt = $('<div>').addClass('debt').text(character.debt);
        const $weapon = $('<div>').addClass('weapon').text(character.weapon);
        $character.append($Id).append($name).append($occupation).append($debt).append($weapon);
        $container.append($character);
      });
    }, (err) => {
      console.log(err);
    });

  });

  $('#fetch-one').on('click', (e) => {
    const id = $("#characterID").val();
    charactersAPI.getOneRegister(id).then(characterList => {
      console.log(characterList);
      $('.name').text('Name: '+characterList.name);
      $('.occupation').text('Occupation: '+characterList.occupation);
      $('.debt').text('Debt: '+characterList.debt);
      $('.weapon').text('Weapon: '+characterList.weapon);
    });
  });

  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister($('#character-id-delete').val()).then( character => {
      console.log(`Deleted ${$('#character-id-delete').val()}`);

  });

  });

  $('#edit-character-form').on('submit', (e) => {

    e.preventDefault();
    let idCharacter = $('#update-chr-id').val();
    let name = $('#update-name').val();
    let occupation = $('#update-occupation').val();
    let debt = $('#new-checkbox').val() === "on" ? true : false;
    let weapon = $('#update-weapon').val();
    const updatedCharacter = {
      name: name,
      occupation: occupation,
      debt: debt,
      weapon: weapon
    };
    console.log(idCharacter);
    charactersAPI.updateOneRegister(idCharacter, updatedCharacter);

    });


  $('#new-character-form').on('submit', (e) => {
      e.preventDefault();
      $container.empty();
      let name = $('#create-name').val();
      let occupation = $('#create-occupation').val();
      let debt = $('#create-debt').val() === "on" ? true : false;
      let weapon = $('#create-weapon').val();
      const newCharacter = {
        name: name,
        occupation: occupation,
        debt: debt,
        weapon: weapon
      };
      charactersAPI.createOneRegister(newCharacter);
    });
  });
