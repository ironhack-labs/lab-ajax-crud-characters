const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    document.getElementsByClassName('characters-container')[0].innerHTML = ""
    charactersAPI.getFullList()
      .then(characters => {
        console.log(characters)
      for(var i = 0; i < characters.length; i++) {
        const {id, name, occupation, cartoon, weapon} = characters[i]
        const newCharacterHTML = `
          <div class="character-info">
            <div class="id">Id: ${id}</div>
            <div class="name">Name: ${name}</div>
            <div class="occupation">Occupation: ${occupation}</div>
            <div class="cartoon">Is a Cartoon?: ${cartoon}</div>
            <div class="weapon">Weapon: ${weapon}</div>
          </div>`
        document.getElementsByClassName('characters-container')[0].innerHTML += newCharacterHTML
      }
    })
      .catch(err => console.log(err))
  }
  
  document.getElementById('fetch-one').onclick = function(){
    document.getElementsByClassName('characters-container')[0].innerHTML = ""
    const elementId = document.getElementsByName('character-id')[0].value
    charactersAPI.getOneRegister(elementId)
      .then(character => {
        console.log(character)
        const {id, name, occupation, cartoon, weapon} = character
        const newCharacterHTML = `
          <div class="character-info">
            <div class="id">Id: ${id}</div>
            <div class="name">Name: ${name}</div>
            <div class="occupation">Occupation: ${occupation}</div>
            <div class="cartoon">Is a Cartoon?: ${cartoon}</div>
            <div class="weapon">Weapon: ${weapon}</div>
          </div>`
        document.getElementsByClassName('characters-container')[0].innerHTML =newCharacterHTML
    })
      .catch(err => console.log(err))
    
  }
  
  document.getElementById('delete-one').onclick = function(){
    const deletedElementId = document.getElementsByName('character-id-delete')[0].value
    charactersAPI.deleteOneRegister(deletedElementId)
      .then(deleted => {
        document.getElementById('delete-one').className += ' button-success'
      })
      .catch(err => {
        console.log(err)
        document.getElementById('delete-one').className = ' button-failed'
      })
  }
  
  document.getElementById('edit-character-form').onsubmit = function(event){
    event.preventDefault()
    const modifiedCharacter = {
      name: document.getElementsByName('name')[1].value,
      occupation: document.getElementsByName('occupation')[1].value,
      cartoon: document.getElementsByName('cartoon')[1].checked,
      weapon: document.getElementsByName('weapon')[1].value,
    }
    const editCharId = document.getElementsByName('chr-id')[0].value
    charactersAPI.updateOneRegister(editCharId, modifiedCharacter)
      .then(edited => {
        console.log(edited)
       document.getElementById('send-data-edit').className += ' button-success'
      })
      .catch(err => {
        console.log(err)
        document.getElementById('send-data-edit').className = ' button-failed'
      })
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    event.preventDefault()
    const createdCharacter = {
      name: document.getElementsByName('name')[0].value,
      occupation: document.getElementsByName('occupation')[0].value,
      cartoon: document.getElementsByName('cartoon')[0].checked,
      weapon: document.getElementsByName('weapon')[0].value,
    }
    charactersAPI.createOneRegister(createdCharacter)
      .then(added => {
        console.log(added)
       document.getElementById('send-data').className += ' button-success'
      })
      .catch(err => {
        console.log(err)
        document.getElementById('send-data').className = ' button-failed'
      })
  }
})
