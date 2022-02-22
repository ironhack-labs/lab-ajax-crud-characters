const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      const container = document.getElementsByClassName(
        "characters-container"
      )[0];
      let containerInnerHTML = "";
      charactersAPI
        .getFullList()
        .then((result) => {
          result.forEach((character) => {
            console.log(character.name);
            const { id, name, occupation, weapon, cartoon } = character;
            containerInnerHTML += `<div class="character-info">
          <div class="name">Character Name: ${name} </div>
          <div class="occupation">Character Occupation: ${occupation}</div>
          <div class="cartoon">Is a Cartoon?: ${cartoon}</div>
          <div class="weapon">Character Weapon: ${weapon}</div>
        </div>`;
          });
          container.innerHTML = containerInnerHTML;
        })
        .catch((error) => console.log(error));
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      const container = document.getElementsByClassName(
        "characters-container"
      )[0];
      const id = document.getElementsByName("character-id")[0].value;
      charactersAPI
        .getOneRegister(id)
        .then((character) => {
          const { id, name, occupation, weapon, cartoon } = character;
          container.innerHTML = `<div class="character-info">
      <div class="name">Character Name: ${name} </div>
      <div class="occupation">Character Occupation: ${occupation}</div>
      <div class="cartoon">Is a Cartoon?: ${cartoon}</div>
      <div class="weapon">Character Weapon: ${weapon}</div>
    </div>`;
        })
        .catch((error) => console.log(error));
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      const id = document.getElementsByName("character-id-delete")[0].value;
      charactersAPI.deleteOneRegister(id);
      document.getElementById("fetch-all").click();
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const id = document.getElementsByName("chr-id")[0].value;
      const name = document.getElementsByName("name")[0].value;
      const occupation = document.getElementsByName("occupation")[0].value;
      const weapon = document.getElementsByName("weapon")[0].value;
      const cartoon = document.getElementsByName("cartoon")[0].value;
      const data = {
        name,
        occupation,
        weapon,
        cartoon
      };
      charactersAPI
        .updateOneRegister(id, data)
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementsByName("name")[0].value;
      const occupation = document.getElementsByName("occupation")[0].value;
      const weapon = document.getElementsByName("weapon")[0].value;
      const cartoon = document.getElementsByName("cartoon")[0].value;
      charactersAPI;
      charactersAPI
        .then((result) => {
          const id = result[result.length - 1].id + 1;
          charactersAPI.createOneRegister({
            id: id,
            name: name,
            occupation: occupation,
            weapon: weapon,
            cartoon: cartoon,
          });
        })
        .catch((err) => console.log(err));
    });
});
