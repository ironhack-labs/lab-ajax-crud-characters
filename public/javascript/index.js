const charactersAPI = new APIHandler("http://localhost:8000");

function eraseAll() {
  document.querySelector(".characters-container").innerHTML = "";
}

// function eraseOne(id) {
//   document.getElementById(`id-${id}`).remove();
// }

function displayOneCharacter(res) {
  document.querySelector(
    ".characters-container"
  ).innerHTML += `<div class="character-info" id="id-${res.id}">
  <div class="id">Id: ${res.id}</div>
    <div class="name">Name: ${res.name}</div>
    <div class="occupation">Occupation: ${res.occupation}</div>
    <div class="cartoon">Is cartoon?:${res.cartoon}</div>
    <div class="weapon">Weapon:${res.weapon}</div></div>`;
}

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      eraseAll();
      charactersAPI
        .getFullList()
        .then((result) => {
          const allCharacters = result.data;
          allCharacters.forEach((e) => displayOneCharacter(e));
        })
        .catch((err) => console.log(err));
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      const id = event.target.previousElementSibling.value;
      eraseAll();
      charactersAPI
        .getOneRegister(id)
        .then((result) => displayOneCharacter(result.data))
        .catch((err) => console.log(err));
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const id = event.target.previousElementSibling.value;
      charactersAPI.deleteOneRegister(id);
      document.querySelector(".character-id-delete");
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const id = document.getElementById("edit-id").value;
      const name = document.getElementById("edit-name").value;
      const occupation = document.getElementById("edit-occupation").value;
      const weapon = document.getElementById("edit-weapon").value;
      const cartoon = document.getElementById("edit-cartoon").checked
        ? true
        : false;
      const body = {
        name: name,
        occupation: occupation,
        weapon: weapon,
        cartoon: cartoon,
      };
      charactersAPI.updateOneRegister(id, body).then((result) => {
        displayOneCharacter(result);
      });
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      alert("coucou Tonin");
      const name = document.getElementById("new-name").value;
      const occupation = document.getElementById("new-occupation").value;
      const weapon = document.getElementById("new-weapon").value;
      const cartoon = document.getElementById("new-cartoon").checked
        ? true
        : false;
      const body = {
        name: name,
        occupation: occupation,
        weapon: weapon,
        cartoon: cartoon,
      };
      console.log(body);
      charactersAPI
        .createOneRegister(body)
        .then((body) => {
          displayOneCharacter(body.data);
        })
        .catch((err) => console.log(err));
    });
});
