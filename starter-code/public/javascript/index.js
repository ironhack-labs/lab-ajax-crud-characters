const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');

// let characterInfoDOM = document.querySelector(".characters-container")

window.addEventListener('load', () => {


  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
      .then(characters => {
        let allCharacters = characters.data;

        console.log(allCharacters)

        // characterInfoDOM.innerHTML = "";
        document.querySelector('.characters-container').innerHTML = ""

        allCharacters.forEach(element => {

          // card = document.createElement('div');
          // card.className = "character-info";
          // card.innerHTML =
          const card =
            `<div class="character-info">
            <div class="name">${element.name}</div>
            <div class="occupation">${element.occupation}</div>
            <div class="cartoon">${element.cartoon}</div>
            <div class="weapon">${element.weapon}</div>`

          // console.log(card)
          // characterInfoDOM.appendChild(card);

          document.querySelector('.characters-container').innerHTML += card
        });
      })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let id = document.querySelector('#one-character').value
    charactersAPI.getOneRegister(id)
      .then(elm => {
        document.querySelector('.name').innerHTML = elm.data.name
        document.querySelector('.occupation').innerHTML = elm.data.occupation
        document.querySelector('.cartoon').innerHTML = elm.data.cartoon
        document.querySelector('.weapon').innerHTML = elm.data.weapon
      })

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let id = document.querySelector('#one-delete').value
    charactersAPI.deleteOneRegister(id)
      .then(() => {
        document.querySelector('#delete-one').style.backgroundColor = 'green'
      })
      .catch(error => {
        document.querySelector('#delete-one').style.background = 'red'
        console.log(error)
      })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    charactersAPI.updateOneRegister()

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    charactersAPI.createOneRegister()

  });
});