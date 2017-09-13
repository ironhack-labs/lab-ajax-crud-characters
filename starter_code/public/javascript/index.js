const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready(() => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then(characters => console.log(characters))
  })

  $('#fetch-one').on('click', (e) => {
    const characterId = $("input[name='character-id']").val()
    charactersAPI.getOneRegister(characterId).then(character => console.log(character))
  })

  $('#delete-one').on('click', (e) => {
    const characterId = $("input[name='character-id-delete']").val()

    charactersAPI.deleteOneRegister(characterId, function() {
      $("#character-id-delete").empty(`${characterId}`)
    })


    console.log(characterId)


    // function handleDeleteCharacter() {
    //   const characterId = $(this).data('id');
    //
    //   deleteCharacterById(characterId, function (error, success) {
    //     $(`[data-character-id="${characterId}"]`).remove();
    //   })
    //   delete charactersDict[characterId];
    // }

  })

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault()

    $("#characters-container").children("div").empty()

    const $parent = $("#edit-character-form").children("div")

    let character = {
      id: $("#edit-character-form input[name='chr-id']").val(),
      name: $parent.children("input[name='name']").val(),
      occupation: $parent.children("input[name='occupation']").val(),
      weapon: $parent.children("input[name='weapon']").val(),
      debt: $parent.children("input[name='debt']").is(':checked')
    }

    charactersAPI.updateOneRegister(character)
  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();

    const $parent = $("#new-character-form").children("div")

    let character = {
      name: $parent.children("input[name='name']").val(),
      occupation: $parent.children("input[name='occupation']").val(),
      weapon: $parent.children("input[name='weapon']").val(),
      debt: $parent.children("input[name='debt']").is(':checked')
    }
    charactersAPI.createOneRegister(character).then(character => console.log(character))
  })
})
