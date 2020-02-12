const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');

window.addEventListener('load', () => {

  document.getElementById('fetch-all').addEventListener('click', e => {
    charactersAPI.getFullList()
      .then(characters => {
        let allCharacters = characters.data

        document.querySelector('.characters-container').innerHTML = ""

        allCharacters.forEach(element => {
          const card =
            `<div class="character-info">
            <div class="name">${element.name}</div>
            <div class="occupation">${element.occupation}</div>
            <div class="cartoon">${element.cartoon}</div>
            <div class="weapon">${element.weapon}</div>
          </div>`
          document.querySelector('.characters-container').innerHTML += card
        });

      })
  });


  document.getElementById('fetch-one').addEventListener('click', e => {
    const characterId = document.getElementById('character-id').value

    charactersAPI.getOneRegister(characterId)
      .then(theCharacter => {

        document.querySelector('.characters-container').innerHTML =
          `<div class="character-info">
            <div class="name">${theCharacter.data.name}</div>
            <div class="occupation">${theCharacter.data.occupation}</div>
            <div class="cartoon">${theCharacter.data.cartoon}</div>
            <div class="weapon">${theCharacter.data.weapon}</div>
          </div>`
      })

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
