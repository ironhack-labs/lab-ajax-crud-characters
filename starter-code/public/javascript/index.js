const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  $("#fetch-all").click(charactersAPI.getFullList);
  
  
  document.getElementById('fetch-one').onclick = function(){
    //  e.preventDefault();
     const country = document.getElementById("theInput").value;
      charactersAPI.getOneRegister(country);
  }
  document.getElementById('delete-one').onclick = function(){
        charactersAPI.deleteOneRegister();
      // charactersAPI.getFullList()
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();
    charactersAPI.updateOneRegister()
    // charactersAPI.getOneRegister();
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    
    charactersAPI.createOneRegister()
  }
})
