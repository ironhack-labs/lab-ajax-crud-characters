const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    console.log("fetch-all");
    charactersAPI.getFullList()
    .then(characters => {
      $('.characters-container').html('')
      for (let i = 0; i < characters.length; i++) {
        $('.characters-container').append(`
          <div class="character-info">
            <div class="name">Character Name: ${characters[i].name}</div>
            <div class="occupation">Character Occupation: ${characters[i].occupation}</div>
            <div class="cartoon">Is a Cartoon?: ${characters[i].cartoon}</div>
            <div class="weapon">Character Weapon: ${characters[i].weapon}</div>
          </div>
        `)
      }
    })
  }
  
  document.getElementById('fetch-one').onclick = function(){
    console.log("fetch-one");
    let characterId = $('input[name="character-id"]').val();
    charactersAPI.getOneRegister(characterId)
    .then(characters => {
    $('.characters-container').html('')
      $('.characters-container').append(`
        <div class="character-info">
          <div class="name">Character Name: ${characters.name}</div>
          <div class="occupation">Character Occupation: ${characters.occupation}</div>
          <div class="cartoon">Is a Cartoon?: ${characters.cartoon}</div>
          <div class="weapon">Character Weapon: ${characters.weapon}</div>
        </div>
      `)
    })
  }
  
  document.getElementById('delete-one').onclick = function(){
    console.log("delete-one");
    let characterId = $('input[name="character-id-delete"]').val();
    charactersAPI.deleteOneRegister(characterId)
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();
    console.log("edit-character-form");
    let characterId = $('input[name="chr-id"]').val();
    const characterInfo = {
      name:       $(this).find('input[name="name"]').val(),
      occupation: $(this).find('input[name="occupation"]').val(),
      weapon:     $(this).find('input[name="weapon"]').val(),
      cartoon:    $(this).find('input[name="cartoon"]').val()
    }
    charactersAPI.updateOneRegister(characterId, characterInfo)
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();
    console.log('new-character-form');
    const characterInfo = {
      name:       $(this).find('input[name="name"]').val(),
      occupation: $(this).find('input[name="occupation"]').val(),
      weapon:     $(this).find('input[name="weapon"]').val(),
      cartoon:    $(this).find('input[name="cartoon"]').val()
    }
    charactersAPI.createOneRegister(characterInfo);
    console.log(characterInfo);
  }
})
