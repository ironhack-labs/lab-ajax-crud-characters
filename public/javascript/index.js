const charactersAPI = new APIHandler("http://localhost:8000");

const characterList = document.querySelector(".characters-container");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      //axios.get('http://localhost:8000/characters')
      charactersAPI
        .getFullList()
        .then((response) => {
          characterList.innerHTML = "";
          response.data.forEach(function (character) {
            const newDiv = document.createElement("div");
            newDiv.innerHTML = `<div class="character-info">
  <div class="name">Character Name: ${character.name}</div>
  <div class="occupation">Character Occupation: ${character.occupation}</div>
  <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
  <div class="weapon">Character Weapon ${character.weapon}</div>
</div>`;

            characterList.appendChild(newDiv);
          });
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      const idInput = document.getElementsByName("character-id")[0].value;
      console.log(idInput);
      charactersAPI
        .getOneRegister(idInput)
        .then((response) => {
          characterList.innerHTML = "";
          const aCharacter = response.data;
          const newDiv = document.createElement("div");
          newDiv.innerHTML = `<div class="character-info">
      <div class="name">Character Name: ${aCharacter.name}</div>
      <div class="occupation">Character Occupation: ${aCharacter.occupation}</div>
      <div class="cartoon">Is a Cartoon? ${aCharacter.cartoon}</div>
      <div class="weapon">Character Weapon ${aCharacter.weapon}</div>
    </div>`;

          characterList.appendChild(newDiv);
        })
        .catch((error) => {
          console.log(error);
        });
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      const deletId = document.getElementsByName("character-id-delete")[0]
        .value;
      charactersAPI.deleteOneRegister(deletId);
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const id = document.getElementsByName("chr-id")[0].value;
      const name = document.getElementsByName("name")[1].value;
      const occupation = document.getElementsByName("occupation")[1].value;
      const weapon = document.getElementsByName("weapon")[1].value;
      const cartoon = document.getElementsByName("cartoon")[1].checked;

      const editCharacter = {
        name: name,
        occupation: occupation,
        weapon: weapon,
        cartoon: cartoon,
      };
      charactersAPI.updateOneRegister(id, editCharacter);
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementsByName("name")[0].value;
      const occupation = document.getElementsByName("occupation")[0].value;
      const weapon = document.getElementsByName("weapon")[0].value;
      const cartoon = document.getElementsByName("cartoon")[0].checked;

      const newCharacter = {
        name: name,
        occupation: occupation,
        weapon: weapon,
        cartoon: cartoon,
      };

      charactersAPI.createOneRegister(newCharacter);
      //guardar datos en un objeto, y pasarlo al metodo
    });
});
