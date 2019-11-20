const charactersAPI = new APIHandler("http://localhost:8000/characters");


window.addEventListener("load", () => {
  document.getElementById("fetch-all").addEventListener("click", function(event) {
    charactersAPI.getFullList()
    .then(characters => {
      document.querySelector(".characters-container").innerHTML = "";
      let { data } = characters;
      data.forEach((character) => {
      document.querySelector(".characters-container").innerHTML += `<div class="characters-container">
      <div class="character-info">
      <div class="name">${character.name}</div>
      <div class="occupation">${character.occupation}</div>
      <div class="cartoon">${character.cartoon}</div>
      <div class="weapon">${character.weapon}</div>
    </div>
  </div>`
        
      })
    })

  });

  document.getElementById("fetch-one").addEventListener("click", function(event) {
    let id = document.querySelector('input[name="character-id"]').value;
    charactersAPI.getOneRegister(id)
    .then(character => {
      console.log(character)
      document.querySelector(".characters-container").innerHTML = "";
      document.querySelector(".characters-container").innerHTML += `<div class="characters-container">
      <div class="character-info">
      <div class="name">${character.data.name}</div>
      <div class="occupation">${character.data.occupation}</div>
      <div class="cartoon">${character.data.cartoon}</div>
      <div class="weapon">${character.data.weapon}</div>
    </div>
  </div>`

    })
  });

  document
    .getElementById("delete-one")
    .addEventListener("click", function(event) {
      let id = document.querySelector('input[name="character-id-delete"]').value;
      charactersAPI.deleteOneRegister(id)
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function(event) {
      let id = document.querySelector('input[name="chr-id"]').value;
      let character = {
        name : document.querySelector('input[name="name2"]').value,
        occupation : document.querySelector('input[name="occupation2"]').value,
        weapon : document.querySelector('input[name="weapon2"]').value,
        cartoon : document.querySelector('input[name="cartoon2"]').value,
      }
      charactersAPI.updateOneRegister(id,character)
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function(event) {


      let character = {
        name : document.querySelector('input[name="name"]').value,
        occupation : document.querySelector('input[name="occupation"]').value,
        weapon : document.querySelector('input[name="weapon"]').value,
        cartoon : document.querySelector('input[name="cartoon"]').value,
      }
      charactersAPI.createOneRegister(character)
    });
});
