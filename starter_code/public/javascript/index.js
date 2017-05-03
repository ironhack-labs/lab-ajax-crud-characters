const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList(response=>{
      clearCharacters();
      response.forEach(character=>appendCharacter(character))
    })
    
  })

  $('#fetch-one').on('click', (e) => {
    charactersAPI.getOneRegister($("input[name='character-id']").val(), response=>{
      if(response.error) {
        $("#fetch-one").css("background-color","red");
      } else {
        $("#fetch-one").css("background","none");
        clearCharacters();
        appendCharacter(response);
      }
    });
  })

  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister($("input[name='character-id-delete']").val(), response=>{
      if(response.error) {
        $("#delete-one").css("background-color","red");
      } else {
        $("#delete-one").css("background-color","green");
      }
     });
  })

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();

    const id = $("#edit-character-form input[name='chr-id']").val()
    const updateCharacter = {
      name: $("#edit-character-form input[name='name']").val(),
      occupation: $("#edit-character-form input[name='occupation']").val(),
      weapon: $("#edit-character-form input[name='weapon']").val(),
      debt: $("#edit-character-form input[name='debt']").prop("checked")
    }

    charactersAPI.updateOneRegister(id, updateCharacter, response=>{
      if(response.error) {
        $("#edit-character-form button").css("background-color","red");
      } else {
        $("#edit-character-form button").css("background-color","green");
        clearCharacters();
        appendCharacter(response);
      }
    });
  })

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    const newCharacter = {
      name: $("#new-character-form input[name='name']").val(),
      occupation: $("#new-character-form input[name='occupation']").val(),
      weapon: $("#new-character-form input[name='weapon']").val(),
      debt: $("#new-character-form input[name='debt']").prop("checked")
    }
    charactersAPI.createOneRegister(newCharacter, response=>{
      if(response.error) {
        $("#new-character-form button").css("background-color","red");
      } else {
        $("#new-character-form button").css("background-color","green");
        clearCharacters();
        appendCharacter(response);
      }
    });
  })


  function appendCharacter(character) {
    $(".characters-container").append(`
      <div class="character-info">
        <div class="name">${character.name}</div>
        <div class="occupation">${character.occupation}</div>
        <div class="debt">${character.debt}</div>
        <div class="weapon">${character.weapon}</div>
      </div> 
    `)
  }

  function clearCharacters() {
    $(".characters-container").html("");
  }

})
