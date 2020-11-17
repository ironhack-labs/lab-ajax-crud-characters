const charactersAPI = new APIHandler('https://minions-api.herokuapp.com/');

// FETCH ALL
window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault();
    charactersAPI
      .getFullList()
      .then(response => {
        let allCharacters = response.data;
        let charactersHtml = '';
        allCharacters.forEach(element => {
          charactersHtml += `<div class="character-info">
                              <div class="name">Name: ${element.name}</div>
                              <div class="occupation">Occupation: ${element.occupation}</div>
                              <div class="cartoon">Is a Cartoon?: ${element.cartoon}</div>
                              <div class="weapon">Weapon: ${element.weapon}</div>
                            </div>`
        })
        document.querySelector('.character-info').innerHTML = charactersHtml
      })
      .catch(error => console.log('Not displaying full list', error));
  });

  // FETCH ONE
  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault();
    const findCharacterById = document.querySelector('.operation input').value;
    charactersAPI
      .getOneRegister(findCharacterById)
      .then(response => {
        let characterID = response.data;
        let characterIdHtml = '';
        characterIdHtml += `<div class="character-info">
                              <div class="name">Name: ${characterID.name}</div>
                              <div class="occupation">Occupation: ${characterID.occupation}</div>
                              <div class="cartoon">Is a Cartoon?: ${characterID.cartoon}</div>
                              <div class="weapon">Weapon: ${characterID.weapon}</div>
                            </div>`
        document.querySelector('.characters-container').innerHTML = characterIdHtml;
        document.querySelector('.operation input').reset();
      })
      .catch(error => console.log('Not displaying characters Id', error));
    
  });

  // DELETE ONE
  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();
    const deletingCharacterById = document.querySelector('.delete input').value
    charactersAPI
      .deleteOneRegister(deletingCharacterById)
      .then(() => {
        document.querySelector('#delete-one').style.backgroundColor = 'green';
        document.querySelector('.delete input').reset();
      })
      .catch(error => document.querySelector('#delete-one',error).style.backgroundColor = 'red');
  });

  // EDIT CHARACTER
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const inputs = document.querySelectorAll('#edit-character-form input');
    const characterInfo = {
      id: inputs[0].value,
      name: inputs[1].value,
      occupation: inputs[2].value,
      weapon: inputs[3].value,
      cartoon: inputs[4].checked
    }
    const id = document.querySelector('#edit-character-form input').value

    charactersAPI
      .updateOneRegister(id, characterInfo)
      .then(() => {
        document.querySelector('#edit-data').style.backgroundColor = 'green'
        document.querySelector('#edit-character-form input').reset()
      })
      .catch(error => document.querySelector('#edit-data', error).style.backgroundColor = 'red')
  });

  // CREATE CHARACTER
  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const inputs = document.querySelectorAll('#new-character-form input')

    const characterInfo = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value,
      cartoon: inputs[3].checked,
    }

    charactersAPI
      .createOneRegister(characterInfo)
      .then(() => {

        document.querySelector('#send-data').style.backgroundColor = 'green'
        document.querySelector('#new-character-form').reset()
      })
      .catch(err => console.log('HUBO UN ERROR!', err))
  });
});
