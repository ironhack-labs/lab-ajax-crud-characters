const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    console.log('fetch-all')
    charactersAPI.getFullList()  
  }
  
  document.getElementById('fetch-one').onclick = function(){
    console.log('fetch-one')
    charactersAPI.getOneRegister()  
  }
  
  document.getElementById('delete-one').onclick = function(){
    console.log('delete-one')
    charactersAPI.deleteOneRegister()
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault()
    console.log('edit-character-form')
    charactersAPI.updateOneRegister()
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault()
    console.log('new-character-form')
    charactersAPI.createOneRegister()          
  }
})
