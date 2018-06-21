const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
    .then(characters => {
      $('.characters-container').html('')
      for (let i=0; i <characters.length; i++) {
        $('.characters-container').append(`
        <div class="character-info">
          <div class="name">${characters[i].name}</div>
          <div class="occupation">${characters[i].occupation}</div>
          <div class="weapon">${characters[i].weapon}</div>
        </div>
        `)
      }
    })
  }
  
  document.getElementById('fetch-one').onclick = function(){
    var id = $("#char_id").val()
    charactersAPI.getOneRegister (id)
    .then(character => {
      $('.characters-container').html('')
      $('.characters-container').append(`
        <div class="character-info">
          <div class="name">${character.name}</div>
          <div class="occupation">${character.occupation}</div>
          <div class="weapon">${character.weapon}</div>
        </div>
      `)
    })
  }
  
  document.getElementById('delete-one').onclick = function(){
    var id = $("#del_id").val()
    charactersAPI.deleteOneRegister (id)
    .then(character => {
      $('.characters-container').html('Character Deleted')
    })
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault()
    var id = $('#edit_id').val()
    const characterInfo = {
      'name':       $('#edit_name').val(),
      'occupation': $('#edit_occupation').val(),
      'weapon':     $('#edit_weapon').val()
    };          
    charactersAPI.updateOneRegister(characterInfo,id)
    .then(character => {
      console.log ("created!")
    })
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault()
    const characterInfo = {
      'name':       $('#new_name').val(),
      'occupation': $('#new_occupation').val(),
      'weapon':     $('#new_weapon').val()
    };          
    charactersAPI.createOneRegister(characterInfo)
    .then(character => {
      console.log ("created!")
    })
  }
})
