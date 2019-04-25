const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {

  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()   
  } 
  
  document.getElementById('fetch-one').onclick = function(){
    let id=document.querySelector('body > section:nth-child(1) > section > div:nth-child(2) > input[type="text"]').value 
    charactersAPI.getOneRegister(id)
  }
  
  document.getElementById('delete-one').onclick = function(){
    let id=document.querySelector('body > section:nth-child(1) > section > div.operation.delete > input[type="text"]').value
    document.querySelector('body > section:nth-child(1) > section > div.operation.delete > input[type="text"]').value = ''

        charactersAPI.deleteOneRegister(id)
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
          event.preventDefault();
          charactersAPI.updateOneRegister()  
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    charactersAPI.createOneRegister()   
  }
})
