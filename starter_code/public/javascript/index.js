const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {


  showCharacter = function(character) {
    const newCharacterHtml = `
        <div class="character-info" id="character-info">
        <div class="id">${character.id}</div>
        <div class="name">${character.name}</div>
        <div class="occupation">${character.occupation}</div>
        <div class="cartoon">${character.cartoon}</div>
        <div class="weapon">${character.weapon}</div>
      </div>
 `;
    document.getElementById("character-container").innerHTML += newCharacterHtml;
};

  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
    .then((data)=> {
    document.getElementById("character-container").innerHTML = '';
    data.forEach(e => {
        showCharacter(e);
      })
    })
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let id = document.getElementById("list-id").value;
    charactersAPI.getOneRegister(id)
    .then((data)=> {
    document.getElementById("character-container").innerHTML = '';
    showCharacter(data);
      
    })
  }
  
  document.getElementById('delete-one').onclick = function(){
    let id = document.getElementById("delete-id").value;
    charactersAPI.deleteOneRegister(id);
  
  }
  



  document.getElementById('edit-character-form').onsubmit = function(){
    let id = document.getElementById("edit-id").value;
    let name = document.getElementById("edit-name").value;
    let occupation = document.getElementById("edit-occupation").value;
    let weapon = document.getElementById("edit-weapon").value;
    let cartoon = document.getElementById("edit-cartoon").checked;
    let updateCharacter = {name, occupation, weapon, cartoon}
    charactersAPI.updateOneRegister(id, updateCharacter)

  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    let name = document.getElementById("new-name").value;
    let occupation = document.getElementById("new-occupation").value;
    let weapon = document.getElementById("new-weapon").value;
    let cartoon = document.getElementById("new-cartoon").checked;
    let createCharacter = {name, occupation, weapon, cartoon}
    charactersAPI.createOneRegister(createCharacter);
                
  }
})
