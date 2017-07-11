/*jshint esversion: 6 */

const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready(() => {
const $charContain = $(".characters-container");
  const addChar = (char) => {
    const name = $(`<div><p>Character Name: ${char.name}</p></div>`).addClass('name');
    const occupation = $(`<div><p>Character Occupation: ${char.occupation}</p></div>`).addClass('occupation');
    const debt = $(`<div><p>Character Debt: ${char.debt}</p></div>`).addClass('debt');
    const weapon = $(`<div><p>Character Weapon: ${char.weapon}</p></div>`).addClass('weapon');
    const charDone = $('<div>').addClass('character-info').append(name).append(occupation).append(debt).append(weapon);
    $charContain.append(charDone);
  };

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
     $charContain.empty();
     charactersAPI.getFullList().then(heroes => {
       console.log(heroes);
       heroes.forEach(char => char ? addChar(char): console.log("Error"));
    });
  });

  $('#fetch-one').on('click', (e) => {
    const charId = $('#character-id').val();
    charactersAPI.getOneRegister(charId).then(heroe => {
      console.log(heroe);
      $('.name').text(heroe.name);
      $('.occupation').text(heroe.occupation);
      $('.weapon').text(heroe.weapon);
    });
  });

  $('#delete-one').on('click', (e) => {

  });

  $('#edit-character-form').on('submit', (e) => {

  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
      let name = $('#name').val();
      let occupation = $('#occupation').val();
      let  weapon  = $('#weapon').val();
      let debt =  $('#debt').val();

      const heroe = {
        name: $('#name').val(),
        occupation: $('#occupation').val(),
        weapon: $('#weapon').val(),
        debt: $('#debt').val()
    };
    charactersAPI.createOneRegister(heroe).then(result =>
      console.log(result));
  });
});
});
