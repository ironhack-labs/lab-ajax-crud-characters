const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  let node = document.querySelector(".characters-container");


  // FETCH ALL
  document.getElementById("fetch-all").onclick = function () {
    charactersAPI.getFullList().then(characters => {

      node.innerHTML = "";
      let characterInfo ="";

      for (var i = 0; i < characters.length; i++) {

        if (!document.querySelector('#show-id').checked) {
          characterInfo = `<div class="character-info">
     <div class="name">Name: ${characters[i].name}</div>
     <div class="occupation">Occupation: ${characters[i].occupation}</div>
     <div class="cartoon">Is a cartoon? ${characters[i].cartoon}</div>
     <div class="weapon">Weapon ${characters[i].weapon}</div>
   </div>`;
        } else {
          characterInfo = `<div class="character-info">
          <div class="name">Id: ${characters[i].id}</div>
     <div class="name">Name: ${characters[i].name}</div>
     <div class="occupation">Occupation: ${characters[i].occupation}</div>
     <div class="cartoon">Is a cartoon? ${characters[i].cartoon}</div>
     <div class="weapon">Weapon: ${characters[i].weapon}</div>
   </div>`;
        }

        node.innerHTML += characterInfo;
      }
    });
  };


  // FETCH ONE
  document.getElementById("fetch-one").onclick = function () {

    const fetchId = document.querySelector('.operation input').value;

    charactersAPI.getOneRegister(fetchId)
      .then((character) => {
        let characterInfo = `<div class="character-info">
     <div class="name">${character.name}</div>
     <div class="occupation">${character.occupation}</div>
     <div class="cartoon">${character.cartoon}</div>
     <div class="weapon">${character.weapon}</div>
   </div>`;
        node.innerHTML = characterInfo;
      })
      .catch((err) => {
        return (err);
      })

  };


  // DELETE ONE
  document.getElementById("delete-one").onclick = function () {

    let fetchId = document.querySelector('.operation #character-id-delete').value;

    let deletedObj = null;

    charactersAPI.getOneRegister(fetchId)
      .then((deleted) => {
        deletedObj = deleted
      });

    charactersAPI.deleteOneRegister(fetchId)
      .then(() => {
        console.log(deletedObj + " with Id:" + fetchId + " has been deleted from the database")
      })
      .catch((err) => {
        return err
      })


      document.getElementById("fetch-all").onclick()
  };


  //UPDATE ONE
  document.getElementById("update-entry").onclick = function () {

    let id = document.querySelector('#edit-character-form .chr-id').value;
    let name = document.querySelector('#edit-character-form .name').value;
    let occupation = document.querySelector('#edit-character-form .occupation').value;
    let weapon = document.querySelector('#edit-character-form .weapon').value;
    let cartoon = document.querySelector('#edit-character-form .cartoon').checked;

    let dbCharacter = { id: id, name: name, occupation: occupation, weapon: weapon, cartoon: cartoon };

    charactersAPI.updateOneRegister(id, dbCharacter)
    .then(()=>{
      console.log(`object with Id ${id} successfully updated`)
    })
    .catch((err)=>{
      return err
    })
  };


  // CREATE ONE
  document.getElementById("create-entry").onclick = function () {

    let name = document.querySelector('#new-character-form .name').value;
    let occupation = document.querySelector('#new-character-form .occupation').value;
    let weapon = document.querySelector('#new-character-form .weapon').value;
    let cartoon = document.querySelector('#new-character-form .cartoon').checked;

    let dbCharacter = { name: name, occupation: occupation, weapon: weapon, cartoon: cartoon };

    charactersAPI.createOneRegister(dbCharacter)
      .then(() => {
        console.log('succesfully created the new entry');
      })
      .catch((err) => {
        console.log('An error occurred while attempting to create a new entry: ' + err);
      });
  };
});