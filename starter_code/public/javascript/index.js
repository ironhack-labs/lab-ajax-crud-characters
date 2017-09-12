const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready(() => {
  const $characterContainer = $('.characters-container')

  const addChar = (char) => {
    const name = $(`<div><p>Character Name: ${char.name}</p></div>`).addClass('name')
    const occupation = $(`<div><p>Character Occupation: ${char.occupation}</p></div>`).addClass('occupation')
    const debt = $(`<div><p>Character Debt: ${char.debt}</p></div>`).addClass('debt')
    const weapon = $(`<div><p>Character Weapon: ${char.weapon}</p></div>`).addClass('weapon')
    const charDone = $('<div>').addClass('character-info').append(name).append(occupation).append(debt).append(weapon)
    $characterContainer.append(charDone)
  }


  $('#fetch-all').on('click', (e) => {
    $characterContainer.empty()

    charactersAPI.getFullList().then(charactersList => {
      charactersList.forEach(char => char ? addChar(char) : console.log("Error"))
    })
  })

  $('#fetch-one').on('click', (e) => {
    $characterContainer.empty()

    const characterId = $('#character-id').val()
    charactersAPI.getOneRegister(characterId).then(character => {
      addChar(character)
    })
  })

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    $characterContainer.empty();

    const character = {
      name: $('#name').val(),
      occupation: $('#occupation').val(),
      weapon: $('#weapon').val(),
      debt: $('#debt').val()
    };
    charactersAPI.createOneRegister(character)
      .then(result => console.log(result));
  });

  $('#delete-one').on('click', (e) => {
    $characterContainer.empty()

    const characterId = $('#character-id-delete').val()
    charactersAPI.deleteOneRegister(characterId)
      .then(result => console.log(result))
  })

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    $characterContainer.empty();

    const character = {
      name: $('#name-edit').val(),
      occupation: $('#occupation-edit').val(),
      weapon: $('#weapon-edit').val(),
      debt: $('#debt-edit').val()
    };
    const characterId = $('#id-edit').val()
    console.log(character)
    console.log(characterId);
    charactersAPI.updateOneRegister(characterId,character)
      .then(result => console.log(result));
  });

})
