const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function() {
    charactersAPI.getFullList()
      .then(res => draw(res))
      .catch()
  }

  document.getElementById('fetch-one').onclick = function() {
    charactersAPI.getOneRegister($("input[name='character-id']").val())
      .then(res => draw([res]))
      .catch()
  }

  document.getElementById('delete-one').onclick = function(){
    charactersAPI.deleteOneRegister($("input[name='character-id-delete']").val())
      .then(() => $('#delete-one').css("background-color", "green"))
      .catch(() => $('#delete-one').css("background-color", "red"))
  }

  document.getElementById('edit-character-form').onsubmit = function(){
    let character = {
      name: $('#edit-name').val(),
      occupation: $('#edit-occupation').val(),
      debt: $('#edit-cartoon').is(":checked"),
      weapon: $('#edit-weapon').val()
    }

    charactersAPI.updateOneRegister($('#edit-id').val(), character)
      .then(res => $('#send-data-edit').css("background-color", "green"))
      .catch(() => $('#send-data-edit').css("background-color", "red"))
  }

  document.getElementById('new-character-form').onsubmit = function(){
    let character = {
      name: $('#new-name').val(),
      occupation: $('#new-occupation').val(),
      debt: $('#new-cartoon').is(":checked"),
      weapon: $('#new-weapon').val()
    }

    charactersAPI.createOneRegister(character)
      .then(() => $('#send-data-new').css("background-color", "green"))
      .catch(() => $('#send-data-new').css("background-color", "red"))
  }
})


function draw(res) {
  $('.characters-container').empty()
  res.forEach(e => {
    let div = $('<div>', {class: 'character-info'})
    div.append($('<div>', {class: 'name', html: `Character Name: ${e.name}`}))
    div.append($('<div>', {class: 'occupation', html: `Character Occupation: ${e.occupation}`}))
    div.append($('<div>', {class: 'cartoon', html: `Is a Cartoon? ${e.debt}`}))
    div.append($('<div>', {class: 'weapon', html: `Character Weapon: ${e.weapon}`}))

    $('.characters-container').append(div)
  })
}
