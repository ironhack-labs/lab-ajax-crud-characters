const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI
        .getFullList()
        .then((respfromAPI) => {
          document.querySelector(".characters-container").innerHTML = "";
          respfromAPI.data.forEach((char) => {
            document.querySelector(
              ".characters-container"
            ).innerHTML += `<div class="character-info">
        <div class="name">${char.name}</div>
        <div class="occupation">${char.occupation}</div>
        <div class="cartoon">${char.cartoon}</div>
        <div class="weapon">${char.weapon}</div>
      </div>`;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      const oneIdValue = document.getElementById("searchId");
      charactersAPI
        .getOneRegister(oneIdValue.value)
        .then((respfromAPI) => {
          document.querySelector(".characters-container").innerHTML = "";
          document.querySelector(
            ".characters-container"
          ).innerHTML += `<div class="character-info">
        <div class="name">${respfromAPI.data.name}</div>
        <div class="occupation">${respfromAPI.data.occupation}</div>
        <div class="cartoon">${respfromAPI.data.cartoon}</div>
        <div class="weapon">${respfromAPI.data.weapon}</div>
      </div>`;
        })
        .catch((err) => {
          console.log(err);
        });
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      const oneIdValue = document.getElementById("deleteId");
      charactersAPI
        .deleteOneRegister(oneIdValue.value)
        .then(() => {
          document.getElementById("delete-one").style.backgroundColor = "green";
        })
        .catch((err) => {
          document.getElementById("delete-one").style.backgroundColor = "red";
        });
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      const newCharName = document.getElementById("new-character-form").name
        .value;
      const newCharOccupation = document.getElementById("new-character-form")
        .occupation.value;
      const newCharWeapon = document.getElementById("new-character-form").weapon
        .value;
      const newCharCartoon = document.getElementById("new-character-form")
        .cartoon.checked;
      charactersAPI
        .createOneRegister({
          name: newCharName,
          occupation: newCharOccupation,
          weapon: newCharWeapon,
          cartoon: newCharCartoon,
        })
        .then(() => {
          document.getElementById("send-data").style.backgroundColor = "green";
        })
        .catch((err) => {
          document.getElementById("send-data").style.backgroundColor = "red";
        });
    });
});

// charactersAPI
//   .getFullList()
//   .then((respfromAPI) => {
//     console.log(respfromAPI.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
