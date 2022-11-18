const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
      .then(response => {
        // console.log("Fetch all", response.data);
        const data = response.data;
        console.log("obj",data.length)

        let card = ``;
        data.forEach(character => {
          // console.log("loop",character);
          card += createCard(character);
        })
        document.querySelector('.characters-container').innerHTML = card;
      })
      .catch(err => console.log(err));
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let characterId = document.querySelector('.operation input').value;
    charactersAPI.getOneRegister(characterId)
      .then(response => {
        const data = response.data;
        document.querySelector('.characters-container').innerHTML = createCard(data);
      })
      .catch(err => console.log(err));
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let characterId = document.querySelector('.character-id-delete').value;
    // console.log("id", characterId);
    charactersAPI.deleteOneRegister(characterId)
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
  });
  
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let characterId = document.querySelector('#edit-character-form input[name=chr-id]').value
    let editName = document.querySelector('#edit-character-form input[name=name]').value
    let editOccupation = document.querySelector('#edit-character-form input[name=occupation]').value
    let editWeapon = document.querySelector('#edit-character-form input[name=weapon]').value
    let editCartoon = document.querySelector('#edit-character-form input[name=cartoon]').checked

    let editObject = {
      id: characterId,
      name: editName,
      occupation: editOccupation,
      weapon: editWeapon,
      cartoon: editCartoon
    }

    charactersAPI.updateOneRegister(characterId, editObject)
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let newName = document.querySelector('#new-character-form input[name=name]').value
    let newOccupation = document.querySelector('#new-character-form input[name=occupation]').value
    let newWeapon = document.querySelector('#new-character-form input[name=weapon]').value
    let newCartoon = document.querySelector('#new-character-form input[name=cartoon]').checked

    let newObject = {
      name: newName,
      occupation: newOccupation,
      weapon: newWeapon,
      cartoon: newCartoon
    }
    charactersAPI.createOneRegister(newObject)
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
  });
});

function createCard(character) {
  let { id, name, occupation, cartoon, weapon} = character;
  let characterCard = `<div class="character-info">
        <div class="name">Name: <span>${name}</span></div>
        <div class="occupation">Occupation: <span>${occupation}</span></div>
        <div class="cartoon">Is Cartoon?: <span>${cartoon}</span></div>
        <div class="weapon">Weapon: <span>${weapon}</span></div>
      </div>`
  // console.log(characterCard);
  return characterCard;
}