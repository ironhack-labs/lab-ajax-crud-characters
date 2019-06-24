const charactersAPI = new APIHandler("http://localhost:8000")

const name = document.querySelector(".name")


  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
    .then(res => displayAllCharacters(res["data"]))
    .catch(err => console.error(err))
  }
  let characterContainer = document.querySelector(".characters-container");
  function displayAllCharacters(data) {
    characterContainer.innerHTML = "";
    data.forEach(character => {
      characterContainer.innerHTML += `<div class="character-info"><div class="name">Name: ${character.name}</div><div class="occupation">Occupation: ${character.occupation}</div><div class="cartoon">Is a Cartoon?: ${character.cartoon}</div><div class="weapon">Weapon: ${character.weapon}</div></div>`;
    });
  }

  document.getElementById('fetch-one').onclick = function(){
    var inputId = document.querySelector(`[name="character-id"]`);
    charactersAPI.getOneRegister(inputId.value)
    .then(character => { 
      characterContainer.innerHTML = "";
      characterContainer.innerHTML += `<div class="character-info"><div class="name">Name: ${character.data.name}</div><div class="occupation">Occupation: ${character.data.occupation}</div><div class="cartoon">Is a Cartoon?: ${character.data.cartoon}</div><div class="weapon">Weapon: ${character.data.weapon}</div></div>`;  
    })
    .catch(err => console.error(err))
  }
  
  document.getElementById('delete-one').onclick = function(){
    var deleteInput = document.querySelector(`[name="character-id-delete"]`);
    var deleteButton = document.getElementById("delete-one");
    charactersAPI.deleteOneRegister(deleteInput.value)
    .then(res => {
      deleteButton.style.background = "#008000";
      console.log(res)
    })
    .catch(err => {
      deleteButton.style.background = "#FF0000";
      console.error(err)
    })
  } 

  document.getElementById('edit-character-form').onsubmit = function(){
    var editId = document.querySelector(`[name="chr-id"]`);
    var editName = document.querySelector(`[name="chr-name"]`);
    var editOccupation = document.querySelector(`[name="chr-occupation"]`);
    var editWeapon = document.querySelector(`[name="chr-weapon"]`);
    var editCartoon = document.querySelector(`[name="chr-cartoon"]`);
    var editButton = document.getElementById("send-the-data");
    charactersAPI.updateOneRegister(editId.value, {"name": `${editName.value}`, "occupation": `${editOccupation.value}`, "weapon": `${editWeapon.value}`, "cartoon": `${editCartoon.value}`})
    .then(res => {
      editButton.style.background = "#008000";
      console.log(res)
    })
    .catch(err => {
      editButton.style.background = "#FF0000";
      console.error(err)
    })
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    var newName = document.querySelector(`[name="name"]`);
    var newOccupation = document.querySelector(`[name="occupation"]`);
    var newWeapon = document.querySelector(`[name="weapon"]`);
    var newCartoon = document.querySelector(`[name="cartoon"]`);
    var createButton = document.getElementById("create-one");
    charactersAPI.createOneRegister({"name": `${newName.value}`, "occupation": `${newOccupation.value}`, "weapon": `${newWeapon.value}`, "cartoon": `${newCartoon.value}`})
    .then(res => {
      createButton.style.background = "#008000";
      console.log(res)
    })
    .catch(err => {
      createButton.style.background = "#FF0000";
      console.error(err)
    })
  }

