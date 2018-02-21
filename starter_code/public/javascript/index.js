const charactersAPI = new APIHandler("http://localhost:8000")
//Get All
$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
    .then(r=>{
      for(char of r){
        $(".characters-container").html("");
        $(".characters-container").append(
         `<div class="character-container">
         
        `)
      }
    })
  }//will finish the jquery later!!
  
  //Get By Id
  document.getElementById('fetch-one').onclick = function(){
    charactersAPI.getOneRegister();
    
  }
  
  //Delete
  document.getElementById('delete-one').onclick = function(){
    charactersAPI.deleteOneRegister();
  }
  
  //Edit
  document.getElementById('edit-character-form').onsubmit = function(e){
     e.preventDefault();
     charactersAPI.updateOneRegister(e)
    }
            
//Create new
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();   
    charactersAPI.createOneRegister(e)
         
  }
})

