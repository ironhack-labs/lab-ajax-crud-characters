const charactersAPI = new APIHandler(`http://localhost:8000/characters`);
const characterContainer = document.querySelector(".characters-container");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function(event) {
      event.preventDefault();
      printAllCharacters();
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function(event) {
      event.preventDefault();
      const id = document.getElementById("fetch-one-input").value;
      charactersAPI.getOneRegister(id).then(res => {
        const { data } = res;
        characterContainer.innerHTML = ``;
        characterContainer.innerHTML += `
      <div class="character-info">
        <div class="name">${data.name}</div>
        <div class="occupation">${data.occupation}</div>
        <div class="cartoon">${data.cartoon}</div>
        <div class="weapon">${data.weapon}</div>
      </div>
      `;
      });
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function(event) {
      event.preventDefault();
      const id = document.getElementById("delete-one-input").value;
      charactersAPI.deleteOneRegister(id).then(() => {
        printAllCharacters();
      });
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function(event) {
      event.preventDefault();
      event.stopPropagation();
      const id = document.getElementById("chr-id").value;
      const name = document.getElementById("chr-name").value;
      const occupation = document.getElementById("chr-occupation").value;
      const weapon = document.getElementById("chr-weapon").value;
      const cartoon = document.getElementById("chr-cartoon").checked;

      charactersAPI
        .updateOneRegister(
          id,
          {name,
            occupation,
            weapon,
            cartoon}
        )
        .then(() => {
          printAllCharacters();
        })
        .catch(error => console.log(error));
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function(event) {
      event.preventDefault();
      event.stopPropagation();
      const name = document.getElementById("createCharacter-name").value;
      const occupation = document.getElementById("createCharacter-occupation")
        .value;
      const weapon = document.getElementById("createCharacter-weapon").value;
      const cartoon = document.getElementById("createCharacter-cartoon").checked;
      console.log(name)
      console.log(occupation)
      console.log(weapon)
      console.log(cartoon)
      charactersAPI
        .createOneRegister({
          name,
          occupation,
          weapon,
          cartoon
        })
        .then(() => {
          printAllCharacters();
        })
        .catch(error => console.log(error));
    });
});

const printAllCharacters = () => {
  charactersAPI.getFullList().then(res => {
    const { data } = res;
    characterContainer.innerHTML = ``;
    data.forEach(character => {
      characterContainer.innerHTML += `
      <div class="character-info">
        <div class="name">${character.name}</div>
        <div class="occupation">${character.occupation}</div>
        <div class="cartoon">${character.cartoon}</div>
        <div class="weapon">${character.weapon}</div>
      </div>
      `;
    });
  });
};
