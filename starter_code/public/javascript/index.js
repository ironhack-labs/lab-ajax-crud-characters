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
    charactersAPI.getFullList ();
  })

  $('#fetch-one').on('click', (e) => {
    event.preventDefault();
    resetButtonColor ();
    charactersAPI.getOneRegister ();
  })

  $('#delete-one').on('click', (e) => {
    event.preventDefault();
    resetButtonColor ();
    charactersAPI.deleteOneRegister ();
  })

  $('#edit-character-form').on('submit', (e) => {
    event.preventDefault();
    resetButtonColor ();
    charactersAPI.updateOneRegister ();
  })

  $('#new-character-form').on('submit', (e) => {
    event.preventDefault();
    resetButtonColor ();
    charactersAPI.createOneRegister ()
  })
})
