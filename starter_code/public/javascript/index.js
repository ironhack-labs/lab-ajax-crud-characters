const charactersAPI = new APIHandler("http://localhost:8000/characters")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList().then(res => {
      
      console.log(res)
    })
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let getChar = $("#get-char-id").val();

    charactersAPI.getOneRegister(getChar)
      .then(res => {
        $(".character-info .name").html(`Name: ${res.name}`);
        $(".character-info .occupation").html(`Occupation: ${res.occupation}`);
        if (res.cartoon){
          $(".character-info .cartoon").html(`Is a cartoon?: Yes`);
        } else {
          $(".character-info .cartoon").html(`Is a cartoon?: No`);
        }
        $(".character-info .weapon").html(`Weapon: ${res.weapon}`);    
    })
  }
  
  document.getElementById('delete-one').onclick = function(){
    let deleteChar = [$("#get-char-id").val()-1]
    charactersAPI.deleteOneRegister()
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})
