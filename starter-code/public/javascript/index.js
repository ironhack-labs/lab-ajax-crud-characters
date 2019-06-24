// import APIHandler from ".APIHandler.js";
const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI
      .getFullList()
      .then(apiCharac => {
        let characContainer = document.querySelector(".characters-container");
        characContainer.innerHTML = "";
        apiCharac.data.forEach(charac => {
          characContainer.innerHTML += `<div class="character-info">
          <div class="id">Id: <span>${charac.id}</span></div>
          <div class="name">Name: <span>${charac.name}</span></div>
          <div class="occupation">Occupation: <span>${
            charac.occupation
          }</span></div>
          <div class="cartoon">Is a cartoon? <span>${
            charac.cartoon
          }</span></div>
          <div class="weapon">Weapon: <span>${
            charac.weapon
          }</span></div></div>`;
        });
      })
      .catch(apiErr => console.log(apiErr));
  };

  document.getElementById("fetch-one").onclick = function() {
    const userInput = document.querySelector(`[name=character-id]`);
    // console.log(userInput);
    let characContainer = document.querySelector(".characters-container");
    charactersAPI
      .getOneRegister(userInput.value)
      .then(apiCharac => {
        characContainer.innerHTML = "";
        characContainer.innerHTML += `<div class="character-info">
        <div class="id">Id: <span>${apiCharac.data.id}</span></div>
        <div class="name">Name: <span>${apiCharac.data.name}</span></div>
        <div class="occupation">Occupation: <span>${
          apiCharac.data.occupation
        }</span></div>
        <div class="cartoon">Is a cartoon? <span>${
          apiCharac.data.cartoon
        }</span></div>
        <div class="weapon">Weapon: <span>${
          apiCharac.data.weapon
        }</span></div></div>`;
      })
      .catch(apiErr => console.log(apiErr));
  };

  document.getElementById("new-character-form").onsubmit = function() {
    const userNameInput = document.querySelector(`[name=name]`);
    const userOccupationInput = document.querySelector(`[name=occupation]`);
    const userWeaponInput = document.querySelector(`[name=weapon]`);
    const userCartoonInput = document.querySelector(`[name=cartoon]`);
    charactersAPI
      .createOneRegister({
        name: userNameInput.value,
        occupation: userOccupationInput.value,
        weapon: userWeaponInput.value,
        cartoon: userCartoonInput.checked
      })
      .then(apiRes => {
        document.getElementById("send-data").style.backgroundColor = "green";
        console.log(apiRes.data);
      })
      .catch(apiErr => {
        document.getElementById("send-data").style.backgroundColor = "red";
        setTimeout(() => {
          document.getElementById("send-data").style.backgroundColor =
            "initial";
        }, 1100);
        console.log(apiErr);
      });
  };
  document.getElementById("delete-one").onclick = function() {
    const userInput = document.querySelector(`[name=character-id-delete]`);
    charactersAPI
      .deleteOneRegister(userInput.value)
      .then(apiRes => {
        document.getElementById("delete-one").style.backgroundColor = "green";
        console.log(apiRes.data);
      })
      .catch(apiErr => {
        document.getElementById("delete-one").style.backgroundColor = "red";
        setTimeout(() => {
          document.getElementById("delete-one").style.backgroundColor =
            "initial";
        }, 1100);
        console.log(apiErr);
      });
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    const updateId = document.querySelector(`[name=chr-id]`);
    const updateName = document.querySelector(
      "#edit-character-form > div:nth-child(2) > input[type=text]"
    );
    const updateOccupation = document.querySelector(
      "#edit-character-form > div:nth-child(3) > input[type=text]"
    );
    const updateWeapon = document.querySelector(
      "#edit-character-form > div:nth-child(4) > input[type=text]"
    );
    const updateCartoon = document.querySelector(
      "#edit-character-form > div:nth-child(5) > input[type=checkbox]"
    );

    // console.log(evt.target.children);

    charactersAPI
      .updateOneRegister(updateId.value, {
        name: updateName.value,
        occupation: updateOccupation.value,
        weapon: updateWeapon.value,
        cartoon: updateCartoon.checked
      })
      .then(apiRes => {
        document.getElementById("update-data").style.backgroundColor = "green";
        console.log(apiRes.data);
      })
      .catch(apiErr => {
        document.getElementById("update-data").style.backgroundColor = "red";
        setTimeout(() => {
          document.getElementById("update-data").style.backgroundColor =
            "initial";
        }, 1100);
        console.log(apiErr);
      });
  };
});
