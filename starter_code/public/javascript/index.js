const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
    .then(res => {
      console.log(res)
    })
    .catch(e => console.log("Error printing all the characters"))
  }
  
  document.getElementById('fetch-one').onclick = function(){

    let id = document.getElementById("fetch-one-input").value

    charactersAPI.getOneRegister(id)
    .then(res => {
      console.log(res)
    })
    .catch(e => console.log("Error picking one character"))
  }
  
  document.getElementById('delete-one').onclick = function(){
    let id = document.getElementById("character-delete").value

      charactersAPI.deleteOneRegister(id)  
      .then(() => {
        console.log("Character deleted!!");   
      })
      .catch(e => console.log("Error deleting character"))
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    event.preventDefault();

    let id = document.getElementById("idUpdate").value;
    let name = document.getElementById("nameUpdate").value;
    let occupation = document.getElementById("occupationUpdate").value;
    let weapon = document.getElementById("weaponUpdate").value;
    let cartoon = document.getElementById("cartoonUpdate").value;

    charactersAPI.updateOneRegister(id, name, occupation, weapon, cartoon)
  }
  
  document.getElementById('new-character-form').onsubmit = function(){

    let name = document.getElementById("nameNew").value;
    let occupation = document.getElementById("occupationNew").value;
    let weapon = document.getElementById("weaponNew").value;
    let cartoon = document.getElementById("cartoonNew").value;

    charactersAPI.createOneRegister(name, occupation, weapon, cartoon)        
  }
})
