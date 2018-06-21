const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {

  document.getElementById('fetch-all').onclick = function(){
//This should give us the full List 
console.log("fetch all");
charactersAPI.getFullList();

}
  
  document.getElementById('fetch-one').onclick = function(){
  //get the ID Number :) 
  let charId = $(".operation").find('input[name="character-id"]').val();

  console.log("fetch one charId",charId);
  charactersAPI.getOneRegister(charId);

    // charactersAPI.getOneRegister();

    
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})
