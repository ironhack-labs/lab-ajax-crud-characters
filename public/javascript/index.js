const charactersAPI = new APIHandler('http://localhost:8000');
const container = document.querySelector(".characters-container");

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    event.preventDefault();
   const character = await charactersAPI.getFullList("characters");
   container.innerHTML = ``;
   character.forEach(element => {
     const char = `<div class="character-info">
     <div class="id">Id: <span>${element.id}</span></div>
     <div class="name">Name: <span>${element.name}</span></div>
     <div class="occupation">Occupation: <span>${element.occupation}</span></div>
     <div class="cartoon">Is a Cartoon?:  <span>${element.cartoon}</span></div>
     <div class="weapon">Weapon: <span>${element.weapon}</span></div>
   </div>`
   container.innerHTML += char;
   });
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    event.preventDefault();
    container.innerHTML = ``;
    const id = document.getElementById("character-id").value;
     const char = await charactersAPI.getOneRegister("characters", id);
     const oneCharacter = `<div class="character-info">
     <div class="id">Id: <span>${char.id}</span></div>
     <div class="name">Name: <span>${char.name}</span></div>
     <div class="occupation">Occupation: <span>${char.occupation}</span></div>
     <div class="cartoon">Is a Cartoon?:  <span>${char.cartoon}</span></div>
     <div class="weapon">Weapon: <span>${char.weapon}</span></div>
   </div>`
   container.innerHTML += oneCharacter;
  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {
    event.preventDefault();
    const deleteButton = document.getElementById("delete-one")
    const id = document.getElementById("character-id-delete").value;
    try{
      const deleteCharacter = await charactersAPI.deleteOneRegister("characters", id);
      deleteButton.style.backgroundColor = 'green';
    }catch(err){
       deleteButton.style.backgroundColor = 'red';
    }
   
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
      event.preventDefault();
      const editButton = document.querySelector('.update-button')
      const id = document.getElementById('editId').value;
      const name = document.getElementById('editName').value;
      const occupation = document.getElementById('editOccupation').value;
      const weapon = document.getElementById('editWeapon').value;
      const cartoon = document.getElementById('editCartoon').checked;
      const character = {
        name,
        occupation,
        weapon,
        cartoon
      }
      try{
        charactersAPI.updateOneRegister("characters", character, id)
        editButton.style.backgroundColor = 'green';
      }catch(err){
        editButton.style.backgroundColor = 'red';
      }
      
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const createButton = document.querySelector('.create-button')
    const name = document.getElementById('newName').value;
    const occupation = document.getElementById('newOccupation').value;
    const weapon = document.getElementById('newWeapon').value;
    const cartoon = document.getElementById('newCartoon').checked;
    const character = {
      name,
      occupation,
      weapon,
      cartoon
    }
    try{
      charactersAPI.createOneRegister("characters",character);
      createButton.style.backgroundColor = 'green';
    }catch(error){
      createButton.style.backgroundColor = 'red';
    }
  });
});
