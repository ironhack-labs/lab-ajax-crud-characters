const charactersAPI = new APIHandler("http://localhost:8000/")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = ()=>{
    charactersAPI.getFullList()
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let id = document.getElementById('character-id').value
    charactersAPI.getOneRegister(id)
  }
  
  document.getElementById('delete-one').onclick = function(){
    let id = document.getElementById("character-id-delete").value
    charactersAPI.deleteOneRegister(id)
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    let id = document.getElementById("chr-id").value
    charactersAPI.updateOneRegister(id)  
  }
  
  document.getElementById('sendd-data').onclick = function(){
    let i = document.getElementById('chr-id').value
    let nombre = document.getElementById('n').value
    let ocupacion = document.getElementById('o').value
    let caric = document.getElementById('c').value
    let arma = document.getElementById('w').value

    charactersAPI.createOneRegister(nombre,ocupacion,caric,arma,i)
  }
})
