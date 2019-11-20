const charactersAPI = new APIHandler("http://localhost:8000");
const card = document.querySelector(".characters-container");
window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function(event) {

      getAllChar();
      console.log(getAllChar())
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function(event) {
      const id = document.querySelector("#character-id").value;
  
      getOneChar(id)
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function(event) {
      const idDelete = document.querySelector("#deleteOne").value;
      charactersAPI.deleteOneRegister(idDelete)
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function(event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function(event) {});
});

function getAllChar() {
  charactersAPI.getFullList().then(character => {
    character.data.forEach(element => {
      card.innerHTML = `<div class="character-info">
    <div class="name">${element.name}</div>
    <div class="occupation">${element.occupation}</div>
    <div class="cartoon">${element.cartoon}</div>
    <div class="weapon">${element.weapon}</div>
  </div>`;
      console.log(element);
    });
  });
}

function getOneChar(id) {
charactersAPI.getOneRegister(id).then(character => {

      card.innerHTML = `<div class="character-info">
    <div class="name">${character.data.name}</div>
    <div class="occupation">${character.data.occupation}</div>
    <div class="cartoon">${character.data.cartoon}</div>
    <div class="weapon">${character.data.weapon}</div>
  </div>`;

  });
}
