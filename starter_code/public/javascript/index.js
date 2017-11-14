const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com")

$(document).ready( () => {

  function getCharacters() {
    $.ajax({
      url: "http://ih-crud-api.herokuapp.com/characters",
      method: "GET",
      success: showFeedback,
      error:   handleError
    })
  }

  function getCharacterById(id) {
  $.ajax({
    url: "http://ih-crud-api.herokuapp.com/characters/" + id,
    method: "GET",
    success: showFeedback,
    error:   handleError
  })
}


  $('#fetch-all').on('click', (e) => {
    getCharacters();
  })

  $('#fetch-one').on('click', (e) => {
    let findById = $('#character-id').val();
    getCharacterById(findById)
  })

  $('#delete-one').on('click', (e) => {

  })

  $('#edit-character-form').on('submit', (e) => {
    const characterInfo = {
        name:       $('#character-edit-name').val('#the-name-input'),
        occupation:  $('#character-edit-occupation').val('#the-occupation-input'),
        weapon:      $('#character-edit-weapon').val('#the-weapon-input'),
        debt:        $('#character-edit-debt').val()
      };

      const charId = $('#character-id-edit').val();

    $.ajax({
        // Notice that we are using PATCH. You could also use PUT.
      method: 'PATCH',
      url: `http://ih-crud-api.herokuapp.com/characters/${charId}`,
      data: updateInfo,
      success: (patchResponse) => {
        console.log('Update SUCCESS!');
        console.log(patchResponse);
      },
      error: handleError
    });
  })


  $('#new-character-form').on('submit', (e) => {
    event.preventDefault();
     console.log('form submit');
    const characterInfo = {
        name:       $('#the-name-input').val(),
        occupation:  $('#the-occupation-input').val(),
        weapon:      $('#the-weapon-input').val(),
        debth:        $('#the-debt-input').val()
      };


      $.ajax({
        method:  'POST',
        url:     'http://ih-crud-api.herokuapp.com/characters',
        data:    characterInfo,
        success: showFeedback,
        error:   handleError
      });
  })

  function showFeedback (postResponse) {
  console.log('post success');
  console.log(postResponse);
  // const newCharacterHtml = `
  //   <li>
  //     <h3> ${postResponse.name} </h3>
  //     <p> Id: ${postResponse.id} </p>
  //   </li>
  // `;
  //
  // $('#characters-list').append(newCharacterHtml);
}

function handleError (err) {
  console.log('Oh no! Error:');
  console.log(err);
}
})
