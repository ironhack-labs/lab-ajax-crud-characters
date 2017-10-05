const charactersAPI = new APIHandler("https://ih-crud-api.herokuapp.com")

$(document).ready(() => {

  // ==============================================
  //    Fetching all the characters from the API
  // ==============================================
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then((characters) => {
      characters.forEach((char) => {
        $('#character-info-template').hide() // Hiding the template
        $('.characters-container').append(HTMLify(char)) // Appending the characters
      })
    })
  })

  // ===============================================
  //    Fetching a single characters from the API
  // ===============================================
  $('#fetch-one').on('click', (e) => {
    let id = $('#fetch-one-input').val()
    charactersAPI.getOneRegister(id).then((char) => {
      $('#character-info-template').hide()
      $('.characters-container').append(HTMLify(char))
    })
  })

  // ===============================================
  //    Deleting a single characters from the API
  // ===============================================
  $('#delete-one').on('click', (e) => {
    let id = $('#delete-one-input').val()
    charactersAPI.deleteOneRegister(id)
  })

  // ===============================================
  //    Updating a single characters from the API
  // ===============================================
  $('#edit-character-form').on('submit', (e) => {
    let id = $('#edit-character-form input[name=chr-id]').val()
    let name = $('#edit-character-form input[name=name]').val()
    let occupation = $('#edit-character-form input[name=occupation]').val()
    let weapon = $('#edit-character-form input[name=weapon]').val()
    let debt = $('#edit-character-form input[name=debt]').val()

    charactersAPI.updateOneRegister({id, name, occupation, weapon, debt})
  })

  // ===============================================
  //    Creating a single characters from the API
  // ===============================================
  $('#new-character-form').on('submit', (e) => {
    let name = $('#new-character-form input[name=name]').val()
    let occupation = $('#new-character-form input[name=occupation]').val()
    let weapon = $('#new-character-form input[name=weapon]').val()
    let debt = $('#new-character-form input[name=debt]').val()

    charactersAPI.createOneRegister({name, occupation, weapon, debt})
  })
})

function HTMLify(char) {
  let HTML = `<div class="character-info">
 <div class="name">Name: ${char.name}</div>
 <div class="occupation">Occupation: ${char.occupation}</div>
 <div class="debt">Debt: ${char.debt}</div>
 <div class="weapon">Weapon: ${char.weapon}</div>
</div>`
  return HTML
}