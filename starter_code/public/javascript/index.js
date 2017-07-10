const charactersAPI = new APIHandler("http://ih-api.herokuapp.com/characters");

function getAllCharacters(data) {
  console.log(data);
  data.forEach((el, i) => {
   $('.char').append(`<li>
     <div class="characters-container">
       <div class="character-info">
         <div class="name">Character Name: ${data[i].name}</div>
         <div class="occupation">Character Occupation: ${data[i].occupation}</div>
         <div class="debt">Character Debt: ${data[i].debt}</div>
         <div class="weapon">Character Weapon: ${data[i].weapon}</div>
       </div>
     </li>`);
});
}
function getOneCharacter(data) {
  $('.name').append(` ${data.name}`);
  $('.occupation').append(` ${data.occupation}`);
    $('.debt').append(` ${data.debt}`);
      $('.weapon').append(` ${data.weapon}`);
}

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    e.preventDefault();
  charactersAPI.getFullList();

  });

  $('#fetch-one').on('click', (e) => {
    e.preventDefault();
  charactersAPI.getOneRegister($('#character-id').val());
  });

  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister($('#character-id-delete').val());
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    const characterInfo = {
      name: $('#updatedName').val(),
      occupation: $('#updatedOccupation').val(),
      debt: $('#updatedDebt').val(),
      weapon: $('#updatedWeapon').val()
    };
    const charId = $('#chr-id').val();
    console.log(characterInfo);
    charactersAPI.updateOneRegister(characterInfo, charId);
  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    console.log("FORM SUBMITTED");
      const characterInfo = {
        name: $('#newName').val(),
        occupation: $('#newOccupation').val(),
        debt: $('#newDebt').val(),
        weapon: $('#newWeapon').val()
      };
      console.log(characterInfo);
      charactersAPI.createOneRegister(characterInfo);
  });
});
