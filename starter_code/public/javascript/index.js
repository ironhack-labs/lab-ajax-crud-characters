const charactersAPI = new APIHandler("https://ih-crud-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList()
    .then((characters) => { characters.forEach(appendCharacter);
    });
  });

  function appendCharacter(character) {
    const characterHTML = `
    <div class="character-info">
    <div class="name">name: ${character.name}</div>
    <div class="occupation">occupation: ${character.occupation}</div>
    <div class="debt">debt: ${character.debt}</div>
    <div class="weapon">weapon: ${character.weapon}</div>
    </div>
    `;

    $('.characters-container').append(characterHTML);
  }

  $('#fetch-one').on('click', (e) => {
    id = $('input[name=character-id]').val();
    charactersAPI.getOneRegister(id)
    .then(appendCharacter);
  });

  $('#delete-one').on('click', (e) => {
    id = $('input[name=character-id-delete]').val();
    $('#delete-one').css("background-color", "green");
    charactersAPI.deleteOneRegister(id)
    .catch(e => {
      $('#delete-one').css("background-color", "red");
    });
  });

  $('#edit-character-form').on('submit', (e) => {
    event.preventDefault();
    const editorBtn = $("#edit-character-form .submit-button");
    const id = $('#edit-character-form input[name=chr-id]').val();
    const name = $('#edit-character-form input[name=name]').val();
    const occupation = $('#edit-character-form input[name=occupation]').val();
    const weapon = $('#edit-character-form input[name=weapon]').val();

    if ($('#edit-character-form input[name=debt]').val() === true) {
      let debt = true;
    } else debt = false;

    console.log(id, name, occupation, debt, weapon); // logs debt accurately (false or true), but...
    editorBtn.css("background-color", "green");
    charactersAPI.updateOneRegister(name, occupation, debt, weapon, id) // updateOneRegister doesn't...hmmm... register the debt, always passes true, even if it's logged as false 2 lines above. Not sure why?
    .catch(e => {
      editorBtn.css("background-color", "red");
    });
  });

  $('#new-character-form').on('submit', (e) => {
    event.preventDefault();
    const creatorBtn = $("#new-character-form .submit-button");
    const name = $('input[name=name]').val();
    const occupation = $('input[name=occupation]').val();
    const weapon = $('input[name=weapon]').val();
    let debt = "";
    if ( $('input[name=debt]').is(":checked") === true ) {
      debt = true;
    } else debt = false;
    creatorBtn.css("background-color", "green");
    charactersAPI.createOneRegister(name, occupation, debt, weapon)
    .catch(e => {
      creatorBtn.css("background-color", "red");
    });
  });

});
