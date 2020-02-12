const charactersAPI = new APIHandler('https://minions-api.herokuapp.com')

let inputs = document.querySelectorAll('input')

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    let characterContainer = document.querySelector('.characters-container')
    charactersAPI.getFullList()
      .then(characters => {
        let allCharacters = characters.data
        characterContainer.innerHTML = "";
        allCharacters.forEach(elm => {
          // console.log(allCharacters)

          card = document.createElement('div');
          card.className = "character-info";
          card.innerHTML =
            `<div class="name">${elm.name}</div>
            <div class="occupation">${elm.occupation}</div>
            <div class="cartoon">${elm.cartoon}</div>
            <div class="weapon">${elm.weapon}</div>`
          characterContainer.appendChild(card);
          // console.log(name)
          // console.log(elm.name)

        });
      })
  })

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let inputOne = document.querySelector('#fetch-one').value;
    charactersAPI.getOneRegister(inputOne)
      .then((info) => {
        document.querySelector('.name').innerHTML = info.data.name //Falla ?
        document.querySelector('.occupation').innerHTML = info.data.occupation
        document.querySelector('.cartoon').innerHTML = info.data.cartoon
        document.querySelector('.weapon').innerHTML = info.data.weapon
      })
  })

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let id = document.querySelector('#delete').value
    charactersAPI.deleteOneRegister(id)
  })

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()

    let id = document.querySelector('#change-id').value;
    let name = document.querySelector('#change-name').value;
    let occupation = document.querySelector('#change-occupation').value;
    let weapon = document.querySelector('#change-weapon').value;
    let cartoon = document.querySelector('#isCartoon').value;

    charactersAPI.updateOneRegister(id, {
      name,
      occupation,
      weapon,
      cartoon
    })
  })

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()

  })
})