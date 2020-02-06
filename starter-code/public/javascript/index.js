import APIHandler from "./APIHandler.js";

const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    const info = document.querySelector(".characters-container");
    info.innerHTML = "";
    charactersAPI.getFullList()
      .then(dbRes => {
        dbRes.data.forEach(data => {
          info.innerHTML += ` <div class="character-info">
            <div class="name">Character Name : ${data.name}</div>
            <div class="occupation">Character Occupation : ${data.occupation}</div>
            <div class="cartoon">Is a cartoon ? : ${data.cartoon}</div>
            <div class="weapon">Character weapon : ${data.weapon}</div>
            </div>
          `
        });
      })
      .catch(dbErr => {
        console.error(dbErr)
      });
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const info = document.querySelector(".characters-container");
    info.innerHTML = "";
    const characterId = document.querySelector("#name-input");
    charactersAPI.getOneRegister(characterId.value)
    .then(dbRes => {
      info.innerHTML += `<div class="character-info">
            <div class="name">Character Name : ${dbRes.data.name}</div>
            <div class="occupation">Character Occupation : ${dbRes.data.occupation}</div>
            <div class="cartoon">Is a cartoon ? : ${dbRes.data.cartoon}</div>
            <div class="weapon">Character weapon : ${dbRes.data.weapon}</div>
            </div>`
    })
    .catch(dbErr =>  {
      console.error(dbErr);
    });
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const deleteId = document.querySelector("#delete-input");
    charactersAPI.deleteOneRegister(deleteId.value)

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const buttonUpdate = document.querySelector('#send-data-update')
    const charId = document.querySelector('[name = chr-id]').value
    const name = document.querySelector('[name = nameUpdate]').value;
    const occupation = document.querySelector('[name = occupationUpdate]').value
    const weapon = document.querySelector('[name = weaponUpdate]').value
    const cartoon = document.querySelector('[name = cartoonUpdate]').checked
    charactersAPI.updateOneRegister(charId, name, occupation, weapon, cartoon)
    .then(dbRes => {
      console.log(dbRes);
      buttonUpdate.classList.add("is-green");
    })
    .catch(dbErr =>  {
      console.log(dbErr)
      buttonUpdate.classList.add("is-red")
    })
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const buttonCreate = document.querySelector('#send-data-create')
    const name = document.querySelector('[name = name]').value;
    const occupation = document.querySelector('[name = occupation]').value
    const weapon = document.querySelector('[name = weapon]').value
    const cartoon = document.querySelector('[name = cartoon]').checked
    charactersAPI.createOneRegister(name, occupation, weapon, cartoon)
      .then(dbRes => {
        console.log(dbRes)
        buttonCreate.classList.add('is-green');
    })
      .catch(dbErr => {
        buttonCreate.classList.add('is-red');
        console.error(dbErr)
    })
  });


});
