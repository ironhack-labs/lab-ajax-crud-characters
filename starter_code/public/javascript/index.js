const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
    .then(characters=>{
      $('.characters-container').empty();
      for(char of characters){
        $('.characters-container').append(`<div class="character-info">
          <div class="id">ID: ${char.id}</div>
          <div class="name">Name: ${char.name}</div>
          <div class="occupation">Occupation: ${char.occupation}</div>
          <div class="cartoon">Is a Cartoon? ${char.cartoon}</div>
          <div class="weapon">Weapon: ${char.weapon}</div>
          </div>`)
      }
    })
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let id = document.getElementById('character-id').value;
    charactersAPI.getOneRegister(id)
    .then(char =>{
      $('.characters-container').empty();
      $('.characters-container').append(`<div class="character-info">
          <div class="id">ID: ${char.id}</div>
          <div class="name">Name: ${char.name}</div>
          <div class="occupation">Occupation: ${char.occupation}</div>
          <div class="cartoon">Is a Cartoon? ${char.cartoon}</div>
          <div class="weapon">Weapon: ${char.weapon}</div>
          </div>`)
    })
    
  }
  
  document.getElementById('delete-one').onclick = function(){
    let id = document.getElementById('delete-char').value;
    charactersAPI.deleteOneRegister(id)
      .then(char=>{
        $('.characters-container').empty();
        $('.characters-container').append(`<div class="character-info">
         Character deleted
          </div>`)
        $('#delete-one').attr('style','background:green')
    })
    .catch(e=>{
      $('#delete-one').attr('style','background:red')
    })
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();
    let id = document.getElementById('edit-id').value;
    let name = document.getElementById('edit-name').value;
    let occupation = document.getElementById('edit-occ').value;
    let weapon = document.getElementById('edit-weap').value;
    let cartoon = document.getElementById('edit-cartoon').checked;    let updatedChar = {
      "name" : name,
      "occupation" : occupation,
      "weapon" : weapon,
      "cartoon" : cartoon
    }  
    charactersAPI.updateOneRegister(id,updatedChar)
    .then(r=>{
      $('.characters-container').empty();
      $('.characters-container').append(`<div class="character-info">
          <div class="id">EDITED</div>
          <div class="name">Name: ${updatedChar.name}</div>
          <div class="occupation">Occupation: ${updatedChar.occupation}</div>
          <div class="cartoon">Is a Cartoon? ${updatedChar.cartoon}</div>
          <div class="weapon">Weapon: ${updatedChar.weapon}</div>
          </div>`)
        $('#send-data').attr('style','background:green')
      })
      .catch(r=>{
        $('#send-data').attr('style','background:red')
      })
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();
    let name = document.getElementById('newname').value;
    let occupation = document.getElementById('newocc').value;
    let weapon = document.getElementById('newweap').value;
    let cartoon = document.getElementById('isCartoon').checked;
    let newChar = {
      "name" : name,
      "occupation" : occupation,
      "weapon" : weapon,
      "cartoon" : cartoon
    }
    charactersAPI.createOneRegister(newChar);
    document.getElementById("new-character-form").reset();
    $('.characters-container').empty();
      $('.characters-container').append(`<div class="character-info">
          <div class="id">CREATED</div>
          <div class="name">Name: ${newChar.name}</div>
          <div class="occupation">Occupation: ${newChar.occupation}</div>
          <div class="cartoon">Is a Cartoon? ${newChar.cartoon}</div>
          <div class="weapon">Weapon: ${newChar.weapon}</div>
          </div>`)
  }
  
})



