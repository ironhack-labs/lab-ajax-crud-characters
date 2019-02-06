const charactersAPI = new APIHandler("http://localhost:8000")
const charactersContainer = document.querySelector('.characters-container')

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
    .then(characters => {
      characters.forEach(char => {
        charactersContainer.innerHTML += 
      `<div class="character-info">
        <div class="name">Id: ${char.id}</div>
        <div class="name">Name: ${char.name}</div>
        <div class="occupation">Occupation: ${char.occupation}</div>
        <div class="cartoon">Cartoon: ${char.cartoon}</div>
        <div class="weapon">Weapon: ${char.weapon}</div>
      </div>`
      console.log(char)
    })
  })
  .catch( err => {
    console.log(err)
  })
  }
  document.getElementById('fetch-one').onclick = function(){
    const id = document.querySelector('.input-char-id').value
    charactersAPI.getOneRegister(id)
    .then(character => {
      charactersContainer.innerHTML = `<div class="character-info">
      <div class="name">Id: ${character.id}</div>
      <div class="name">Name: ${character.name}</div>
      <div class="occupation">Occupation: ${character.occupation}</div>
      <div class="cartoon">Cartoon: ${character.cartoon}</div>
      <div class="weapon">Weapon: ${character.weapon}</div>
    </div>`
    })
    .catch( err => {
      console.log(err)
    })
  }
  
  document.getElementById('delete-one').onclick = function(e){
    const id = document.querySelector('.input-delete-char').value
    charactersAPI.deleteOneRegister(id)
    .then(character => {
      // FIXME: page updates after delete
      e.preventDefault()
      console.log(character)
      document.querySelector('#delete-one').style.backgroundColor = 'green'
    .catch( err => {
      console.log(err)
    })
    })
  } 
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault()
    const id = document.querySelector('.edit-id').value
    const charInfo = {
      name: document.querySelector('.edit-name').value,
      occupation: document.querySelector('.edit-occupation').value,
      weapon: document.querySelector('.edit-weapon').value,
      cartoon: document.querySelector('.edit-cartoon').value
    }
    charactersAPI.updateOneRegister(id, charInfo)
    .then(response => {
      console.log(response)
      document.querySelector('#send-data2').style.backgroundColor = 'green'
    })           
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault()
    const charInfo = {
      name: document.querySelector('.chr-name').value,
      occupation: document.querySelector('.chr-occupation').value,
      weapon: document.querySelector('.chr-weapon').value,
      cartoon: document.querySelector('.chr-cartoon').checked
    }
    charactersAPI.createOneRegister(charInfo)
    .then((character) => {
      console.log(character)
    })                         
  }
})
