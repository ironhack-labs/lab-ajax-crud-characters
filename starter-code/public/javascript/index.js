const charactersAPI = new APIHandler("https://minions-api.herokuapp.com/characters")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
      charactersAPI.getFullList()
  }
  
  document.getElementById('fetch-one').onclick = function(){
    charactersAPI.getOneRegister()
  }
  
  document.getElementById('delete-one').onclick = function(){
    charactersAPI.deleteOneRegister()
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault()
    charactersAPI.updateOneRegister()
    document.getElementById("edit-character-form").reset()
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault()
    charactersAPI.createOneRegister()
    document.getElementById("new-character-form").reset()
    document.getElementsByClassName('update-data')[0].innerHTML = `<style>.update-data{color:white; border-color:white}</style>`

  }
})
