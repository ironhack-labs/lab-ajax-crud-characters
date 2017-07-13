const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

function showFeedback (postResponse) {
  console.log('post success');
  console.log(postResponse);
}

function resetButtonColor () {
  $('#delete-one').css("background-color", "transparent");
  $('#send-edit-data').css("background-color", "transparent");
  $('#send-new-data').css("background-color", "transparent");
}

function showAllCharacters (postResponse) {
  resetButtonColor ();
  $ ( ".characters-container" ).empty();
  postResponse.forEach(function(character){
    const showOneCharacter = `
      <div class="character-info">
        <div class="id">Id: <span> ${character.id}</span></div>
        <div class="name">Name: <span>${character.name}</span></div>
        <div class="occupation">Occupation: <span>${character.occupation}</span></div>
        <div class="debt">Debt: <span>${character.dept}</span></div>
        <div class="weapon">Weapon: <span>${character.weapon}</span></div>
      </div>
    `
    $(".characters-container").append(showOneCharacter);
  });
}

function showOneCharacter (postResponse) {
  resetButtonColor ();
  $ ( ".characters-container" ).empty();
  const showOneCharacter = `
    <div class="character-info">
      <div class="id">Id: <span> ${postResponse.id}</span></div>
      <div class="name">Name: <span>${postResponse.name}</span></div>
      <div class="occupation">Occupation: <span>${postResponse.occupation}</span></div>
      <div class="debt">Debt: <span>${postResponse.dept}</span></div>
      <div class="weapon">Weapon: <span>${postResponse.weapon}</span></div>
    </div>
  `
  $(".characters-container").append(showOneCharacter);
}

function handleError (err) {
  console.log('Oh no! Error:');
  console.log(err);
}

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    event.preventDefault();
    resetButtonColor ();

    $.ajax({
      method: 'GET',
      url: `https://ih-api.herokuapp.com/characters`,
      success: showAllCharacters,
      error: handleError
    });
  })

  $('#fetch-one').on('click', (e) => {
    event.preventDefault();
    resetButtonColor ();

    // The character ID that we will plug into the API's URL
    const charId = $('#character-id').val();

    $.ajax({
      method: 'GET',
      url: `https://ih-api.herokuapp.com/characters/${charId}`,
      success: showOneCharacter ,
      error: handleError
    });
  })

  $('#delete-one').on('click', (e) => {
    event.preventDefault();
    resetButtonColor ();

    // The character ID that we will plug into the API's URL
    const charId = $('#character-id-delete').val();

    $.ajax({
      method: 'DELETE',
      url: `https://ih-api.herokuapp.com/characters/${charId}`,
      success: () => {
        console.log('Delete SUCCESS!');
        $('#delete-one').css("background-color", "green");
      },
      error: () => {
        $('#delete-one').css("background-color", "red");
        handleError
      }
    });
  })

  $('#edit-character-form').on('submit', (e) => {
    event.preventDefault();
    resetButtonColor ();

    const updateInfo = {
      name: $('#edit-name').val(),
      occupation: $('#edit-occupation').val(),
      weapon: $('#edit-weapon').val()
      // debt: $('#edit-debt').val()
    };

    // The character ID that we will plug into the API's URL
    const charId = $('#edit-id').val();

    $.ajax({
        // Notice that we are using PATCH. You could also use PUT.
      method: 'PATCH',
      url: `https://ih-api.herokuapp.com/characters/${charId}`,
      data: updateInfo,
      success: () => {
        $('#send-edit-data').css("background-color", "green");
      },
      error: () => {
        $('#send-edit-data').css("background-color", "red");
        handleError
      }
    });
  })

  $('#new-character-form').on('submit', (e) => {
    event.preventDefault();
    resetButtonColor ();

    const characterInfo = {
      name: $('#new-name').val(),
      occupation: $('#new-occupation').val(),
      weapon: $('#new-weapon').val(),
      dept: $('#new-dept').val(),
    };

    $.ajax({
      method: 'POST',
      url: 'https://ih-api.herokuapp.com/characters',
      data: characterInfo,
      success: () => {
        showFeedback;
        $('#send-new-data').css("background-color", "green");
      },
      error: () => {
        $('#send-new-data').css("background-color", "red");
        handleError
      }
    });
  })
})
