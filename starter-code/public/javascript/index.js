const charactersAPI = new APIHandler("http://localhost:3000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
  }
  
  document.getElementById('fetch-one').onclick = function(){
    var a = document.getElementsByName('character-id')[0].value
    charactersAPI.getOneRegister(a)
  }
  
  document.getElementById('delete-one').onclick = function(){
        var a = document.querySelector('body > section:nth-child(1) > section > div.operation.delete > input[type="text"]').value
        charactersAPI.deleteOneRegister(a)
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    var id = document.querySelector('#edit-character-form > div:nth-child(1) > input[type="text"]').value
    var name = document.querySelector('#edit-character-form > div:nth-child(2) > input[type="text"]').value
    var occupation = document.querySelector('#edit-character-form > div:nth-child(3) > input[type="text"]').value
    var weapon = document.querySelector('#edit-character-form > div:nth-child(4) > input[type="text"]').value
    var cartoon = document.querySelector('#edit-character-form > div:nth-child(5) > input[type="checkbox"]').checked
    var attributes = {name, occupation, weapon, cartoon}
    charactersAPI.updateOneRegister(id, attributes)
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    var name = document.querySelector('#new-character-form > div:nth-child(1) > input[type="text"]').value
    var occupation = document.querySelector('#new-character-form > div:nth-child(2) > input[type="text"]').value
    var weapon = document.querySelector('#new-character-form > div:nth-child(3) > input[type="text"]').value
    var cartoon = document.querySelector('#new-character-form > div:nth-child(4) > input[type="checkbox"]').checked
    var attributes = {name, occupation, weapon, cartoon, attributes}
    charactersAPI.createOneRegister(attributes)
  }
})
