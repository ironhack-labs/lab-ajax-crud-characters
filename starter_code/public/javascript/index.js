const charactersAPI = new APIHandler("http://localhost:8000")

//SEARCH ALL
$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    $(".character-info").detach();
    charactersAPI.getFullList ()
  }
  
  //SEARCH 1
  document.getElementById('fetch-one').onclick = function(){
    let id = document.getElementById('id-value').value;
    charactersAPI.getOneRegister(id);
  }
  
  //DELETE
  document.getElementById('delete-one').onclick = function(){
    let id = document.getElementById('delete-id-value').value;
    charactersAPI.deleteOneRegister (id);
  }
  
  //EDIT
  document.getElementById('edit-character-form').onsubmit = function(){
    event.preventDefault();
    
    var queryString = $('#edit-character-form').serializeArray();
    
    const updateInfo = {
      name: queryString[1].value,
      occupation: queryString[2].value,
      weapon: queryString[3].value,
      cartoon: document.getElementById('isCartoonEdit').checked
    };

    const charId = document.getElementById("character-id-input").value;
    charactersAPI.updateOneRegister (charId, updateInfo)
  }
  
  //CREATE NEW
  document.getElementById('new-character-form').onsubmit = function(){
    event.preventDefault();
    var queryString = $('#new-character-form').serializeArray();
    //console.log(queryString);
    const newChar = {
      name: queryString[0].value,
      occupation: queryString[1].value,
      weapon: queryString[2].value,
      cartoon: document.getElementById('isCartoon').checked
    };

    console.log(newChar.cartoon);
    
    charactersAPI.createOneRegister (newChar)
  }
})
