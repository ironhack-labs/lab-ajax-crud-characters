$( document ).ready(function() {
  $(".inform").hide();
});


const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList();

    $("#fetch-all").click(function(){
      $(".inform").show(1000);
  });
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let id = document.getElementsByName("character-id")[0].value;
    charactersAPI.getOneRegister(id);
  }
  
  document.getElementById('delete-one').onclick = function(){
    let luis = document.getElementById("eleliminado").value;
  charactersAPI.deleteOneRegister(luis); 

  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    let object = {
      name:document.getElementById("minombre2").value ,
      occupation:document.getElementById("miocupacion2").value,
      weapon:document.getElementById("miarma2").value,
      cartoon:document.getElementById("caricatura2").checked
    }
    let luis = document.getElementById("elactualizado").value;
    charactersAPI.updateOneRegister(luis,object); 
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    let object = {
      name:document.getElementById("minombre").value ,
      occupation:document.getElementById("miocupacion").value,
      weapon:document.getElementById("miarma").value,
      cartoon:document.getElementById("caricatura").checked
    }
    charactersAPI.createOneRegister(object);    
  }
})
