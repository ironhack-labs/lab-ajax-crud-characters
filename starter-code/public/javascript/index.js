const charactersAPI = new APIHandler("http://localhost:8000")
const divContainer = document.querySelector(".characters-container");
const inputID = document.getElementById("inputID");
const deleteID = document.getElementById("deleteID");
const delBtn = document.getElementById("delete-one");
const createName = document.getElementById("createName");
const createOccupation = document.getElementById("createOccupation");
const createWeapon = document.getElementById("createWeapon");
const valueCartoon = document.getElementById("valueCartoon")
const createBtn = document.getElementById("create-data");
const updateBtn = document.getElementById("send-data");
const updateID = document.getElementById("updateID");
const updateName = document.getElementById("updateName");
const updateOccupation = document.getElementById("updateOccupation");
const updateCartoon = document.getElementById("updateCartoon");
const updateWeapon = document.getElementById("updateWeapon");

const drawItems = (data) => {
  divContainer.innerHTML = '';
  data.forEach(item => {
    let divCharacterInfo = document.createElement("div");
    divCharacterInfo.classList.add("character-info");
    let divCharacterName = document.createElement("div");
    divCharacterName.classList.add("name");
    divCharacterName.innerText = `Name: ${item.name}`;
    let divCharacterOccupation = document.createElement("div");
    divCharacterOccupation.classList.add("occupation");
    divCharacterOccupation.innerText = `Occupation: ${item.occupation}`;
    let divCharacterCartoon = document.createElement("div")
    divCharacterCartoon.classList.add("cartoon")
    if (item.cartoon)
      divCharacterCartoon.innerText = "Cartoon: Yes";
    else
      divCharacterCartoon.innerText = "Cartoon: No";
    let divCharacterWeapon = document.createElement("div");
    divCharacterWeapon.classList.add("weapon");
    divCharacterWeapon.innerText = `Weapon: ${item.weapon}`;
    divCharacterInfo.appendChild(divCharacterName);
    divCharacterInfo.appendChild(divCharacterOccupation);
    divCharacterInfo.appendChild(divCharacterCartoon);
    divCharacterInfo.appendChild(divCharacterWeapon);
    divContainer.appendChild(divCharacterInfo);
  });
}

const changeColorDelBtn = (err) =>{
  if (err)
    delBtn.classList.toggle("error");
  else
    delBtn.classList.toggle("active");
}
const changeColorCreateBtn = (err) =>{
  if (err)
    createBtn.classList.toggle("error");
  else
    createBtn.classList.toggle("active");
}
const changeColorUpdateBtn = (err) =>{
  if (err)
    updateBtn.classList.toggle("error");
  else
    updateBtn.classList.toggle("active");
}

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList(drawItems);
  }
  
  document.getElementById('fetch-one').onclick = function(){
    charactersAPI.getOneRegister(inputID.value, drawItems);
  }
  
  document.getElementById('delete-one').onclick = function(){
  charactersAPI.deleteOneRegister(deleteID.value, changeColorDelBtn);
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();
    //console.log(valueCartoon);
    let updatedCharacter = {
      name: updateName.value,
      occupation: updateOccupation.value,
      weapon: updateWeapon.value,
      cartoon: updateCartoon.checked
    }
    charactersAPI.updateOneRegister(updateID.value,updatedCharacter,changeColorUpdateBtn)  
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();
    //console.log(valueCartoon);
    let newCharacter = {
      name: createName.value,
      occupation: createOccupation.value,
      weapon: createWeapon.value,
      cartoon: valueCartoon.checked
    }
    charactersAPI.createOneRegister(newCharacter,changeColorCreateBtn)
  }
})
