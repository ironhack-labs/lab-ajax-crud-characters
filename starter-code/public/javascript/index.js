const charactersAPI = new APIHandler('http://localhost:8000');

const charContainerDOMEl = document.querySelector('.characters-container');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then(allChars => {
      let charsPayload = allChars.data;

      charContainerDOMEl.innerHTML = "";
      
      charsPayload.forEach(character => {
        paintCharacters(character);
      });
    });
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let idInputDOMEl = document.querySelector('input[name=character-id]');
    let id = idInputDOMEl.value;
    charactersAPI.getOneRegister(`${id}`)
    .then(character => {
      let characterPayload = character.data;
      charContainerDOMEl.innerHTML = "";
      paintCharacters(characterPayload);
    })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let idInputDOMEl = document.querySelector('input[name=character-id-delete]');
    let deleteButton = document.querySelector('#delete-one');
    let id = idInputDOMEl.value;
    charactersAPI.deleteOneRegister(`${id}`)
    .then(() => {deleteButton.style.backgroundColor = 'green'})
    .catch(() => {deleteButton.style.backgroundColor = 'red'})
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const updateButton = document.querySelector('#update-data');
    const id = document.querySelector('#edit-character-form input[name=chr-id]').value;
    const name = document.querySelector('#edit-character-form input[name=name]').value;
    const occupation = document.querySelector('#edit-character-form input[name=occupation]').value;
    const weapon = document.querySelector('#edit-character-form input[name=weapon]').value;
    const cartoon = document.querySelector('#edit-character-form input[name=cartoon]').checked;
    const newCharacter = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    }
    charactersAPI.updateOneRegister(id, newCharacter)
    .then(() => {updateButton.style.backgroundColor = 'green'})
    .catch(() => {updateButton.style.backgroundColor = 'red'})
  });
});

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const createButton = document.querySelector('#send-data');
    const name = document.querySelector('#new-character-form input[name=name]').value;
    const occupation = document.querySelector('#new-character-form input[name=occupation]').value;
    const weapon = document.querySelector('#new-character-form input[name=weapon]').value;
    const cartoon = document.querySelector('#new-character-form input[name=cartoon]').checked;
    const newCharacter = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    }
    charactersAPI.createOneRegister(newCharacter)
    .then(() => {createButton.style.backgroundColor = 'green'})
    .catch(() => {createButton.style.backgroundColor = 'red'})
  });


function paintCharacters(character) {
  let divCharacterInfo = document.createElement('div');
  divCharacterInfo.classList.add('character-info');
  divCharacterInfo.innerHTML = (`
    <div class="name">Name: <span>${character.name}</span></div>
    <div class="occupation">Occupation: <span>${character.occupation}</span></div>
    <div class="cartoon">Is a cartoon?: <span>${character.cartoon}</span></div>
    <div class="weapon">Weapon: <span>${character.weapon}</span></div>
  `);
  charContainerDOMEl.appendChild(divCharacterInfo);
}