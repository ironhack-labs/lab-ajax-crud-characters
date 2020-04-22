const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
      .then(minions => {
        minions.forEach(minion => {
          let divToAppend = document.querySelector('.characters-container')
          divToAppend.innerHTML += `<div class="character-info">
          <div class="character-id">${minion.id}</div>
        <div class="name">${minion.name}</div>
        <div class="occupation">${minion.occupation}</div>
        <div class="cartoon">${minion.cartoon}</div>
        <div class="weapon">${minion.weapon}</div>
      </div>`

        })
      })
  })

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    const characterId = document.querySelector('#character-id').value
    charactersAPI.getOneRegister(characterId)
      .then(minions => {
        console.log(minions)
        let divToAppend = document.querySelector('.characters-container')
        divToAppend.innerHTML = `<div class="character-info">
          <div class="character-id">${minions.id}</div>
          <div class="name">${minions.name}</div>
          <div class="occupation">${minions.occupation}</div>
          <div class="cartoon">${minions.cartoon}</div>
          <div class="weapon">${minions.weapon}</div>
        </div>`
      })

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    const characterId = document.querySelector('#character-id-delete').value

    charactersAPI
      .deleteOneRegister(characterId)
      .then(console.log('Minion borrado'))

  })

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    const characterInfo = {
      name: document.getElementById("name").value,
      occupation: document.getElementById("occupation").value,
      weapon: document.getElementById("weapon").value,
      cartoon: document.getElementById("cartoon").value
    }

  });
});
