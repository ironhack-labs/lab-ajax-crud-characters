const charactersAPI = new APIHandler('http://localhost:8000');

//RETRIEVE ALL ENTRIES
window.addEventListener('load', () => {
  event.preventDefault()
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList().then(apiRes => {
        console.log(apiRes)
        apiRes.data.forEach(element => {
          document.getElementsByClassName("characters-container")[0].innerHTML +=
            `<div class="character-info">
       <div class="name">${element.name}</div>
       <div class="occupation">${element.occupation}</div>
       <div class="cartoon">${element.cartoon}</div>
       <div class="weapon">${element.weapon}</div>
     </div>`
        })
      })
      .catch(function (err) {
        console.log(err)
      });
  });
  //RETRIEVE ONE ENTRY
  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault()
    const getId = document.querySelector("input[name='character-id']")
    charactersAPI.getOneRegister(getId.value).then(apiRes => {
        console.log(apiRes)
        document.getElementsByClassName("characters-container")[0].innerHTML +=
          `<div class="character-info">
      <div class="name">${apiRes.data.name}</div>
      <div class="occupation">${apiRes.data.occupation}</div>
      <div class="cartoon">${apiRes.data.cartoon}</div>
      <div class="weapon">${apiRes.data.weapon}</div>
    </div>`
      })
      .catch(function (err) {
        console.log(err)
      });
  });
  //DELETE EXISTING ENTRY
  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault()
    const getId = document.querySelector(".operation.delete input")
    charactersAPI.deleteOneRegister(getId.value).then(apiRes => {
        console.log(apiRes)
        document.getElementsByClassName("characters-container")[0].innerHTML +=
          `<div class="character-info">
      <div class="name">${apiRes.data.name}</div>
      <div class="occupation">${apiRes.data.occupation}</div>
      <div class="cartoon">${apiRes.data.cartoon}</div>
      <div class="weapon">${apiRes.data.weapon}</div>
    </div>`
      })
      .catch(function (err) {
        console.log(err)
      });
  });
  //EDIT EXISTING ENTRY
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const update = document.getElementById("edit-character-form");
    const characId = update.querySelector("input[name='chr-id']");
    const newName = update.querySelector("input[name='name']");
    const newOccupation = update.querySelector("input[name='occupation']");
    const newWeapon = update.querySelector("input[name='weapon']");
    const newIsCartoon = update.querySelector("input[name='cartoon']");

    const edit = {
      name: newName.value,
      occupation: newOccupation.value,
      weapon: newWeapon.value,
      cartoon: newIsCartoon.checked,
    };

    charactersAPI.updateOneRegister(characId.value, edit)
      .then(apiRes => {
        console.log(apiRes)
        update.querySelector("#update-data");
        charactersAPI.getOneRegister(getId.value)
          .then(apiRes => {
            console.log(apiRes)
            document.getElementsByClassName("characters-container")[0].innerHTML +=
              `<div class="character-info">
              <div class="name">${apiRes.data.name}</div>
              <div class="occupation">${apiRes.data.occupation}</div>
              <div class="cartoon">${apiRes.data.cartoon}</div>
              <div class="weapon">${apiRes.data.weapon}</div>
              </div>`
          })
          .catch(function (err) {
            console.log(err)
          })
      })
      .catch((err) => {
        update.querySelector("#update-data");
      });
  });
  // CREATE NEW ENTRY
  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const newCharac = document.getElementById("new-character-form");
    const newName = newCharac.querySelector("input[name='name']");
    const newOccupation = newCharac.querySelector("input[name='occupation']");
    const newWeapon = newCharac.querySelector("input[name='weapon']");
    const newIsCartoon = newCharac.querySelector("input[name='cartoon']");
    const createNew = {
      name: newName.value,
      occupation: newOccupation.value,
      weapon: newWeapon.value,
      cartoon: newIsCartoon.checked,
    };
    charactersAPI.createOneRegister(createNew)
      .then(apiRes => {
        console.log(apiRes)
        event.target.querySelector("#create-data");
        charactersAPI.getOneRegister(getId.value)
          .then(apiRes => {
            console.log(apiRes)
            document.getElementsByClassName("characters-container")[0].innerHTML +=
              `<div class="character-info">
              <div class="name">${apiRes.data.name}</div>
              <div class="occupation">${apiRes.data.occupation}</div>
              <div class="cartoon">${apiRes.data.cartoon}</div>
              <div class="weapon">${apiRes.data.weapon}</div>
              </div>`
          })
          .catch(function (err) {
            console.log(err)
          })
      })
      .catch((err) => {
        event.target.querySelector("#create-data");
      });
  });
});