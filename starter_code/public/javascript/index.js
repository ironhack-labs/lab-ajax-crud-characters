const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  function reset() {
    $('.characters-container').html('');
    $('button').css('background', 'none');
  }

  document.getElementById('fetch-all').onclick = function(){
    reset();
    charactersAPI.getFullList( '/characters' )
    .then( characters => {
      for (let i = 0; i < characters.length; i++) {
        $('.characters-container').append(
          `
          <div class="character-info">
          <h4>Character Info</h4>
          <div class="container">
          <div class="character-id"><strong>ID:</strong> ${characters[i].id}</div>
          <div class="name"><strong>Name:</strong> ${characters[i].name}</div>
          <div class="occupation"><strong>Occupation:</strong> ${characters[i].occupation}</div>
          <div class="cartoon"><strong>Cartoon:</strong> ${characters[i].cartoon ? "yes" : "no"}</div>
          <div class="weapon"><strong>Weapon:</strong> ${characters[i].weapon}</div>
          </div>
          </div>
          `)
        }
      })
      .catch( error => { throw error } )
    }
    
    document.getElementById('fetch-one').onclick = function(){
      reset();
      let characterId = $('input[name=character-id]').val();
      charactersAPI.getOneRegister( characterId )
      .then( character => {
        $('.characters-container').append(
          `
          <div class="character-info">
          <h4>Character Info</h4>
          <div class="container">
          <div class="character-id"><strong>ID:</strong> ${character.id}</div>
          <div class="name"><strong>Name:</strong> ${character.name}</div>
          <div class="occupation"><strong>Occupation:</strong> ${character.occupation}</div>
          <div class="cartoon"><strong>Cartoon:</strong> ${character.cartoon}</div>
          <div class="weapon"><strong>Weapon:</strong> ${character.weapon}</div>
          </div>
          </div>
          `)
        })
    .catch( error => { throw error } )
  }
  
  document.getElementById('delete-one').onclick = function(){
    reset();
    let characterId = $('input[name=character-id-delete]').val();

    charactersAPI.deleteOneRegister( characterId );
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function( e ){
    e.preventDefault();

    reset();

    let updatedCharacter = {
      name: $('#edit-character-form :input[name=name]').val(),
      occupation: $('#edit-character-form :input[name=occupation]').val(),
      cartoon: $('#edit-character-form :input[name=cartoon]').val(),
      weapon: $('#edit-character-form :input[name=weapon]').val()
    }

    let characterId = $('#edit-character-form :input[name=chr-id]').val();

    charactersAPI.updateOneRegister( characterId, updatedCharacter );
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();
    
    reset();

    let newCharacter = {
      name: $('input[name=name]').val(),
      occupation: $('input[name=occupation]').val(),
      cartoon: $('input[name=cartoon]').val(),
      weapon: $('input[name=weapon]').val()
    }

    charactersAPI.createOneRegister( newCharacter );
  }
})
