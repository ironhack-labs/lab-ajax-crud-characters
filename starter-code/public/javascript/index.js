const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {

  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList().then(res=>console.log(res))
    
  }
  
  document.getElementById('fetch-one').onclick = function(){
    const culo = document.getElementById("character-id").value
    console.log(culo)
    charactersAPI.getOneRegister(culo).then(res=>console.log(res))
    
  }
  
  document.getElementById('delete-one').onclick = function(){

    const teta = document.getElementById("character-id-delete").value
    charactersAPI.deleteOneRegister(teta).then(res=>console.log(res))
  
    
  }
  
  document.getElementById('edit-character-form').onclick = function(){
    const nepe = document.getElementById("upID").value
    const new1 = document.getElementById("updName").value
    const new2 = document.getElementById("updOccupation").value
    const new3 = document.getElementById("updCheckbox").checked
    const new4 = document.getElementById("updWeapon").value
    charactersAPI.updateOneRegister (nepe, new1, new2, new3, new4).then(res=>console.log(res))
  }
  
  document.getElementById('send-data').onclick = function(e){
    e.preventDefault();
    const new1 = document.getElementById("newName").value
    const new2 = document.getElementById("newOccupation").value
    const new3 = document.getElementById("newCheckbox").checked
    const new4 = document.getElementById("newWeapon").value
    charactersAPI.createOneRegister(new1, new2, new3, new4).then(res=>console.log(res))
  
  }
})
