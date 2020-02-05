const charactersAPI = new APIHandler('http://localhost:8000');
const displayCharacters = document.querySelector('.characters-container');
const inputId = document.querySelector('#character-id')


function displayCharacter(chars) {
  console.log(chars)

  chars.forEach(char => {
    const tpl = `
      <div class="character-info">
        <div class="name">Id: ${char.id} </div>
        <div class="name">Name: ${char.name} </div>
        <div class="occupation">Occupation: ${char.occupation} </div>
        <div class="cartoon">Is a Cartoon? ${char.cartoon} </div>
        <div class="weapon">Weapon: ${char.weapon} </div>
    </div>`

    displayCharacters.innerHTML += tpl;
  })
}

function displayOneCharacter(character) {
  displayCharacters.innerHTML = '';
   displayCharacters.innerHTML +=
     `<div class="character-info">
       <div class="name">Id: ${character.id} </div>
       <div class="name">Name: ${character.name} </div>
       <div class="occupation">Occupation: ${character.occupation} </div>
       <div class="cartoon">Is a Cartoon? ${character.cartoon} </div>
       <div class="weapon">Weapon: ${character.weapon} </div>
     </div>`
}



window.addEventListener('load', () => {
  document.getElementById('fetch-all').onclick = function (event) {
    console.log("coucou")
    charactersAPI.getFullList("/characters")
    .then((dbRes) => displayCharacter(dbRes.data))
    .catch(dbErr => console.log(dbErr))
  };

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI.getOneRegister(inputId.value)
    .then((dbRes) => displayOneCharacter(dbRes.data))
    .catch(dbErr => console.log(dbErr))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const getId = document.querySelector('#chartoDeleteId').value;
    charactersAPI.deleteOneRegister(getId)
    .then((dbRes) =>   document.getElementById('delete-one').style.backgroundColor = "Green")
    .catch((dbErr) => document.getElementById('delete-one').style.backgroundColor = "Red")
  });

  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();
    console.log("yo");
    
    const editCharacter = document.getElementById('edit-character-form');
    const id = editCharacter.querySelector("#idtoUpdate").value;
    const name = editCharacter.querySelector("#nametoUpdate").value;
    const occupation = editCharacter.querySelector("#occupationtoUpdate").value;
    const weapon = editCharacter.querySelector("#weapontoUpdate").value;
    const cartoon = editCharacter.querySelector("#cartoontoUpdate").checked;

    charactersAPI.updateOneRegister(id, {id, name, occupation, weapon, cartoon})
    .then((dbRes) =>   document.getElementById('updateBtn').style.backgroundColor = "Green")
    .catch((dbErr) => document.getElementById('updateBtn').style.backgroundColor = "Red")
  };

  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();
      const formCreate = document.getElementById('new-character-form');
      const name = formCreate.querySelector('#nametoCreate').value;
      const occupation = formCreate.querySelector('#occupationtoCreate').value;
      const weapon = formCreate.querySelector('#weapontoCreate').value;
      const cartoon = formCreate.querySelector('#cartoontoCreate').checked;
   
      charactersAPI.createOneRegister(name, occupation, cartoon, weapon)
      .then((dbRes) =>   document.getElementById('createBtn').style.backgroundColor = "Green")
      .catch((dbErr) => document.getElementById('createBtn').style.backgroundColor = "Red")
  };




  });

