const charactersAPI = new APIHandler("http://localhost:8000/")

          
$(document).ready( () => {

  document.getElementById('fetch-all').onclick = function(){
   charactersAPI.getFullList();
  }
  
  document.getElementById('fetch-one').onclick = function(){
    var id = $("#character-id").val();
    charactersAPI.getOneRegister(id);
   
  }
  
  document.getElementById('delete-one').onclick = function(){
    var id = $("#character-id-delete").val();
    console.log(id)
    charactersAPI.deleteOneRegister(id)
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();
    charactersAPI.updateOneRegister();      
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();
    charactersAPI.createOneRegister();
  }
})
