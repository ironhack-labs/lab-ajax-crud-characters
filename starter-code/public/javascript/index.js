const charactersAPI = new APIHandler('https://minions-api.herokuapp.com')


$(document).ready( () => {
  let container = document.getElementsByClassName("characters-container")[0]
  function replaceContainer(extraDiv, name, occupation, cartoon, weapon) {
    const div = `<div>${extraDiv}</div></div><div class="character-info"><div class="name">Character Name: ${name}</div><div class="occupation">Character Occupation: ${occupation}</div><div class="cartoon">Is a Cartoon? ${cartoon}</div><div class="weapon">Character Weapon: ${weapon}</div></div>`      
    container.innerHTML += div
  }



  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
      .then( fullList => {
        container.innerHTML = ""
        fullList.forEach(elm => {          
         replaceContainer("",elm.name, elm.occupation, elm.cartoon, elm.weapon)
        })
      })
  }
  
  document.getElementById('fetch-one').onclick = function(){
    const id = document.getElementsByName("character-id")[0]
    charactersAPI.getOneRegister(id.value)
    .then( elm => {
      container.innerHTML = ""
      replaceContainer("", elm.name, elm.occupation, elm.cartoon, elm.weapon)
    } )
  }
  
  document.getElementById('delete-one').onclick = function(){
    const id = document.getElementsByName("character-id-delete")[0]
    
      
      charactersAPI.deleteOneRegister(id.value)
      .then(elm => {
        container.innerHTML = ""
        replaceContainer("Deleted Minion",elm.name, elm.occupation, elm.cartoon, elm.weapon)})
      
  }
  
  document.getElementById('edit-character-form').onsubmit = function(event){
    event.preventDefault()
    const newCharacterInputs = document.querySelectorAll('#edit-character-form input')
    const id = newCharacterInputs[0].value
    const character = {
      name: newCharacterInputs[1].value,
      occupation: newCharacterInputs[2].value,
      weapon: newCharacterInputs[3].value,
      cartoon: newCharacterInputs[4].checked,
    }

    charactersAPI.updateOneRegister(id, character)
      .then(elm => {
      container.innerHTML = ""
      replaceContainer("Edited Minion",elm.name, elm.occupation, elm.cartoon, elm.weapon)

      })
  }
  
  document.getElementById('new-character-form').onsubmit = function(event){
    event.preventDefault()
    const newCharacterInputs = document.querySelectorAll('#new-character-form input')
    
    
    const character = {
      name: newCharacterInputs[0].value,
      occupation: newCharacterInputs[1].value,
      weapon: newCharacterInputs[2].value,
      cartoon: newCharacterInputs[3].checked
    }
    
    charactersAPI.createOneRegister(character)
    .then(elm => {
      container.innerHTML = ""
      replaceContainer("New Minion",elm.name, elm.occupation, elm.cartoon, elm.weapon)      
    })
  }
})
