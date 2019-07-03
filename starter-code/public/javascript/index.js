const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
  }
  
  document.getElementById('fetch-one').onclick = function(){
    const id = document.querySelector('#character-id').value
    const {name} = charactersAPI.getOneRegister(id)
    console.log(name)
    document.querySelector('.name').innerHTML += `   ${name}`
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    const name = document.querySelector('#create-name').value
    const occupation = document.querySelector('#create-occupation').value
    const weapon = document.querySelector('#create-weapon').value
    const cartoon = document.querySelector('#create-cartoon').checked
    
    const character = {
      name,
      occupation,
      weapon,
      cartoon
    }

    charactersAPI.createOneRegister(character)
    .then(data => {

    })
    .catch(err => console.log(err))
  }
})
