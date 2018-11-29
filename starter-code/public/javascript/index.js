const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {

  document.getElementById('fetch-all').onclick = function(){
    fetch()
  }

  function fetch(){
    charactersAPI.getFullList()
    .then( response => {
      document.getElementById('characters-container').innerHTML = ''
      response.data.map(charac => {
        drawCharacter(charac)
      })
    })
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let id = document.querySelector('#character-id').value
    charactersAPI.getOneRegister(id)
    .then( character => {
      document.getElementById('characters-container').innerHTML = ''
      drawCharacter(character.data)
      document.querySelector('#id').value = character.data.id
      document.querySelector('#name').value = character.data.name
      document.querySelector('#occupation').value = character.data.occupation
      document.querySelector('#weapon').value = character.data.weapon
      document.querySelector('#cartoon').value = character.data.cartoon
    })
  }
  
  document.getElementById('delete-one').onclick = function(){
    let id = document.querySelector('#character-id-delete').value
    charactersAPI.deleteOneRegister(id)
    .then( data => fetch())
  }
  
})

function drawCharacter(character){
  let div = document.createElement('div')
  div.innerHTML = `
  <div class="character-info">
  <div class="id">Character ID:</div><span id="idDisplay">${character.id}</span>
  <div class="name">Character Name:</div><span id="nameDisplay">${character.name}</span>
  <div class="occupation">Character Occupation:</div><span id="occupationDisplay">${character.occupation}</span>
  <div class="cartoon">Is a Cartoon?:</div><span id="cartoonDisplay">${character.cartoon}</span>
  <div class="weapon">Character Weapon:</div><span id="weaponDisplay">${character.weapon}</span>
  </div> `
  document.getElementById('characters-container').appendChild(div)
}

document.getElementById('send-data').addEventListener('click', function(e){
  e.preventDefault()
  let name = document.querySelector('#nameCreate').value
  let occupation = document.querySelector('#occupationCreate').value
  let weapon = document.querySelector('#weaponCreate').value
  let cartoon = document.querySelector('#cartoonCreate').value
  charactersAPI.getFullList().then(data => {
    let idL =data.length + 1
    let obj = {
      id: idL,
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    }
  
    charactersAPI.createOneRegister(obj)
    .then(response => {
      document.getElementById('characters-container').innerHTML = ''

      document.getElementById('characters-container').innerHTML = ''
      charactersAPI.getOneRegister(response.data.id)
      .then( character => {
        document.getElementById('characters-container').innerHTML = ''
        drawCharacter(character.data)
      })


    })
  })

  
})

document.getElementById('update-data').addEventListener('click', function(e){
  e.preventDefault()
  let id = document.querySelector('#id').value
    let name = document.querySelector('#name').value
    let occupation = document.querySelector('#occupation').value
    let weapon = document.querySelector('#weapon').value
    let cartoon = document.querySelector('#cartoon').value

    let obj = {
      id: id,
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    }

    charactersAPI.updateOneRegister(obj,id)
    .then( response => {
      charactersAPI.getOneRegister(response.data.id)
      .then( character => {
        document.getElementById('characters-container').innerHTML = ''
        drawCharacter(character.data)
      })

    })
})