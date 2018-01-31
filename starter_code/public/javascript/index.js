var charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

  function handleError (err) {
    console.log('Oh noooo! Error:');
    console.log(err);
  }

  function createCharacter(character){
    $('.character-form').on('submit', (event) => {
      event.preventDefault();
    
      const characterInfo = {
        name: $('#name').val(),
        occupation: $('#occupation').val(),
        weapon: $('#weapon').val(),
        debt: $('#debt').val()
      };
    
      $.ajax({
        method: 'POST',
        url: 'https://ih-crud-api.herokuapp.com/characters',
        data: characterInfo,
        success: showFeedback,
        error: handleError
      })
    });
  }
  
  function updateCharacter(character){
    $('#edit-character-form').on('submit', (event) => {
      event.preventDefault();
    
      const updateInfo = {
        id: $('#id').val(),
        name: $('#name').val(),
        occupation: $('#occupation').val(),
        weapon: $('#weapon').val(),
        debt: $('#debt').val()
      };
      const charId = $('#id').val();
    
      $.ajax({
        method: 'PATCH',
        url: `https://ih-crud-api.herokuapp.com/characters/${charId}`,
        data: updateInfo,
        success: (patchResponse) => {
          console.log('Oh lalaaaa SUCCESS!');
          console.log(patchResponse);
        },
        error: handleError
      });
    });
  }
  
  function deleteCharacter(id){
    $('#edit-character-form').on('submit', (event) => {
      event.preventDefault();
    });
  }



