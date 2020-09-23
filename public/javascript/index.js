const charactersAPI = new APIHandler("http://localhost:8000");
const charactersDetails = document.querySelector(".characters-container");
const inputFetch = document.getElementById("fetchUno");
const deleteBtn = document.getElementById("deleteIt");

//EDIT

const editName = document.getElementById("editName");
const editOccupation = document.getElementById("editOccupation");
const editCartoon = document.getElementById("editCartoon");
const editWeapon = document.getElementById("editWeapon");
const editID = document.getElementById("editID");

//CREATE
const idName = document.getElementById("idName");
const idOccupation = document.getElementById("idOccupation");
const idCartoon = document.getElementById("idCartoon");
const idWeapon = document.getElementById("idWeapon");

window.addEventListener("load", () => {

  document.getElementById("fetch-all").addEventListener("click", async function (event) {
      try {
        const reponse = await charactersAPI.getFullList();
        charactersDetails.innerHTML = "";
        reponse.data.forEach((character) => {
          console.log(character);
          charactersDetails.innerHTML += `<div class="character-info">
       <div class="name">${character.name} </div>
       <div class="occupation">${character.occupation} </div>
       <div class="cartoon">${character.cartoon}</div>
       <div class="weapon">${character.weapon}</div>
     </div>`;
        });
      } catch (error) {
        console.log(error);
      }
    });

  document.getElementById("fetch-one").addEventListener("click", async function (event) {
      try {
        charactersDetails.innerHTML = "";
        const reponse = await charactersAPI.getOneRegister(inputFetch.value);
        console.log(reponse);
        charactersDetails.innerHTML += `<div class="character-info">
       <div class="name">${reponse.data.name} </div>
       <div class="occupation">${reponse.data.occupation} </div>
       <div class="cartoon">${reponse.data.cartoon}</div>
       <div class="weapon">${reponse.data.weapon}</div>
     </div>`;
      } catch (error) {
        console.log(error);
      }
    });

  document.getElementById("delete-one").addEventListener("click", async function (event) {
      try {

        charactersDetails.innerHTML = "";
        const reponse = await charactersAPI.deleteOneRegister(deleteIt.value);
        const displayAgain = await charactersAPI.getFullList();
        displayAgain.data.forEach((character) => {
        console.log(character);
        charactersDetails.innerHTML += `<div class="character-info">
       <div class="name">${character.name} </div>
       <div class="occupation">${character.occupation} </div>
       <div class="cartoon">${character.cartoon}</div>
       <div class="weapon">${character.weapon}</div>
     </div>`;
        });
      } catch (error) {
        console.log(error);
      }
    });

  document.getElementById("edit-character-form").addEventListener("submit", async function (event) {
    event.preventDefault();
    try {
      const reponse = await charactersAPI.updateOneRegister(editID.value, {name:editName.value, occupation:editOccupation.value, cartoon:editCartoon.checked, weapon:editWeapon.value})
      
    } catch (error) {
      console.log(error)
    }
  });




  document.getElementById("new-character-form").addEventListener("submit", async function (event) {
    event.preventDefault();
    try {
      const reponse = await charactersAPI.createOneRegister({ name:idName.value, occupation:idOccupation.value, cartoon:idCartoon.checked, weapon:idWeapon.value})
    } catch (error) {
      console.log(error)
    }
  })



});