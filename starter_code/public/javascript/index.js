const charactersAPI = new APIHandler("http://localhost:8000")
const BASE_URL = "https://ih-crud-api.herokuapp.com"

$(document).ready( () => {

  const allcharters = document.getElementById("allcharters");

  document.getElementById('fetch-all').onclick = function(){

    allcharters.innerHTML = "";
    charactersAPI.getFullList().then(data => {
      data.forEach(e => {
        //console.log(e);
        allcharters.innerHTML += `
        <div class="character-info">
        <div class="id">ID: ${e.id}</div>
        <div class="name">Name: ${e.name}</div>
        <div class="occupation">Occupation: ${e.occupation}</div>
        <div class="cartoon">Cartoon: ${e.cartoon}</div>
        <div class="weapon">Weapon: ${e.weapon}</div>
      </div>`;
      });
    });
  
  }
  
  document.getElementById('fetch-one').onclick = function(){

    allcharters.innerHTML = "";
    const id = document.getElementById("idid").value;
    console.log(id);
    charactersAPI.getOneRegister(id).then(data => {
      allcharters.innerHTML += `
      <div class="character-info">
      <div class="id">ID: ${data.id}</div>
      <div class="name">Name: ${data.name}</div>
      <div class="occupation">Occupation: ${data.occupation}</div>
      <div class="cartoon">Cartoon: ${data.cartoon}</div>
      <div class="weapon">Weapon: ${data.weapon}</div>
      </div>`;
      
    });
    document.getElementById("idid").value = "";
  }
  
  document.getElementById('delete-one').onclick = function(){

    allcharters.innerHTML = "";
    const id = document.getElementById("iDdelet").value;
    document.getElementById("iDdelet").value = "";
    charactersAPI.deleteOneRegister(id)
    
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){

    allcharters.innerHTML = "";

    let id = document.getElementById("editID").value;
    let name = document.getElementById("editName").value;
    let occupation = document.getElementById("editOcu").value;
    let weapon = document.getElementById("editWeea").value;
    let cartoon = document.querySelector("#editCartoon").checked;
    
    charactersAPI.getOneRegister(id).then(data => {
      if (!name) name = data.name;
      if (!occupation) occupation = data.occupation;
      if (!weapon) weapon = data.weapon;
      }).then(() => charactersAPI.updateOneRegister(id, {id, name, occupation, weapon, cartoon}))
    

  }
  
  document.getElementById('new-character-form').onsubmit = function(){

    allcharters.innerHTML = "";
    const name = document.getElementById("newName").value;
    const occupation = document.getElementById("newOcu").value;
    const weapon = document.getElementById("newWeap").value;
    const cartoon = document.querySelector("#newFie").checked;

    charactersAPI.createOneRegister({name, occupation, weapon, cartoon})
  }
})
