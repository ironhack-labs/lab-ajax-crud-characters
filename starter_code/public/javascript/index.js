const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList();
  }
  
  document.getElementById('fetch-one').onclick = function(){
    id = $("#input-id").val();
    charactersAPI.getOneRegister(id);
  }
  
  document.getElementById('delete-one').onclick = function(){
    id = $("#delete-id").val();
    charactersAPI.deleteOneRegister(id);
    
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    event.preventDefault();
    checkbox = $("#edit-ch-box").val()
    if(checkbox == "on"){
      checkbox = true
    } else {
      checkbox = false
    }
    id = $("#edit-ch-id").val();
    const characterInfo = {
      name: $("#edit-ch-name").val(),
      occupation: $("#edit-ch-occu").val(),
      weapon: $("#edit-ch-weapon").val(),
      cartoon: checkbox
    };    
    charactersAPI.updateOneRegister(id,characterInfo);
    $("#edit-ch-name").val("")
    $("#edit-ch-occu").val("")
    $("#edit-ch-weapon").val("")
    $("#edit-ch-box").val(off)

  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    event.preventDefault();
    checkbox = $("#new-ch-box").val()
    if(checkbox == "on"){
      checkbox = true
    } else {
      checkbox = false
    }
    const characterInfo = {
      name: $("#new-ch-name").val(),
      occupation: $("#new-ch-occu").val(),
      weapon: $("#new-ch-weapon").val(),
      cartoon: checkbox
    };       
    
    charactersAPI.createOneRegister(characterInfo);
    $("#new-ch-name").val("")
    $("#new-ch-occu").val("")
    $("#new-ch-weapon").val("")
    $("#new-ch-bos").val(off)
  }
})
