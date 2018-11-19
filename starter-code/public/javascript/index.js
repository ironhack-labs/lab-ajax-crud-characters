const charactersAPI = new APIHandler("http://localhost:8000")
$(document).ready( () => {
  $("#fetch-all").click(charactersAPI.getFullList);
  
  
  document.getElementById('fetch-one').onclick = function(){
    //  e.preventDefault();
      charactersAPI.getOneRegister();
  }
  document.getElementById('delete-one').onclick = function(){
      charactersAPI.deleteOneRegister();
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    charactersAPI.createOneRegister()
  }
})