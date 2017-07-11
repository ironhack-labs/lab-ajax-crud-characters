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
    const charIdDelete = $('#character-id-delete').val();
    charactersAPI.deleteOneRegister(charIdDelete).then(deleteHeroe =>
      console.log('Se elimino'));
  });

  $('#edit-character-form').on('submit', (e) => {

  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    $charContain.empty();
      let name = $('#create-name').val();
      let occupation = $('#create-occupation').val();
      let  weapon  = $('#create-weapon').val();
      let debt =  $('#create-debt').val();

      const newHeroe = {
        name: name,
        occupation: occupation,
        weapon: weapon,
        debt: debt
    };
    charactersAPI.createOneRegister(newHeroe).then(result =>
      console.log(result));
  });
});
});
