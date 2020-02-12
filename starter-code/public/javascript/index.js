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

          console.log(card)
          // characterInfoDOM.appendChild(card);

          document.querySelector('.characters-container').innerHTML += card
        });
      })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});