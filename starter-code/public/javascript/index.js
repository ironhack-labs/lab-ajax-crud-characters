const charactersAPI = new APIHandler('http://localhost:8000');

let characterInfoDOMEl = document.querySelector(".characters-container")

let card;

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
      .then(characters => {
        let allCharacters = characters.data;

        console.log(allCharacters)

        characterInfoDOMEl.innerHTML = "";
        allCharacters.forEach(element => {

          card = document.createElement('div');
          card.className = "character-info";
          card.innerHTML =
            `<div class="name">${element.name}</div>
            <div class="occupation">${element.occupation}</div>
            <div class="cartoon">${element.cartoon}</div>
            <div class="weapon">${element.weapon}</div>`
          
            console.log(card)
          characterInfoDOMEl.appendChild(card);

        });
      })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let id = document.querySelector('#fetchOne-input').value;
    
    
    charactersAPI.getOneRegister(id) 
    .then((data) => {
      document.querySelector('.name').innerHTML = data.data.name;
      document.querySelector('.occupation').innerHTML = data.data.occupation;
      document.querySelector('.cartoon').innerHTML = data.data.cartoon;
      document.querySelector('.weapon').innerHTML = data.data.weapon;
    });

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let id = document.querySelector('#detele-input').value;
    charactersAPI.deleteOneRegister(id);
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
     
    let id = document.querySelector('#id-update').value;
    let name = document.querySelector('#name-update').value;
    let occupation = document.querySelector('#occ-update').value;
    let weapon = document.querySelector('#weapon-update').value;
    let cartoon = document.querySelector('#cartoon-update').value;
    
    
    charactersAPI.updateOneRegister(id, {name: name, occupation: occupation, weapon: weapon})
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    createOneRegister()
  });
});
