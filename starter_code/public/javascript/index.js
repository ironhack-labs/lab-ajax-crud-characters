const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")



$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then((e) => {
      var characters = []
      console.log(e)
        e.map((element, index) => {
          var domElements = [
            $('div.name').clone().append(' ' + element.name),
            $('div.occupation').clone().append(' ' + element.occupation),
            $('div.debt').clone().append(' ' + element.debt),
            $('div.weapon').clone().append(' ' + element.weapon)
          ]
          characters.push($('.character-info').clone().addClass('sample').html(domElements))
        })
        $('.characters-container').append(characters)
        $('.character-info').first().hide()
    })
  })

  $('#fetch-one').on('click', (e) => {
    charactersAPI.getOneRegister($('input[name=character-id]').val()).then((element) => {
      var domElements = [
        $('div.name').clone().append(' ' + element.name),
        $('div.occupation').clone().append(' ' + element.occupation),
        $('div.debt').clone().append(' ' + element.debt),
        $('div.weapon').clone().append(' ' + element.weapon)
      ]
      $('.characters-container').append($('.character-info').clone().addClass('sample').html(domElements))

      $('.character-info').first().remove()
    })
  })

  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister($('input[name=character-id-delete]').val()).then(e => {
      var domElements = [
        $('div.name').clone().append(' ' + element.name),
        $('div.occupation').clone().append(' ' + element.occupation),
        $('div.debt').clone().append(' ' + element.debt),
        $('div.weapon').clone().append(' ' + element.weapon)
      ]
      $('.characters-container').append($('.character-info').clone().html(domElements))

      $('.character-info').first().remove()
    })
  })

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault()
    var formData = $("#new-character-form").serialize()
    charactersAPI.updateOneRegister($('input[name=chr-id]').val(), formData).then(e => console.log(e))
  })

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault()
    console.log(e)
    var formData = $("#new-character-form").serialize()
    charactersAPI.createOneRegister(formData).then(e => console.log(e))
  })
})
