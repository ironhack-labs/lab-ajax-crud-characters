const charactersAPI = new APIHandler("http://localhost:8000");
const container = document.querySelector(".characters-container");
const disChars = document.querySelector(".characters-container");
const findId = document.querySelector('.operation [name="character-id"]');
const formCreate = document.getElementById("new-character-form");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI
      .getFullList()
      .then(APIRes => {
        displayCharacters(APIRes.data);
      })
      .catch(APIErr => {
        console.log(APIErr);
      });
  };

  document.getElementById("fetch-one").onclick = function() {
    console.log(findId.value);
    charactersAPI
      .getOneCharacter(findId.value)
      .then(APIRes => {
        displayCharacters([APIRes.data]);
      })
      .catch(APIErr => {
        console.log(APIErr);
      });
  };

  document.getElementById("new-character-form").onsubmit = function(evt) {
    evt.preventDefault();
    const name = formCreate.querySelector("[name=name]").value;
    const occupation = formCreate.querySelector("[name=occupation]").value;
    const weapon = formCreate.querySelector("[name=weapon]").value;
    const cartoon = formCreate.querySelector("[name=cartoon]").value;
    // console.log({ name, occupation, weapon, cartoon });
    charactersAPI.createOneCharacter({ name, occupation, weapon, cartoon });
  };

  document.getElementById("delete-one").onclick = function() {
    const id = document.querySelector("[name=character-id-delete]").value;

    charactersAPI.deleteOneCharacter(id).then(dbres => console.log(dbres));
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    console.log("edit");
  };
});

function displayCharacters(chars) {
  disChars.innerHTML = "";
  chars.forEach(chars => {
    disChars.innerHTML += `<div class="characters-container">
      <div class="character-info">
        <div class="name">Id: ${chars.id}</div>
        <div class="name">name: ${chars.name}</div>
        <div class="occupation">${chars.occupation}</div>
        <div class="cartoon">${chars.cartoon}</div>
        <div class="weapon">${chars.weapon}</div>
      </div>`;
  });
}
