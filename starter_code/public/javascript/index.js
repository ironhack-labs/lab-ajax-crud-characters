const charactersAPI = new APIHandler("http://localhost:8000")


$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function () {
    charactersAPI.getFullList().then(result => {
      result.forEach(name => {
        console.log(name.name);
       
      });
    });
  };

  document.getElementById('fetch-one').onclick = function () {
    let fetchOne = document.getElementById("character-id").value
    charactersAPI.getOneRegister(fetchOne)
    console.log(fetchOne);

  }

  document.getElementById('delete-one').onclick = function () {
    let delOne = document.getElementById("delete").value
    charactersAPI.deleteOneRegister(delOne)
    console.log("Ciaoooo")
    console.log(delOne);
  }

  document.getElementById('edit-character-form').onsubmit = function () {
 
    let eId = document.getElementById("editId").value;
    let name = document.getElementById("editName").value;
    let occupation = document.getElementById("editOccupation").value;
    let weapon = document.getElementById("editWeapon").value;
    let cartoon = Boolean(document.getElementById("editCartoon").value);
     charactersAPI.updateOneRegister(eId, name, occupation, weapon, cartoon);
  }

  document.getElementById('new-character-form').onsubmit = function () {
   
    let name = document.getElementById("name").value;
    let occupation = document.getElementById("occupation").value;
    let weapon = document.getElementById("weapon").value;
    let cartoon = Boolean(document.getElementById("cartoon").value);
     charactersAPI.createOneRegister( name, occupation, weapon, cartoon);
    };
  });