const charactersAPI = new APIHandler("http://localhost:8000");
const disCharacters = document.querySelector(".characters-container");
const findId = document.querySelector(`.operation [name="character-id"]`);
const formCreate = document.getElementById(`new-character-form`);

function displayCharacters(chars) {
  chars.forEach(char => {
    disCharacters.innerHTML += `<div class="character-info">
    <div class="name"> Name : ${char.name}</div>
    <div class="occupation">Occupation : ${char.occupation} </div>
    <div class="cartoon">Is a Cartoon? : ${char.cartoon} </div>
    <div class="weapon">Weapon : ${char.weapon} </div>
  </div>`;
  });
}

charactersAPI
  .getFullList()
  .then(res => console.log(res.data))
  .catch(err => console.log(err));

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI
      .getFullList()
      .then(APIRes => {
        displayCharacters(APIRes.data);
        // console.log(APIRes.data);
      })
      .catch(APIErr => {
        console.log(APIErr);
      });
  };

  document.getElementById("fetch-one").onclick = function() {
    charactersAPI
      .getOneRegister(findId.value)
      .then(APIRes => {
        displayCharacters([APIRes.data]);
      })
      .catch(APIErr => {
        console.log(APIErr);
      });
  };

  document.getElementById("delete-one").onclick = function() {
    const id = document.querySelector("[name=character-id-delete]").value;
    charactersAPI
      .deleteOneRegister(id)
      .then(APIRes => {
        console.log(APIRres);
      })
      .catch(APIErr => {
        console.log(APIErr);
      });
  };

  document.getElementById("edit-character-form").onsubmit = function(e) {};

  document.getElementById("new-character-form").onsubmit = function(evt) {
    evt.preventDefault();
    const name = formCreate.querySelector("[name=name]").value;
    const occupation = formCreate.querySelector("[name=occupation]").value;
    const weapon = formCreate.querySelector("[name=weapon]").value;
    const cartoon = formCreate.querySelector("[name=cartoon]").checked;
    console.log({ name, occupation, weapon, cartoon });
    charactersAPI.createOneRegister({
      name,
      occupation,
      weapon,
      cartoon
    });
  };
});
