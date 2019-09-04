const charactersAPI = new APIHandler("http://localhost:8000");
const container = document.querySelector(".characters");
const disChars = document.querySelector(".characters-container");

const findId = document.querySelector('.operation [name="character-id"]');
// console.log(findId);

const formCreate = document.getElementById("new-character-form");

const formUpdate = document.getElementById("edit-character-form");

const formDelete = document.querySelector(".operation.delete");

function displayCharacters(chars) {
  // console.log(chars);
  disChars.innerHTML = "";
  chars.forEach(chars => {
    disChars.innerHTML += `
  <div data-character-id="${chars.id}"class="character-info">
  <div class="name">Id: ${chars.id}</div>
    <div class="name">Name ${chars.name}</div>
    <div class="occupation">Occupation ${chars.occupation}</div>
    <div class="cartoon">Is a Cartoon? ${chars.cartoon}</div>
    <div class="weapon">Weapon ${chars.weapon}</div>
  </div>
</div>`;
  });
}

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
    charactersAPI
      .getOneCharacter(findId.value)
      .then(APIRes => {
        displayCharacters([APIRes.data]);
      })
      .catch(APIErr => {
        console.log(APIErr);
      });
  };

  document.getElementById("delete-one-character").onclick = function(evt) {
    evt.preventDefault();
    const id = formDelete.querySelector("[name=character-id-delete]").value;
    charactersAPI
      .deleteOneCharacter(id)
      .then(APIRes => {
        displayCharacters([APIRes.data]);
      })
      .catch(APIErr => {
        console.log(APIErr);
      });
  };

  document.getElementById("edit-character-form").onsubmit = function(evt) {
    evt.preventDefault();
    const id = formUpdate.querySelector("[name=chr-id]").value;
    const name = formUpdate.querySelector("[name=name]").value;
    const occupation = formUpdate.querySelector("[name=occupation]").value;
    const weapon = formUpdate.querySelector("[name=weapon]").value;
    const cartoon = formUpdate.querySelector("[name=cartoon]").checked;
    charactersAPI
      .updateOneCharacter(id, { name, occupation, weapon, cartoon })
      .then(APIRes => {
        charactersAPI.getFullList().then(fullList => {
          displayCharacters(fullList.data);
        });
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
    const cartoon = formCreate.querySelector("[name=cartoon]").checked;
    console.log({ name, occupation, weapon, cartoon });
    charactersAPI
      .createOneCharacter({ name, occupation, weapon, cartoon })
      .then(APIRes => {
        displayCharacters([APIRes.data]);
      })
      .catch(APIErr => {
        console.log(APIErr);
      });
  };
});
