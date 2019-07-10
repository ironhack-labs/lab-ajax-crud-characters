const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI
      .getFullList()
      .then(response => {
        console.log(response);
        const container = document.getElementsByClassName(
          "characters-container"
        )[0];
        container.innerHTML = "";
        response.data.forEach(char => {
          let cart = "It's a Cartoon!";
          if (!char.cartoon) {
            cart = "It's not a Cartoon ):";
          }
          container.innerHTML += `<div class="character-info">
        <div class="id">Id: ${char.id}</div>
        <div class="name">Name: ${char.name}</div>
        <div class="occupation">Occupation: ${char.occupation}</div>
        <div class="cartoon">${cart}</div>
        <div class="weapon">Weapon: ${char.weapon}</div>
      </div>`;
        });
        document.getElementById("fetch-all").style.background = "green";
      })
      .catch(error => {
        console.log(error);

        document.getElementById("fetch-all").style.background = "red";
      });
  };

  document.getElementById("fetch-one").onclick = function() {
    let id = document.getElementsByName("character-id")[0].value;
    charactersAPI
      .getOneRegister(id)
      .then(response => {
        const container = document.getElementsByClassName(
          "characters-container"
        )[0];
        container.innerHTML = "";

        let cart = "It's a Cartoon!";
        if (!response.data.cartoon) {
          cart = "It's not a Cartoon ):";
        }
        container.innerHTML += `<div class="character-info">
        <div class="id"> Id: ${response.data.id}</div>
        <div class="name"> Name: ${response.data.name}</div>
        <div class="occupation"> Occupation: ${response.data.occupation}</div>
        <div class="cartoon">${cart}</div>
        <div class="weapon"> Weapon: ${response.data.weapon}</div>
      </div>`;
        document.getElementById("fetch-one").style.background = "green";
      })
      .catch(error => {
        console.log(error);

        document.getElementById("fetch-one").style.background = "red";
      });
  };

  document.getElementById("delete-one").onclick = function() {
    let id = document.getElementsByName("character-id-delete")[0].value;
    charactersAPI
      .deleteOneRegister(id)
      .then(response => {
        document.getElementById("delete-one").style.background = "green";
      })
      .catch(error => {
        console.log(error)
        document.getElementById("delete-one").style.background = "red";
      });
  };

  document.getElementById("edit-character-form").onsubmit = function() {};

  document.getElementById("new-character-form").onsubmit = function() {
    let name = document.getElementsByName("name")[0].value;
    let occupation = document.getElementsByName("occupation")[0].value;
    let weapon = document.getElementsByName("weapon")[0].value;
    let cartoon = document.querySelector("#new-character-form #cartoon").checked;

    charactersAPI.createOneRegister(name, occupation, weapon, cartoon);
  };
});
