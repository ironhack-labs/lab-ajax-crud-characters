const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then(function(characters) {
      $('.characters-container').html('');
      characters.forEach((character) => {
        var html = `<div class="character-info">
          <div class="name">Character Name: ${character.name}</div>
          <div class="occupation">Character Occupation: ${character.occupation}</div>
          <div class="debt">Character Debt: ${character.debt}</div>
          <div class="weapon">Character Weapon: ${character.weapon}</div>
        </div>`;
        $('.characters-container').append(html);
      });
    });
  });

  $('#fetch-one').on('click', (e) => {
    var id = $('#character-id').val();
    charactersAPI.getOneRegister(id).then(function(character) {
      var html = `<div class="character-info">
        <div class="name">Character Name: ${character.name}</div>
        <div class="occupation">Character Occupation: ${character.occupation}</div>
        <div class="debt">Character Debt: ${character.debt}</div>
        <div class="weapon">Character Weapon: ${character.weapon}</div>
      </div>`;
      $('.characters-container').html(html);
    });
  });

  $('#delete-one').on('click', (e) => {
    var id = $('#character-id-delete').val();
    charactersAPI.deleteOneRegister(id)
    .done(function(character) {
       $('#delete-one').css('background', 'green');
    })
    .fail(function(err) {
      alert();
       $('#delete-one').css('background', 'red');
    });
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    const character = $('#edit-character-form').serialize();
    const id = $('#chr-id').val();
    charactersAPI.updateOneRegister(id, character);
  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    const character = $('#new-character-form').serialize();
    charactersAPI.createOneRegister(character);
  });
});
