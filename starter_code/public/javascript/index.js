const charactersAPI = new APIHandler('http://ih-api.herokuapp.com')

function getInfoFromForm (form) {
  var returnObject = {}
  form.serializeArray().forEach(function (input) {
    returnObject[input.name] = input.value
  })
  returnObject['debt'] = !!returnObject['debt'] // Converts any "true" value to true
  return returnObject
}

function listCharacters (characters) {
  clearList()
  charactersAPI.getFullList((response) => {
    response.forEach(function (element) {
      createCharacterBox(element)
    })
  })
}

function createCharacterBox (character) {
  $('.characters-container').append(`
    <div class="character-info">
      <div class="id">Id: ${character.id}</div>  
      <div class="name">Name: ${character.name}</div>
      <div class="occupation">Occupation: ${character.occupation}</div>
      <div class="debt">Debt: ${character.debt}</div>
      <div class="weapon">Weapon: ${character.weapon}</div>
    </div>
  `)
}

function clearList () {
  // Empty the cards with characters from the DOM
  $('.characters-container').empty()

  // Clear the data from the forms
  $('#fetch-id').val('')
  $('#delete-id').val('')
  $('input:text', 'form div').val('')
  $('input:checkbox', 'form div').removeAttr('checked').removeAttr('selected').val('')

  // Remove the success and error classes from all elements
  $('.success').removeClass('success')
  $('.error').removeClass('error')
}

$(document).ready(() => {
  $('#fetch-all').on('click', (e) => {
    listCharacters()
  })

  $('#fetch-one').on('click', (e) => {
    var idFetch = $('#fetch-id').val()
    charactersAPI.getOneRegister(idFetch, (response) => {
      clearList()
      createCharacterBox(response)
    })
  })

  $('#delete-one').on('click', (e) => {
    var idDelete = $('#delete-id').val()
    charactersAPI.deleteOneRegister(idDelete, (response) => {
      listCharacters()
      $('#delete-one').addClass('success')
    }, () => {
      clearList()
      $('#delete-one').addClass('error')
    })
  })

  $('#edit-character-submit').on('click', (e) => {
    e.preventDefault()
    var editInfo = getInfoFromForm($('#edit-character-form'))
    var idEdit = editInfo.id
    charactersAPI.updateOneRegister(idEdit, editInfo, (response) => {
      listCharacters()
      $('#edit-character-submit').addClass('success')
    }, () => {
      clearList()
      $('#edit-character-submit').addClass('error')
    })
  })

  $('#new-character-submit').on('click', (e) => {
    e.preventDefault()
    var createInfo = getInfoFromForm($('#new-character-form'))
    charactersAPI.createOneRegister(createInfo, (response) => {
      listCharacters()
      $('#new-character-submit').addClass('success')
    }, () => {
      clearList()
      $('#new-character-submit').addClass('error')
    })
  })
})
