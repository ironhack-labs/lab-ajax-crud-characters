const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    
    console.log(charactersAPI.getFullList());
  }
  
  document.getElementById('fetch-one').onclick = function(){
      character_id = document.getElementsByName('character-id')[0].value;
     console.log(charactersAPI.getOneRegister(character_id));

   

  }
  
  document.getElementById('delete-one').onclick = function(){
        var character_id = document.getElementsByName('character-id-delete')[0].value;
        console.log(charactersAPI.deleteOneRegister(character_id));
  } 
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
   
    var id = document.getElementsByName('chr-id')[0].value;
    var name = document.getElementsByName('name')[1].value;
    var  occupation = document.getElementsByName('occupation')[1].value;
    var  cartoon = document.getElementsByName('cartoon')[1].value;
    var  weapon = document.getElementsByName('weapon')[1].value;

    
    console.log(charactersAPI.updateOneRegister(id,{name,occupation,cartoon,weapon}));

  }
  
  document.getElementById('new-character-form').onsubmit = function(e){


    var name = document.getElementsByName('name')[0].value;
    var  occupation = document.getElementsByName('occupation')[0].value;
    var  cartoon = document.getElementsByName('cartoon')[0].value;
    var  weapon = document.getElementsByName('weapon')[0].value;
    
     
     

     console.log(charactersAPI.createOneRegister({name,occupation,cartoon,weapon}));
     

     e.preventDefault()
  }
})
