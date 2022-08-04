const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    const container = document.querySelector(".characters-container");
    charactersAPI.getFullList().then((response) => {
      console.log(response);
      response.data.forEach((character) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="character-info">
          <div class="name">${character.name}</div>
          <div class="occupation">${character.occupation}</div>
          <div class="cartoon">${character.cartoon}</div>
          <div class="weapon">${character.weapon}</div>
        </div>
     `;
        container.appendChild(div);
      });
    });
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const inputValue = document.getElementById('characterId').value;
    const container = document.querySelector(".characters-container");
    charactersAPI.getOneRegister(inputValue)
    .then((character)=> {
      console.log(character)
      const div = document.createElement("div");
      div.innerHTML = `
      <div class="character-info">
        <div class="name">${character.data.name}</div>
        <div class="occupation">${character.data.occupation}</div>
        <div class="cartoon">${character.data.cartoon}</div>
        <div class="weapon">${character.data.weapon}</div>
      </div>
   `;
      container.appendChild(div);
    })
    .catch(err => console.log(err))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const inputValue = document.getElementById('deleteId').value
    console.log(inputValue)

    charactersAPI.getOneRegister(inputValue)
    .then((character) => {
      const {id} = character.data;
      charactersAPI.deleteOneRegister(id)
      .then(deletedRegister => console.log(deletedRegister))
      .catch(err => console.log(err))

    })
    .catch(err => console.log(err))
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    //not working yet. Need to debug.
    const newCharacter = {
      name: document.getElementById('nameInput').value,
      occupation: document.getElementById('occupationInput').value,
      weapon: document.getElementById('weaponId').value,
    }
    console.log(newCharacter)

    charactersAPI.createOneRegister(newCharacter.data)
    .then((characterData) => console.log(characterData))
    .catch(err => console.log(err))
  });
});
