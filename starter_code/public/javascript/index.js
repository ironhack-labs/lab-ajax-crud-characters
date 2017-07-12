const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

/* Pokemon data object */
$(document).ready(() => {

  class character {
    constructor(name, occupation, debt, weapon, id) {
      this.name = name;
      this.occupation = occupation;
      this.debt = debt;
      this.weapon = weapon;
      this.id = id;
    }
  }

  let char = new character();

  function renderCharacter(character) {

    const $box = $(".characters-container");
    const name = $(`<div><p>Character Name: ${character.name}</p></div>`).addClass('name');
    const occupation = $(`<div><p>Character Occupation: ${character.occupation}</p></div>`).addClass('occupation');
    const debt = $(`<div><p>Character Debt: ${character.debt}</p></div>`).addClass('debt');
    const weapon = $(`<div><p>Character Weapon: ${character.weapon}</p></div>`).addClass('weapon');
    const charDone = $('<div>').addClass('character-info').append(name).append(occupation).append(debt).append(weapon);
    $box.append(charDone);
  }

  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then(data => {
      if (Array.isArray(data)) {
        data.forEach(c => c ? renderCharacter(c) : console.log("Error on character"));
      } else {
        renderCharacter(c);
      }
    });
  });

  $('#fetch-one').on('click', (e) => {
    let id = $('#operationOne').val();
    charactersAPI.getOneRegister(id).then(data => {
      if (Array.isArray(data)) {
        data.forEach(c => c ? renderCharacter(c) : console.log("Error on character"));
      } else {
        renderCharacter(c);
      }
    });
  });

  $('#delete-one').on('click', (e) => {
    let id = $('#operationDel').val();
    charactersAPI.deleteOneRegister(id).then().catch(e => console.log(e));
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    const id = $('#chr-id').val();
    char.name = $('#editName').val();
    char.occupation = $('#editOccupation').val();
    char.weapon = $('#editWeapon').val();
    char.debt = $('#editDebt').val();
    charactersAPI.updateOneRegister(id, char);
  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    char.name = $('#name').val();
    char.occupation = $('#occupation').val();
    char.weapon = $('#weapon').val();
    char.debt = $('#debt').val();
    charactersAPI.createOneRegister(char);
  });


});
