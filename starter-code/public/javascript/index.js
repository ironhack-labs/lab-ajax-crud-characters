const charactersAPI = new APIHandler("http://localhost:8000");

console.log(charactersAPI);

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function(event) {
      charactersAPI
        .getFullList()
        .then(apiRes => {
          const characters = apiRes.data;
          let tpl = "";
          characters.forEach(char => {
            tpl += characterCard(char);
          });
          const container = document.querySelector(".characters-container");
          container.innerHTML = tpl;
        })
        .catch(err => console.log(err));
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function(event) {
      const id = document.getElementById("character-id").value;

      charactersAPI
        .getOneRegister(id)
        .then(apiRes => {
          const character = apiRes.data;
          const container = document.querySelector(".characters-container");
          container.innerHTML = characterCard(character);
        })
        .catch(err => console.log(err));
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function(event) {
      const id = document.getElementById("character-id-delete").value;
      charactersAPI
        .deleteOneRegister(id)
        .then(apiRes => {
          document.getElementById("delete-one").classList.add("active");
          document.getElementById("delete-one").classList.remove("inactive");
        })
        .catch(err => {
          document.getElementById("delete-one").classList.add("inactive");
          document.getElementById("delete-one").classList.remove("active");
        });
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function(event) {
      event.preventDefault();
      const name = document.getElementById("edit-name").value;
      const occupation = document.getElementById("edit-occupation").value;
      const weapon = document.getElementById("edit-weapon").value;
      const cartoon = document.getElementById("edit-cartoon").value;
      const id = document.getElementById("edit-id").value;
      const info = {
        id: id,
        name: name,
        occupation: occupation,
        weapon: weapon,
        cartoon: cartoon
      };
      charactersAPI
        .updateOneRegister(id, info)
        .then(apiRes => {
          document.getElementById("edit-data").classList.add("active");
          document.getElementById("edit-data").classList.remove("inactive");
        })
        .catch(err => {
          document.getElementById("edit-data").classList.add("inactive");
          document.getElementById("edit-data").classList.remove("active");
        });
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function(event) {
      event.preventDefault();
      const name = document.getElementById("create-name").value;
      const occupation = document.getElementById("create-occupation").value;
      const weapon = document.getElementById("create-weapon").value;
      const cartoon = document.getElementById("create-cartoon").value;
      const info = {
        name: name,
        occupation: occupation,
        weapon: weapon,
        cartoon: cartoon
      };
      charactersAPI
        .createOneRegister(info)
        .then(apiRes => {
          document.getElementById("send-data").classList.add("active");
          document.getElementById("send-data").classList.remove("inactive");
        })
        .catch(err => {
          document.getElementById("send-data").classList.add("inactive");
          document.getElementById("send-data").classList.remove("active");
        });
    });
});

function characterCard(character) {
  return `<div class="character-info">
    <div class="name">Character Name : ${character.name}</div>
    <div class="occupation">Character Occupation : ${character.occupation}</div>
    <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
    <div class="weapon">Character Weapon ${character.weapon}</div>
  </div>`;
}
