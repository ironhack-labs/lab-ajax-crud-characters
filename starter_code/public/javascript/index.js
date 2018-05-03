const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let justOne = document.getElementById("characterr").value;
    charactersAPI.getOneRegister(justOne)
  }
  
  document.getElementById('delete-one').onclick = function(){
    let justOne = document.getElementById("eliminado").value;
    charactersAPI.deleteOneRegister(justOne)
  } 
  
  document.getElementById('edit-character-form').onsubmit = function(){
    let object = {
      name:document.getElementById("nombre2").value,
      occupation:document.getElementById("ocupacion2").value,
      weapon:document.getElementById("arma2").value,
      cartoon:document.getElementById("caricatura2").checked
    }
    let justOne = document.getElementById("updatedOne")
    charactersAPI.updateOneRegister(justOne)
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    let object = {
      name:document.getElementById("nombre").value,
      occupation:document.getElementById("ocupacion").value,
      weapon:document.getElementById("arma").value,
      cartoon:document.getElementById("caricatura").checked
    }
    charactersAPI.createOneRegister (object)
  }
})
