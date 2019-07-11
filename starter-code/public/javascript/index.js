const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
    .then(response => {
      const characters = document.getElementsByClassName('characters-container')[0]
      characters.innerHTML ='';
      response.forEach(info => {
        characters.innerHTML +=  
      `<div class="character-info">
        <div class="name">Name: ${info.name}</div>
        <div class="occupation">Occupation: ${info.occupation}</div>
        <div class="cartoon">Cartoon: ${info.cartoon}</div>
        <div class="weapon">Weapon: ${info.weapon}</div>
      </div>`    
      })
    })
    .catch(err => console.log(err));
  }
  
  document.getElementById('fetch-one').onclick = function(){
    charactersAPI.getOneRegister(document.getElementsByName("character-id")[0].value)
    .then(response => {
      const characters = document.getElementsByClassName('characters-container')[0]
      characters.innerHTML ='';
      characters.innerHTML =  
      `<div class="character-info">
        <div class="name">Name: ${response.name}</div>
        <div class="occupation">Occupation: ${response.occupation}</div>
        <div class="cartoon">Cartoon: ${response.cartoon}</div>
        <div class="weapon">Weapon: ${response.weapon}</div>
      </div>`    
      })
    .catch(err => console.log(err));
  }
  
  document.getElementById('delete-one').onclick = function(){
        charactersAPI.deleteOneRegister(document.getElementById("delete-input").value)

  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    
    charactersAPI.updateOneRegister()
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    let name = document.getElementById("char-name").value;
    let occupation = document.getElementById("char-occupation").value;
    let cartoon = document.getElementById("char-cartoon").checked;
    let weapon = document.getElementById("char-weapon").value;
    e.preventDefault
    charactersAPI.createOneRegister(name, occupation, cartoon, weapon)
    
  }
})
