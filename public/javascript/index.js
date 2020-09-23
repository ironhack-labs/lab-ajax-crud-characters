import APIHandler from "./APIHandler.js";

const charactersAPI = new APIHandler("http://localhost:8000");
const fetchDiv = document.querySelector(".characters-container");
const searchId = document.querySelector("#search-id");
const deleteId = document.querySelector("#delete-id");
const btnDelete = document.querySelector("#delete-one");
const updateId = document.querySelector("#update-id");
const updateName = document.querySelector("#update-name");
const updateOccupation = document.querySelector("#update-occupation");
const updateWeapon = document.querySelector("#update-weapon");
const updateCarton = document.querySelector("#update-carton");
const btnUpdate = document.querySelector("#update-data");

const newName = document.querySelector("#new-name");
const newOccupation = document.querySelector("#new-occupation");
const newWeapon = document.querySelector("#new-weapon");
const newCarton = document.querySelector("#new-carton");
const btnNew = document.querySelector("#new-data");


window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", async function (event) {
      try {
        const createAll = await charactersAPI.getFullList();
        fetchDiv.innerHTML = "";
        createAll.data.forEach(function (character) {
          fetchDiv.innerHTML += `<div class="character-info">
        <div class="name">Id: ${character.id}</div>
        <div class="name">Name: ${character.name}</div>
        <div class="occupation">Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a cartoon?: ${character.cartoon}</div>
        <div class="weapon">Weapon: ${character.weapon}</div>
        </div>`;
        });
      } catch (error) {
        console.log("error");
      }
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", async function (event) {
      try {
        const updateOne = await charactersAPI.getOneRegister(searchId.value);
        fetchDiv.innerHTML = "";
        fetchDiv.innerHTML += `<div class="character-info">
          <div class="name">Id: ${updateOne.data.id}</div>
          <div class="name">Name: ${updateOne.data.name}</div>
          <div class="occupation">Occupation: ${updateOne.data.occupation}</div>
          <div class="cartoon">Is a cartoon?: ${updateOne.data.cartoon}</div>
          <div class="weapon">Weapon: ${updateOne.data.weapon}</div>
          </div>`;
          searchId.value="";
      } catch (error) {
        console.log("Error");
      }
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", async function (event) {
      try {
        const deleteOne = await charactersAPI.deleteOneRegister(deleteId.value);
        const createAll = await charactersAPI.getFullList();
        fetchDiv.innerHTML = "";
        createAll.data.forEach(function (character) {
          fetchDiv.innerHTML += `<div class="character-info">
          <div class="name">Id: ${character.id}</div>
          <div class="name">Name: ${character.name}</div>
          <div class="occupation">Occupation: ${character.occupation}</div>
          <div class="cartoon">Is a cartoon?: ${character.cartoon}</div>
          <div class="weapon">Weapon: ${character.weapon}</div>
          </div>`;
          deleteId.value="";
          btnDelete.classList.add("green-button");
          setInterval(() => {
            btnDelete.classList.remove("green-button");
          }, 3000);
        });
      } catch (error) {
        btnDelete.classList.add("red-button");
        setInterval(() => {
          btnDelete.classList.remove("red-button");
        }, 3000);
      }
    });


  document
    .getElementById("edit-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
      try {
        const updateOne = await charactersAPI.updateOneRegister(updateId.value, 
          {name: updateName.value,
        occupation: updateOccupation.value,
        weapon: updateWeapon.value,
        cartoon: updateCarton.checked});
        const createAll = await charactersAPI.getFullList();
        fetchDiv.innerHTML = "";
        createAll.data.forEach(function (character) {
          fetchDiv.innerHTML += `<div class="character-info">
        <div class="name">Id: ${character.id}</div>
        <div class="name">Name: ${character.name}</div>
        <div class="occupation">Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a cartoon?: ${character.cartoon}</div>
        <div class="weapon">Weapon: ${character.weapon}</div>
        </div>`;
        updateId.value=""; 
        updateName.value="";
        updateOccupation.value="";
        updateWeapon.value="";
        updateCarton.checked="";
        });
        btnUpdate.classList.add("green-button");
        setInterval(() => {
          btnUpdate.classList.remove("green-button");
        }, 3000);
      } catch (error) {
        btnUpdate.classList.add("red-button");
        setInterval(() => {
          btnUpdate.classList.remove("red-button");
        }, 3000);
      }
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
      try {
        const createOne = await charactersAPI.createOneRegister( 
          {name: newName.value,
        occupation: newOccupation.value,
        weapon: newWeapon.value,
        cartoon: newCarton.checked});
        const createAll = await charactersAPI.getFullList();
        fetchDiv.innerHTML = "";
        createAll.data.forEach(function (character) {
          fetchDiv.innerHTML += `<div class="character-info">
        <div class="name">Id: ${character.id}</div>
        <div class="name">Name: ${character.name}</div>
        <div class="occupation">Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a cartoon?: ${character.cartoon}</div>
        <div class="weapon">Weapon: ${character.weapon}</div>
        </div>`;
        newName.value="";
        newOccupation.value ="";
        newWeapon.value="";
        newCarton.checked="";
        });
        btnNew.classList.add("green-button");
        setInterval(() => {
          btnNew.classList.remove("green-button");
        }, 3000);
      } catch (error) {
        btnNew.classList.add("red-button");
        setInterval(() => {
          btnNew.classList.remove("red-button");
        }, 3000);
      }
    });
  })

