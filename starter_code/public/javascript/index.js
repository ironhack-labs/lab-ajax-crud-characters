const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready(() => {
  const $container = $(".characters-container");
  const addCharacter = (e) => {
    const $name = $(`<div><p>Name: ${e.name}</p></div>`).addClass('name');
    const $occupation = $(`<div><p>Occupation: ${e.occupation}</p></div>`).addClass('occupation');
    const $debt = $(`<div><p>Debt: ${e.debt}</p></div>`).addClass('debt');
    const $weapon = $(`<div><p>Weapon: ${e.weapon}</p></div>`).addClass('weapon');
    const completedCharacter = $('<div>').addClass('character-info').append($name).append($occupation).append($debt).append($weapon);
    $container.append(completedCharacter);
  };

  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then(characterList => {
      console.log(characterList);
      characterList.forEach(e => e ? addCharacter(e) : console.log("Error"));

    });
  });

  $('#fetch-one').on('click', (e) => {
    charactersAPI.getOneRegister($('#character-id').val()).then(character => {
      $('.name').text(character.name);
      $('.occupation').text(character.occupation);
      $('.debt').text(character.debt);
      $('.weapon').text(character.weapon);
    });
  });

  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister($('#character-id-delete').val());
    console.log("Character has been successfully deleted");
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    let idCharacter = $('#update-chr-id').val();
    let name = $('#update-name').val();
    let occupation = $('#update-occupation').val();
    let debt = $('#update-debt').val() === "on" ? true : false;
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
