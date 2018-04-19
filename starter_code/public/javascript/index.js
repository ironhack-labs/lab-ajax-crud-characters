const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList ();
     
  }
  
  document.getElementById('fetch-one').onclick = function(){
    
    charactersAPI.getOneRegister ();
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){

         let name = document.getElementById("name").value
         let occupation = document.getElementById("occupation").value
         let cartoon = document.getElementById("cartoon").value
         let weapon = document.getElementById("weapon").value

         let newCharacter = {
           name:name,
           occupation:occupation,
           cartoon:cartoon, 
           weapon:weapon
         }
         
         charactersAPI.createOneRegister (newCharacter);
         
  }
})