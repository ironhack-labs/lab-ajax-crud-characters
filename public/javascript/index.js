const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI
        .getFullList()
        .then((response) => {
          const charArr = response.data;
          const eachChar = document.querySelector(".characters-container");
          eachChar.innerHTML = "";
          charArr.forEach((char) => {
            eachChar.innerHTML += `<div class="character-info">
          <div class='id'>id: <span>${char.id} </span></div>
          <div class="name">name: <span>${char.name} </span></div>
          <div class="name">occupation: <span>${char.occupation} </span></div>
          <div class="name">Cartoon? <span>${char.cartoon} </span></div>
          <div class="name">Weapon: <span>${char.weapon} </span></div>
          </div>`;
          });
        })
        .catch((err) => console.log(err));
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      charactersAPI
        .getOneRegister(document.getElementsByName("character-id")[0].value)
        .then((response) => {
          const char = response.data;
          document.querySelector(
            ".characters-container"
          ).innerHTML += `<div class="character-info">
          <div class='id'>id: <span>${char.id} </span></div>
          <div class="name">name: <span>${char.name} </span></div>
          <div class="name">occupation: <span>${char.occupation} </span></div>
          <div class="name">Cartoon? <span>${char.cartoon} </span></div>
          <div class="name">Weapon: <span>${char.weapon} </span></div>
          </div>`;
        })
        .catch((err) => console.log(err));
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      charactersAPI
        .deleteOneRegister(
          document.getElementsByName("character-id-delete")[0].value
        )
        .then(() => {
          document.querySelector("#delete-one").backgroundColor = "green";
        })
        .catch((err) => {
          document.querySelector("#delete-one").backgroundColor = "red";
        });
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {});
});
