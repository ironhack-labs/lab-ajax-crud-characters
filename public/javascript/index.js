const charactersAPI = new APIHandler("http://localhost:8000");

const createCharacterBox = (elem) => {
  let characterInfo = document.createElement("div");
  characterInfo.innerHTML = `<div class='name'> Character Name: ${elem.name} </div>
          <div class="occupation">Character Occupation: ${elem.occupation}</div>
          <div class="cartoon">Is a Cartoon? ${elem.cartoon} </div>
          <div class="weapon">Character Weapon: ${elem.weapon} </div>`;
  characterInfo.classList.add("character-info");
  document.querySelector(".characters-container").appendChild(characterInfo);
};
// FETCH ALL
window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      event.preventDefault();

      charactersAPI
        .getFullList()
        .then((response) => {
          document.querySelector(".characters-container").innerHTML = "";
          response.data.forEach((elem) => {
            createCharacterBox(elem);
          });
        })
        .catch((error) => console.log(error));
    });

  // FETCH ONE BY ID
  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      event.preventDefault();

      const id = document.getElementById("character-id").value;
      charactersAPI
        .getOneRegister(id)
        .then((response) => {
          document.querySelector(".characters-container").innerHTML = "";
          createCharacterBox(response.data);

          document.querySelector(".edit-id").value = response.data.id;
          document.querySelector(".edit-name").value = response.data.name;
          document.querySelector(".edit-occupation").value =
            response.data.occupation;
          document.querySelector(".edit-weapon").value = response.data.weapon;
          document.querySelector(".edit-cartoon").checked =
            response.data.cartoon;
        })
        .catch((error) => console.log(error));
    });

  // DELETE
  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      event.preventDefault();

      const id = document.getElementById("character-id-delete").value;
      charactersAPI
        .deleteOneRegister(id)
        .then((response) => {
          document.querySelector("#delete-one").classList.add("active");
        })
        .catch((error) => {
          console.log(error);
          document.querySelector("#delete-one").classList.add("error");
        });
    });

  // EDIT CHARACTER
  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.querySelector(".edit-name").value;
      const occupation = document.querySelector(".edit-occupation").value;
      const weapon = document.querySelector(".edit-weapon").value;
      const cartoon = document.querySelector(".edit-cartoon").checked;
      const id = document.querySelector(".edit-id").value;
      const updatedCharacter = {
        name,
        occupation,
        weapon,
        cartoon,
        id,
      };

      charactersAPI
        .updateOneRegister(id, updatedCharacter)
        .then((response) => {
          document.querySelector("#update-data").classList.add("active");
        })
        .catch((error) => {
          document.querySelector("#update-data").classList.add("error");
          console.log(error);
        });
    });

  // CREATE NEW
  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.querySelector(".create-name").value;
      const occupation = document.querySelector(".create-occupation").value;
      const weapon = document.querySelector(".create-weapon").value;
      const cartoon = document.querySelector(".create-cartoon").checked;

      const newCharacter = {
        name,
        occupation,
        weapon,
        cartoon,
      };

      charactersAPI
        .createOneRegister(newCharacter)
        .then((response) => {
          document.querySelector("#send-data").classList.add("active");
        })
        .catch((error) => {
          document.querySelector("#send-data").classList.add("error");
          console.log(error);
        });
    });
});
