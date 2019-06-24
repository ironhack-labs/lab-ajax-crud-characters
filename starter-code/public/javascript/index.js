const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI
      .getFullList()
      .then(APIRes => {
        const characters = Object.values(APIRes.data);
        displayCharacters(characters);
      })
      .catch(err => {
        console.log(err);
      });
  };

  document.getElementById("fetch-one").onclick = function(evt) {
    const id = document.querySelector("input[name=character-id]").value;
    charactersAPI
      .getOneRegister(id)
      .then(APIRes => {
        const characters = Object.values(APIRes.data);
        displayCharacters(characters);
      })
      .catch(err => {
        console.log(err);
      });
  };

  document.getElementById("delete-one").onclick = function() {
    const id = document.querySelector("input[name=character-id-delete]").value;
    charactersAPI
      .deleteOneRegister(id)
      .then(() => {
        const button = document.getElementById("delete-one");
        button.setAttribute("class", "ok");
      })
      .catch(err => {
        console.log(err);
        const button = document.getElementById("delete-one");
        button.setAttribute("class", "not-ok");
      });
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    const id = document.querySelector("#edit-character-form input[name=chr-id]")
      .value;
    const name = document.querySelector("#edit-character-form input[name=name]")
      .value;
    const occupation = document.querySelector(
      "#edit-character-form input[name=occupation]"
    ).value;
    const weapon = document.querySelector(
      "#edit-character-form  input[name=weapon]"
    ).value;
    const cartoon = document.querySelector(
      "#edit-character-form  input[name=cartoon]"
    ).value;
    console.log(name, occupation, weapon, cartoon);
    charactersAPI
      .updateOneRegister(id, name, occupation, weapon, cartoon)
      .then(() => {
        const button = document.getElementById("update-data");
        button.setAttribute("class", "ok");
      })
      .catch(err => {
        console.log(err);
        const button = document.getElementById("update-data");
        button.setAttribute("class", "not-ok");
      });
  };

  document.getElementById("new-character-form").onsubmit = function() {
    const name = document.querySelector("#new-character-form input[name=name]")
      .value;
    const occupation = document.querySelector(
      "#new-character-form input[name=occupation]"
    ).value;
    const weapon = document.querySelector(
      "#new-character-form input[name=weapon]"
    ).value;
    const cartoon = document.querySelector(
      "#new-character-form input[name=cartoon]"
    ).value;
    console.log(name, occupation, weapon, cartoon);
    charactersAPI
      .createOneRegister(name, occupation, weapon, cartoon)
      .then(() => {
        const button = document.getElementById("send-data");
        button.setAttribute("class", "ok");
      })
      .catch(err => {
        console.log(err);
        const button = document.getElementById("send-data");
        button.setAttribute("class", "not-ok");
      });
  };

  function displayCharacters(characters) {
    document.getElementsByClassName("characters-container")[0].innerHTML = "";
    characters.forEach(character => {
      document.getElementsByClassName(
        "characters-container"
      )[0].innerHTML += `<div class= "character-info">
    //<div class="name">${character.name}</div>
    //<div class="occupation">${character.occupation}</div>
    //<div class="cartoon">${character.cartoon}</div>
    //<div class="weapon">${character.weapon}</div>
    //</div>`;
    });
  }
});
